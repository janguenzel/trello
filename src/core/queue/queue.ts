import type { AnyRateLimiter } from "../rate-limiter.js";
import { TrelloQueueError } from "../errors.js";
import { isTrelloError, TrelloRateLimitError } from "../errors.js";
import type { HttpLayer } from "../http.js";
import type { Job, JobDefinition } from "./job.js";
import { isTerminal } from "./job.js";
import { QueueStorage, generateJobId } from "./storage.js";

export interface QueueConfig {
  enabled: boolean;
  path?: string;
  /** Max times a job is rescheduled at the job level (default: 3).
   *  Separate from HTTP-layer per-request retries (configured via TrelloClientOptions.retry). */
  maxJobAttempts?: number;
}

export interface JobHandle<T> {
  readonly jobId: string;
  /**
   * Resolves with the job's result once the mutation completes.
   *
   * **Important:** This promise only resolves within the process that called
   * `enqueue()`. After a crash and `recover()`, re-executed jobs have no
   * associated resolver — their results are persisted to storage but cannot
   * be awaited via `result()`. Use the `jobId` as a correlation ID if you
   * need to track results across process restarts.
   */
  result(): Promise<T>;
  cancel(): Promise<void>;
}

type Resolver<T> = {
  resolve: (value: T) => void;
  reject: (reason: unknown) => void;
};

export class Queue {
  private readonly storage: QueueStorage;
  private jobs = new Map<string, Job>();
  private resolvers = new Map<string, Resolver<unknown>>();
  private controllers = new Map<string, AbortController>();
  private readonly _timers = new Set<ReturnType<typeof setTimeout>>();

  constructor(
    private readonly http: HttpLayer,
    private readonly rateLimiter: AnyRateLimiter,
    private readonly config: QueueConfig,
  ) {
    this.storage = new QueueStorage(config.path ?? "./.trello-queue");
  }

  async recover(): Promise<void> {
    await this.storage.init(); // creates the queue directory if it doesn't exist
    this.jobs = await this.storage.recover();

    // Jobs that were "running" when the process crashed are no longer executing.
    // Reset them to "queued" so the guard in runJob() doesn't permanently skip them.
    for (const job of this.jobs.values()) {
      if (job.state === "running") job.state = "queued";
    }

    // Stagger rescheduled jobs by 100 ms each to avoid a thundering herd of
    // simultaneous requests when recovering a large backlog after a crash.
    let delay = 0;
    for (const job of this.jobs.values()) {
      if (!isTerminal(job.state)) {
        this._scheduleDelayed(job.id, delay);
        delay += 100;
      }
    }
  }

  async enqueue<T>(definition: JobDefinition): Promise<JobHandle<T>> {
    const id = generateJobId();
    const ts = Date.now();

    await this.storage.append({
      event: "enqueue",
      id,
      definition,
      ts,
    });

    const job: Job = {
      id,
      definition,
      createdAt: ts,
      state: "queued",
      attempt: 0,
      updatedAt: ts,
    };
    this.jobs.set(id, job);

    const promise = new Promise<T>((resolve, reject) => {
      this.resolvers.set(id, {
        resolve: resolve as (v: unknown) => void,
        reject,
      });
    });

    this.scheduleJob(id);

    const self = this;
    return {
      jobId: id,
      result() {
        return promise;
      },
      async cancel() {
        const current = self.jobs.get(id);
        if (current == null || isTerminal(current.state)) return;
        if (current.state === "running") {
          // Abort the in-flight fetch; runJob()'s catch block handles cleanup.
          self.controllers.get(id)?.abort();
          return;
        }
        await self.storage.append({ event: "cancel", id, ts: Date.now() });
        current.state = "failed";
        current.error = "cancelled";
        self.resolvers.get(id)?.reject(new TrelloQueueError("Job cancelled"));
        self.resolvers.delete(id);
        self.jobs.delete(id);
      },
    };
  }

  private scheduleJob(id: string): void {
    // Defer via microtask to allow current synchronous code to complete first.
    Promise.resolve().then(() => this.runJob(id)).catch(() => undefined);
  }

  private _scheduleDelayed(id: string, delayMs: number): void {
    const t = setTimeout(() => { this._timers.delete(t); this.runJob(id); }, delayMs);
    this._timers.add(t);
  }

  /** Cancel all pending timers. Call on graceful shutdown to prevent resource leaks. */
  destroy(): void {
    for (const t of this._timers) clearTimeout(t);
    this._timers.clear();
  }

