import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { withRetry, computeDelay } from "../../src/core/retry.js";
import {
  TrelloAuthError,
  TrelloNetworkError,
  TrelloRateLimitError,
} from "../../src/core/errors.js";

const fakeRequest = { method: "GET", url: "https://test", body: null };

describe("withRetry", () => {
  it("returns the result on first success", async () => {
    let calls = 0;
    const result = await withRetry(async () => {
      calls++;
      return "ok";
    });
    assert.equal(result, "ok");
    assert.equal(calls, 1);
  });

  it("retries on retryable errors and succeeds", async () => {
    let calls = 0;
    const result = await withRetry(
      async () => {
        calls++;
        if (calls < 3) {
          throw new TrelloNetworkError(
            "timeout",
            null,
            fakeRequest,
            null,
            true,
            null,
          );
        }
        return "success";
      },
      { attempts: 5, baseDelay: 1, jitter: false },
    );
    assert.equal(result, "success");
    assert.equal(calls, 3);
  });

  it("does NOT retry non-retryable errors", async () => {
    let calls = 0;
    await assert.rejects(
      () =>
        withRetry(
          async () => {
            calls++;
            throw new TrelloAuthError(
              "unauthorized",
              401,
              fakeRequest,
              null,
              false,
              null,
            );
          },
          { attempts: 5, baseDelay: 1, jitter: false },
        ),
      { name: "TrelloAuthError" },
    );
    assert.equal(calls, 1);
  });

  it("exhausts all attempts and throws the last error", async () => {
    let calls = 0;
    await assert.rejects(
      () =>
        withRetry(
          async () => {
            calls++;
            throw new TrelloNetworkError(
              "timeout",
              null,
              fakeRequest,
              null,
              true,
              null,
            );
          },
          { attempts: 3, baseDelay: 1, jitter: false },
        ),
      { name: "TrelloNetworkError" },
    );
    assert.equal(calls, 3);
  });

  it("computeDelay: jitter stays within ±25% of exponential and never exceeds maxDelay", () => {
    const base = 100;
    const max = 500;

    for (let attempt = 0; attempt < 5; attempt++) {
      const exp = Math.min(base * Math.pow(2, attempt), max);
      const lower = Math.floor(exp * 0.75);

      for (let i = 0; i < 200; i++) {
        const d = computeDelay(attempt, base, max, true);
        assert.ok(d <= max, `attempt ${attempt} iter ${i}: delay ${d} exceeds maxDelay ${max}`);
        assert.ok(d >= lower, `attempt ${attempt} iter ${i}: delay ${d} below 75% floor ${lower}`);
      }
    }
  });

  it("respects retryAfter hint on TrelloRateLimitError", async () => {
    let calls = 0;
    const retryAfter = new Date(Date.now() + 100); // 100ms from now

    const start = Date.now();
    const result = await withRetry(
      async () => {
        calls++;
        if (calls === 1) {
          throw new TrelloRateLimitError(
            "rate limited",
            429,
            fakeRequest,
            null,
            true,
            retryAfter,
          );
        }
        return "done";
      },
      { attempts: 3, baseDelay: 1, jitter: false },
    );

    const elapsed = Date.now() - start;
    assert.equal(result, "done");
    assert.ok(elapsed >= 80, `Expected >= 80ms wait, got ${elapsed}ms`);
  });
});
