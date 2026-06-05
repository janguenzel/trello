import type { HttpMethod } from "../http.js";

export type JobState =
  | "queued"
  | "running"
  | "retrying"
  | "completed"
  | "failed"
  | "dead_letter";

export interface JobDefinition {
  readonly method: HttpMethod;
  readonly path: string;
  readonly pathParams?: Record<string, string>;
  readonly queryParams?: Record<string, string | number | boolean | undefined>;
  readonly body?: unknown;
}

export interface Job {
  readonly id: string;
  readonly definition: JobDefinition;
  readonly createdAt: number;
  state: JobState;
  attempt: number;
  result?: unknown;
  error?: string;
  updatedAt: number;
}

export type JobLogEvent =
  | { event: "enqueue"; id: string; definition: JobDefinition; ts: number }
  | { event: "start"; id: string; attempt: number; ts: number }
  | { event: "complete"; id: string; result: unknown; ts: number }
  | { event: "fail"; id: string; error: string; attempt: number; ts: number }
  | { event: "dead_letter"; id: string; ts: number }
  | { event: "cancel"; id: string; ts: number };

export function applyEvent(job: Job, ev: JobLogEvent): Job {
  const updated = { ...job, updatedAt: ev.ts };
  switch (ev.event) {
    case "enqueue":
      return { ...updated, state: "queued" };
    case "start":
      return { ...updated, state: "running", attempt: ev.attempt };
    case "complete":
      return { ...updated, state: "completed", result: ev.result };
    case "fail":
      return {
        ...updated,
        state: "retrying",
        error: ev.error,
        attempt: ev.attempt,
      };
    case "dead_letter":
      return { ...updated, state: "dead_letter" };
    case "cancel":
      return { ...updated, state: "failed", error: "cancelled" };
  }
}

export function isTerminal(state: JobState): boolean {
  return state === "completed" || state === "dead_letter" || state === "failed";
}