  private async runJob(id: string): Promise<void> {
    const job = this.jobs.get(id);
    if (job == null || isTerminal(job.state) || job.state === "running") return;

    // Max job-level rescheduling attempts (separate from HTTP-layer per-request retries).
    const maxJobAttempts = this.config.maxJobAttempts ?? 3;

    const controller = new AbortController();
    this.controllers.set(id, controller);

    // Mark as running synchronously (before any await) so a concurrent runJob()
    // call that slips past the guard above will be stopped by the "running" state
    // check, preventing a double-execution race (Q2).
    job.state = "running";

    // Track whether the HTTP mutation has already been executed on the server.
    // If storage.append("complete") later throws, we must NOT retry — the mutation
    // already happened. Resolve the caller immediately instead (Q3).
    let httpSucceeded = false;
    let httpResult: unknown = undefined;

    try {
      // The HTTP layer handles per-request retries and rate limiting.
      await this.storage.append({ event: "start", id, attempt: job.attempt, ts: Date.now() });

      // Pass the job ID as an idempotency key so that if the server ever
      // supports it, re-executed jobs after a crash won't produce duplicates.
      const result = await this.http.execute({
        ...job.definition,
        headers: { "X-Idempotency-Key": job.id },
        signal: controller.signal,
      });

      httpSucceeded = true;
      httpResult = result;

      await this.storage.append({ event: "complete", id, result, ts: Date.now() });
      job.state = "completed";
      job.result = result;

      this.resolvers.get(id)?.resolve(result);
      this.resolvers.delete(id);
      this.controllers.delete(id);
      this.jobs.delete(id);
    } catch (err) {
      this.controllers.delete(id);

      // HTTP mutation succeeded but storage.append("complete") threw.
      // Resolve the caller with the result we already have — do NOT retry, as
      // retrying would execute the mutation a second time on the server (Q3).
      if (httpSucceeded) {
        job.state = "completed";
        job.result = httpResult;
        this.resolvers.get(id)?.resolve(httpResult);
        this.resolvers.delete(id);
        this.jobs.delete(id);
        return;
      }

      // Cancellation via AbortController: mark as failed and skip retry logic.
      if (err instanceof Error && err.name === "AbortError") {
        job.state = "failed";
        // Best-effort log; resolver is settled regardless (Q4).
        try { await this.storage.append({ event: "cancel", id, ts: Date.now() }); } catch { /* non-fatal */ }
        this.resolvers.get(id)?.reject(new TrelloQueueError("Job cancelled"));
        this.resolvers.delete(id);
        this.jobs.delete(id);
        return;
      }

      job.attempt++;

      if (err instanceof TrelloRateLimitError && err.retryAfter != null) {
        const secs = Math.max(0, (err.retryAfter.getTime() - Date.now()) / 1000);
        this.rateLimiter.handleRateLimit(secs);
      }

      const errorMsg = err instanceof Error ? err.message : String(err);

      if (job.attempt >= maxJobAttempts || (isTrelloError(err) && !err.retryable)) {
        // Best-effort log; resolver is settled regardless of whether the append
        // succeeds or fails, preventing an eternal promise hang (Q4).
        try { await this.storage.append({ event: "dead_letter", id, ts: Date.now() }); } catch { /* non-fatal */ }
        job.state = "dead_letter";
        this.resolvers.get(id)?.reject(err);
        this.resolvers.delete(id);
        this.jobs.delete(id);
      } else {
        // Best-effort log; retry is scheduled regardless (Q4).
        try {
          await this.storage.append({
            event: "fail", id, error: errorMsg, attempt: job.attempt, ts: Date.now(),
          });
        } catch { /* non-fatal */ }
        job.state = "retrying";

        // Exponential backoff for job-level rescheduling
        const delay = Math.min(1000 * Math.pow(2, job.attempt), 30_000);
        this._scheduleDelayed(id, delay);
      }
    }
  }
}


/** No-op queue for when queue is disabled. Jobs execute immediately.
 * Rate limiting and retries are handled by the HTTP layer. */
export class DirectQueue {
  constructor(private readonly http: HttpLayer) {}

  async enqueue<T>(definition: JobDefinition): Promise<JobHandle<T>> {
    const id = generateJobId();
    let promise: Promise<T> | undefined;
    return {
      jobId: id,
      result: () => (promise ??= this.http.execute<T>(definition)),
      cancel: async () => {
        throw new TrelloQueueError("Cannot cancel a direct (non-queued) job");
      },
    };
  }

  async recover(): Promise<void> {}
}

export type AnyQueue = Queue | DirectQueue;

export function createQueue(
  http: HttpLayer,
  rateLimiter: AnyRateLimiter,
  config: QueueConfig,
): AnyQueue {
  if (config.enabled) {
    return new Queue(http, rateLimiter, config);
  }
  return new DirectQueue(http);
}
