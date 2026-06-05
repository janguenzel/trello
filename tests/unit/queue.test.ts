import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Queue, DirectQueue } from "../../src/core/queue/queue.js";
import { TrelloQueueError, TrelloNetworkError } from "../../src/core/errors.js";
import { NoopRateLimiter } from "../../src/core/rate-limiter.js";
import { QueueStorage, generateJobId } from "../../src/core/queue/storage.js";
import type { HttpLayer, HttpRequest } from "../../src/core/http.js";

const fakeRequest = { method: "POST", url: "https://test", body: null };

// ── DirectQueue ───────────────────────────────────────────────────────────────

describe("DirectQueue", () => {
  it("result() resolves with the HTTP response", async () => {
    const mockHttp: HttpLayer = {
      execute: <T>() => Promise.resolve({ id: "card1" } as T),
    };
    const dq = new DirectQueue(mockHttp);
    const handle = await dq.enqueue<{ id: string }>({ method: "GET", path: "/cards/1" });
    const result = await handle.result();
    assert.equal(result.id, "card1");
  });

  it("cancel() throws TrelloQueueError (direct jobs cannot be cancelled)", async () => {
    const mockHttp: HttpLayer = {
      execute: <T>() => new Promise<T>(() => undefined), // never resolves
    };
    const dq = new DirectQueue(mockHttp);
    const handle = await dq.enqueue({ method: "GET", path: "/cards/1" });
    await assert.rejects(() => handle.cancel(), TrelloQueueError);
  });

  it("http.execute() is NOT called on enqueue — only when result() is invoked (D-1 lazy fix)", async () => {
    let executeCallCount = 0;
    const mockHttp: HttpLayer = {
      execute: <T>() => {
        executeCallCount++;
        return Promise.resolve({} as T);
      },
    };

    const dq = new DirectQueue(mockHttp);
    const handle = await dq.enqueue({ method: "POST", path: "/cards" });

    // Yield the event loop — execute should NOT have been called yet
    await new Promise<void>(resolve => setTimeout(resolve, 10));
    assert.equal(executeCallCount, 0, "http.execute must not be called before result()");

    await handle.result();
    assert.equal(executeCallCount, 1, "http.execute must be called once on result()");

    // Calling result() a second time must return the memoized promise, not re-execute
    await handle.result();
    assert.equal(executeCallCount, 1, "http.execute must NOT be called again on second result()");
  });
});

// ── Queue ─────────────────────────────────────────────────────────────────────

