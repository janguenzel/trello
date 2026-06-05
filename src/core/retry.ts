import { isTrelloError } from "./errors.js";

export interface RetryOptions {
  /** Maximum number of attempts total (including the first). Default: 5 */
  attempts?: number;
  /** Base delay in ms for backoff calculation. Default: 500 */
  baseDelay?: number;
  /** Maximum delay cap in ms. Default: 30_000 */
  maxDelay?: number;
  /** Whether to add ±25% jitter to delay. Default: true */
  jitter?: boolean;
}

export function computeDelay(
  attempt: number,
  baseDelay: number,
  maxDelay: number,
  jitter: boolean,
): number {
  const exponential = baseDelay * Math.pow(2, attempt);
  const capped = Math.min(exponential, maxDelay);
  if (!jitter) return capped;
  const jitterRange = capped * 0.25;
  return Math.min(maxDelay, Math.floor(capped + (Math.random() * 2 - 1) * jitterRange));
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, Math.max(0, ms)));
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  opts: RetryOptions = {},
): Promise<T> {
  const maxAttempts = Math.max(1, opts.attempts ?? 5);
  const baseDelay = opts.baseDelay ?? 500;
  const maxDelay = opts.maxDelay ?? 30_000;
  const jitter = opts.jitter ?? true;

  let lastError: unknown;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      const retryable = isTrelloError(err) ? err.retryable : false;
      if (!retryable || attempt === maxAttempts - 1) {
        throw err;
      }

      // If the error carries a retryAfter hint, respect it
      if (isTrelloError(err) && err.retryAfter != null) {
        const waitMs = Math.min(60_000, Math.max(0, err.retryAfter.getTime() - Date.now()));
        await sleep(waitMs);
      } else {
        await sleep(computeDelay(attempt, baseDelay, maxDelay, jitter));
      }
    }
  }

  throw lastError;
}
