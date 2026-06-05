import { randomUUID } from "node:crypto";
import {
  mkdir,
  open,
  readFile,
  rename,
  stat,
  truncate,
  writeFile,
} from "node:fs/promises";
import { join } from "node:path";
import {
  type Job,
  type JobLogEvent,
  applyEvent,
  isTerminal,
} from "./job.js";

const LOG_FILE = "queue.log";
const SNAPSHOT_FILE = "queue.snapshot";
const SNAPSHOT_TMP = "queue.snapshot.tmp";
const COMPACTION_THRESHOLD = 10_000;

export class QueueStorage {
  private readonly logPath: string;
  private readonly snapshotPath: string;
  private readonly snapshotTmpPath: string;
  private lineCount = 0;
  // Serializes all writes and compaction on a single promise chain.
  // This prevents the race where a new append() writes to the log after
  // recover() has snapshotted state but before truncate() runs, which
  // would silently drop that event from both the snapshot and the log.
  private writeQueue: Promise<void> = Promise.resolve();

  constructor(private readonly dir: string) {
    this.logPath = join(dir, LOG_FILE);
    this.snapshotPath = join(dir, SNAPSHOT_FILE);
    this.snapshotTmpPath = join(dir, SNAPSHOT_TMP);
  }

  async init(): Promise<void> {
    await mkdir(this.dir, { recursive: true });
  }

  async append(event: JobLogEvent): Promise<void> {
    const thisWrite = this.writeQueue.then(() => this._doAppend(event));
    // Advance the queue even on error so subsequent appends are not blocked.
    this.writeQueue = thisWrite.catch(() => undefined);
    return thisWrite;
  }

  private async _doAppend(event: JobLogEvent): Promise<void> {
    // Ensure the queue directory exists even if recover() was never called.
    await mkdir(this.dir, { recursive: true });
    const line = JSON.stringify(event) + "\n";
    const fh = await open(this.logPath, "a");
    try {
      await fh.writeFile(line);
      await fh.datasync();
    } finally {
      await fh.close();
    }
    this.lineCount++;

    if (this.lineCount >= COMPACTION_THRESHOLD) {
      // Run compaction inline on the write queue so no append can interleave
      // between the recover() read and the truncate() call.
      try {
        const jobs = await this.recover();
        await this.compact(jobs);
      } catch {
        // non-fatal: compaction failure just means the log stays large
      }
    }
  }

  /**
   * Rebuild in-memory job state from snapshot + log.
   * Discards any torn final line (partial write on crash).
   */
  async recover(): Promise<Map<string, Job>> {
    const jobs = new Map<string, Job>();

    // 1. Load snapshot if it exists
    let snapshotText: string | null = null;
    try {
      snapshotText = await readFile(this.snapshotPath, "utf8");
    } catch {
      // no snapshot yet
    }

    if (snapshotText != null) {
      for (const line of splitLines(snapshotText)) {
        try {
          const job = JSON.parse(line) as Job;
          jobs.set(job.id, job);
        } catch {
          // skip malformed snapshot lines
        }
      }
    }

    // 2. Replay log events on top of snapshot
    let logText: string | null = null;
    try {
      logText = await readFile(this.logPath, "utf8");
    } catch {
      // no log yet
    }

    if (logText != null) {
      // After split("\n"), the delimiter is stripped from every element, so
      // line.endsWith("\n") would always be false. Instead, check whether the
      // raw text ends with "\n" — if not, the last element is a torn partial
      // write caused by a mid-write process kill and must be discarded.
      const lines = logText.split("\n");
      const hasTornLine = !logText.endsWith("\n");
      const linesToProcess = hasTornLine ? lines.slice(0, -1) : lines;
      this.lineCount = linesToProcess.filter((l) => l.trim().length > 0).length;

      for (const line of linesToProcess) {
        const trimmed = line.trim();
        if (trimmed.length === 0) continue;
        try {
          const ev = JSON.parse(trimmed) as JobLogEvent;
          if (ev.event === "enqueue") {
            const job: Job = {
              id: ev.id,
              definition: ev.definition,
              createdAt: ev.ts,
              state: "queued",
              attempt: 0,
              updatedAt: ev.ts,
            };
            jobs.set(ev.id, job);
          } else {
            const existing = jobs.get(ev.id);
            if (existing != null) {
              jobs.set(ev.id, applyEvent(existing, ev));
            }
          }
        } catch {
          // skip malformed lines
        }
      }
    }

    return jobs;
  }

  /**
   * Compact: write snapshot of all non-terminal jobs, then truncate the log.
   * Uses atomic rename for the snapshot to prevent corruption.
   */
  async compact(jobs: Map<string, Job>): Promise<void> {
    const activeJobs = Array.from(jobs.values()).filter(
      (j) => !isTerminal(j.state),
    );
    const snapshotContent = activeJobs.map((j) => JSON.stringify(j)).join("\n");

    await writeFile(this.snapshotTmpPath, snapshotContent + "\n", "utf8");
    await rename(this.snapshotTmpPath, this.snapshotPath);

    // Truncate log — existing log entries are now in the snapshot
    await truncate(this.logPath, 0);
    this.lineCount = 0;
  }

  async logSize(): Promise<number> {
    try {
      const s = await stat(this.logPath);
      return s.size;
    } catch {
      return 0;
    }
  }
}

function splitLines(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
}

/** Generate a unique job ID. */
export function generateJobId(): string {
  return randomUUID().replace(/-/g, "");
}