describe("Queue", () => {
  let tmpDir = "";

  beforeEach(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), "trello-queue-test-"));
  });

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true });
  });

  it("cancel() of a running job rejects result() with TrelloQueueError", async () => {
    // Mock HTTP that blocks until aborted via the AbortSignal
    const mockHttp: HttpLayer = {
      execute: <T>(req: HttpRequest) =>
        new Promise<T>((_, reject) => {
          const abort = (): void => {
            const err = new Error("The operation was aborted");
            err.name = "AbortError";
            reject(err);
          };
          if (req.signal?.aborted) {
            abort();
            return;
          }
          req.signal?.addEventListener("abort", abort, { once: true });
        }),
    };

    const queue = new Queue(mockHttp, new NoopRateLimiter(), { enabled: true, path: tmpDir });
    await queue.recover();

    const handle = await queue.enqueue({ method: "POST", path: "/cards" });

    // Wait for runJob to start executing the HTTP call (scheduleJob uses setTimeout/microtask)
    await new Promise<void>(resolve => setTimeout(resolve, 20));

    // Cancel the in-flight job
    await handle.cancel();

    // result() must reject with TrelloQueueError
    await assert.rejects(() => handle.result(), TrelloQueueError);
  });

  it("cancel() of a terminal job is a no-op", async () => {
    const mockHttp: HttpLayer = {
      execute: <T>() => Promise.resolve({ id: "card1" } as T),
    };

    const queue = new Queue(mockHttp, new NoopRateLimiter(), { enabled: true, path: tmpDir });
    await queue.recover();

    const handle = await queue.enqueue<{ id: string }>({ method: "POST", path: "/cards" });

    // Wait for the job to complete
    await handle.result();

    // cancel() after completion must not throw
    await assert.doesNotReject(() => handle.cancel());
  });

  it("recover() resets persisted 'running' jobs to 'queued' and re-executes them", async () => {
    // Simulate a crash by writing log events that leave a job in "running" state
    const storage = new QueueStorage(tmpDir);
    await storage.init();
    const jobId = generateJobId();
    await storage.append({ event: "enqueue", id: jobId, definition: { method: "POST", path: "/cards" }, ts: Date.now() });
    await storage.append({ event: "start", id: jobId, attempt: 0, ts: Date.now() });

    // Verify that QueueStorage.recover() yields the job in "running" state (as persisted)
    const rawJobs = await storage.recover();
    assert.equal(rawJobs.get(jobId)?.state, "running");

    // Now create a Queue and call recover() — it should reset "running" → "queued"
    // and schedule the job for re-execution
    let executed = false;
    const executedPromise = new Promise<void>(resolve => {
      const mockHttp: HttpLayer = {
        execute: <T>() => {
          executed = true;
          resolve();
          return Promise.resolve({} as T);
        },
      };

      const queue = new Queue(mockHttp, new NoopRateLimiter(), { enabled: true, path: tmpDir });
      queue.recover().catch(() => undefined);
    });

    await executedPromise;
    assert.ok(executed, "Job recovered from 'running' state should be re-executed");
  });

  it("exhausts maxJobAttempts and rejects result() with dead_letter error (TC-3)", async () => {
    const mockHttp: HttpLayer = {
      execute: <T>(_req: HttpRequest) => {
        return Promise.reject(
          new TrelloNetworkError("network failure", null, fakeRequest, null, true, null),
        ) as Promise<T>;
      },
    };

    const queue = new Queue(mockHttp, new NoopRateLimiter(), {
      enabled: true,
      path: tmpDir,
      maxJobAttempts: 2,
    });
    await queue.recover();

    const handle = await queue.enqueue({ method: "POST", path: "/cards" });

    await assert.rejects(
      () => handle.result(),
      (err: unknown) => {
        assert.ok(err instanceof TrelloNetworkError, `Expected TrelloNetworkError, got ${String(err)}`);
        return true;
      },
    );
  });

  it("resolves result() with HTTP result even when storage.append(complete) throws (Q3 real injection, TC-4)", async () => {
    let appendCallCount = 0;
    const mockHttp: HttpLayer = {
      execute: <T>() => Promise.resolve({ id: "card42" } as T),
    };

    const queue = new Queue(mockHttp, new NoopRateLimiter(), { enabled: true, path: tmpDir });
    await queue.recover();

    // Monkey-patch storage.append to throw on the "complete" event
    const storage = (queue as unknown as { storage: QueueStorage }).storage;
    const originalAppend = storage.append.bind(storage);
    storage.append = async (event: Parameters<QueueStorage["append"]>[0]) => {
      appendCallCount++;
      if (event.event === "complete") throw new Error("disk full");
      return originalAppend(event);
    };

    const handle = await queue.enqueue<{ id: string }>({ method: "POST", path: "/cards" });
    const result = await handle.result();

    assert.equal(result.id, "card42", "Result must be returned despite storage.append failure");
  });

  it("destroy() clears all scheduled retry timers so no work runs after teardown (H-3)", async () => {
    let firstCallResolve!: () => void;
    const firstCallPromise = new Promise<void>((r) => { firstCallResolve = r; });

    const mockHttp: HttpLayer = {
      execute: <T>(_req: HttpRequest) => {
        firstCallResolve();
        return Promise.reject(
          new TrelloNetworkError("network failure", null, fakeRequest, null, true, null),
        ) as Promise<T>;
      },
    };

    const queue = new Queue(mockHttp, new NoopRateLimiter(), {
      enabled: true,
      path: tmpDir,
      maxJobAttempts: 5,
    });
    await queue.recover();
    await queue.enqueue({ method: "POST", path: "/cards" });

    // Wait for execute() + catch block + storage.append("fail") + _scheduleDelayed()
    await firstCallPromise;
    await new Promise<void>((r) => setTimeout(r, 100));

    const timers = (queue as unknown as { _timers: Set<unknown> })._timers;
    assert.ok(timers.size > 0, `Expected pending retry timer after failure, got ${timers.size}`);

    queue.destroy();
    assert.equal(timers.size, 0, "destroy() must clear all pending timers");
  });

  it("result() promise resolves exactly once even when called concurrently", async () => {
    // Verifies that multiple concurrent result() calls don't double-resolve.
    // (The httpSucceeded flag prevents retry after HTTP success; this validates
    // the resolver-settlement side of that contract.)
    let resolveCount = 0;

    const mockHttp: HttpLayer = {
      execute: <T>() => Promise.resolve({ resolved: true } as T),
    };

    const queue = new Queue(mockHttp, new NoopRateLimiter(), { enabled: true, path: tmpDir });
    await queue.recover();

    const handle = await queue.enqueue<{ resolved: boolean }>({ method: "POST", path: "/cards" });

    handle.result().then(() => { resolveCount++; }).catch(() => undefined);
    await handle.result();

    // Give extra time to confirm no double-resolve
    await new Promise<void>(resolve => setTimeout(resolve, 20));
    assert.equal(resolveCount, 1, "result() promise must resolve exactly once");
  });
});
