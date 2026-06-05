import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { QueueStorage, generateJobId } from "../../src/core/queue/storage.js";

let tmpDir: string;

describe("QueueStorage", () => {
  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), "trello-queue-test-"));
  });

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true });
  });

  it("initializes storage directory", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();
    // Should not throw
  });

  it("recover() returns empty map when no log exists", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();
    const jobs = await storage.recover();
    assert.equal(jobs.size, 0);
  });

  it("appends enqueue event and recovers job", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();

    const id = generateJobId();
    await storage.append({
      event: "enqueue",
      id,
      definition: { method: "POST", path: "/cards", body: { name: "Test" } },
      ts: Date.now(),
    });

    const jobs = await storage.recover();
    assert.equal(jobs.size, 1);

    const job = jobs.get(id);
    assert.ok(job != null);
    assert.equal(job.state, "queued");
    assert.equal(job.id, id);
  });

  it("applies state transitions correctly on recovery", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();

    const id = generateJobId();
    const ts = Date.now();

    await storage.append({ event: "enqueue", id, definition: { method: "POST", path: "/cards" }, ts });
    await storage.append({ event: "start", id, attempt: 0, ts: ts + 1 });
    await storage.append({ event: "complete", id, result: { id: "abc" }, ts: ts + 2 });

    const jobs = await storage.recover();
    const job = jobs.get(id);
    assert.ok(job != null);
    assert.equal(job.state, "completed");
  });

  it("handles multiple jobs independently", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();

    const ids = [generateJobId(), generateJobId(), generateJobId()];
    const ts = Date.now();

    for (const id of ids) {
      await storage.append({
        event: "enqueue",
        id,
        definition: { method: "POST", path: "/cards" },
        ts,
      });
    }

    await storage.append({ event: "complete", id: ids[1]!, result: {}, ts: ts + 1 });

    const jobs = await storage.recover();
    assert.equal(jobs.size, 3);
    assert.equal(jobs.get(ids[0]!)?.state, "queued");
    assert.equal(jobs.get(ids[1]!)?.state, "completed");
    assert.equal(jobs.get(ids[2]!)?.state, "queued");
  });

  it("does NOT discard the last valid line (regression: torn-line detection bug)", async () => {
    // Previously, split("\n") strips the newline delimiter from all elements,
    // so the check `line.endsWith("\n")` was always false — causing the last
    // fully-written line to always be incorrectly discarded.
    const storage = new QueueStorage(tmpDir);
    await storage.init();

    const id = generateJobId();
    const ts = Date.now();
    await storage.append({ event: "enqueue", id, definition: { method: "POST", path: "/cards" }, ts });
    // This "complete" is the last line — it must survive recovery
    await storage.append({ event: "complete", id, result: { id: "newCard" }, ts: ts + 1 });

    const jobs = await storage.recover();
    const job = jobs.get(id);
    assert.ok(job != null);
    assert.equal(job.state, "completed", "last log line must not be discarded as torn");
  });

  it("discards non-terminal jobs on compaction and rebuilds from snapshot", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();

    const id1 = generateJobId();
    const id2 = generateJobId();
    const ts = Date.now();

    await storage.append({ event: "enqueue", id: id1, definition: { method: "POST", path: "/cards" }, ts });
    await storage.append({ event: "enqueue", id: id2, definition: { method: "DELETE", path: "/cards/{id}" }, ts });
    await storage.append({ event: "complete", id: id1, result: {}, ts: ts + 1 });

    let jobs = await storage.recover();
    // Compact - only id2 (queued) should be in snapshot
    await storage.compact(jobs);

    // Now recover from snapshot + (empty) log
    const storage2 = new QueueStorage(tmpDir);
    await storage2.init();
    jobs = await storage2.recover();

    assert.equal(jobs.size, 1);
    assert.ok(jobs.has(id2));
    assert.equal(jobs.get(id2)?.state, "queued");
  });

  it("generateJobId() produces unique 32-char hex strings", () => {
    const ids = new Set(Array.from({ length: 100 }, generateJobId));
    assert.equal(ids.size, 100); // all unique
    for (const id of ids) {
      assert.match(id, /^[0-9a-f]{32}$/);
    }
  });

  it("concurrent append() calls serialize writes without losing events (TC-6)", async () => {
    const storage = new QueueStorage(tmpDir);
    await storage.init();

    const count = 10;
    const ids = Array.from({ length: count }, generateJobId);

    // Fire all appends concurrently
    await Promise.all(
      ids.map((id) =>
        storage.append({
          event: "enqueue",
          id,
          definition: { method: "POST", path: "/cards" },
          ts: Date.now(),
        }),
      ),
    );

    const jobs = await storage.recover();
    assert.equal(jobs.size, count, `Expected ${count} jobs, got ${jobs.size}`);
  });
});
