import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { RateLimiter, NoopRateLimiter } from "../../src/core/rate-limiter.js";

describe("RateLimiter", () => {
  it("resolves acquire() immediately when tokens are available", async () => {
    const limiter = new RateLimiter({
      enabled: true,
      limits: {
        tokenRequests: 10,
        tokenWindowMs: 10_000,
        keyRequests: 30,
        keyWindowMs: 10_000,
      },
    });

    const start = Date.now();
    await limiter.acquire();
    const elapsed = Date.now() - start;

    assert.ok(elapsed < 100, `Expected < 100ms, got ${elapsed}ms`);
  });

  it("delays acquire() when bucket is empty", async () => {
    const limiter = new RateLimiter({
      enabled: true,
      limits: {
        tokenRequests: 1,
        tokenWindowMs: 200, // 1 token per 200ms
        keyRequests: 100,
        keyWindowMs: 10_000,
      },
    });

    // Drain the bucket
    await limiter.acquire();

    const start = Date.now();
    await limiter.acquire(); // Should wait ~200ms
    const elapsed = Date.now() - start;

    assert.ok(elapsed >= 150, `Expected >= 150ms delay, got ${elapsed}ms`);
  });

  it("handleRateLimit() blocks all subsequent acquires for the duration", async () => {
    const limiter = new RateLimiter({
      enabled: true,
      limits: {
        tokenRequests: 100,
        tokenWindowMs: 10_000,
        keyRequests: 300,
        keyWindowMs: 10_000,
      },
    });

    // Signal 200ms rate limit
    limiter.handleRateLimit(0.2);

    const start = Date.now();
    await limiter.acquire();
    const elapsed = Date.now() - start;

    assert.ok(elapsed >= 150, `Expected >= 150ms block, got ${elapsed}ms`);
  });

  it("handleRateLimit() double-call: longer window wins, short callback does not clear early", async () => {
    const limiter = new RateLimiter({
      enabled: true,
      limits: { tokenRequests: 100, tokenWindowMs: 10_000, keyRequests: 300, keyWindowMs: 10_000 },
    });

    // Short block (100ms) immediately followed by a longer block (500ms).
    // The short window's .then() must NOT null out the longer window's block.
    limiter.handleRateLimit(0.1);
    limiter.handleRateLimit(0.5);

    const start = Date.now();
    await limiter.acquire();
    const elapsed = Date.now() - start;

    assert.ok(
      elapsed >= 400,
      `Expected >= 400ms (longer window wins), got ${elapsed}ms — short callback cleared block early`,
    );
  });

  it("concurrent acquire() calls serialize correctly — no token underflow", async () => {
    const limiter = new RateLimiter({
      enabled: true,
      limits: {
        tokenRequests: 5,
        tokenWindowMs: 10_000,
        keyRequests: 100,
        keyWindowMs: 10_000,
      },
    });

    const start = Date.now();
    // Fire 5 concurrent acquires — bucket has exactly 5 tokens, all should resolve fast
    await Promise.all(Array.from({ length: 5 }, () => limiter.acquire()));
    const elapsed = Date.now() - start;

    assert.ok(elapsed < 200, `Expected all 5 concurrent acquires < 200ms, got ${elapsed}ms`);
  });
});

describe("NoopRateLimiter", () => {
  it("resolves acquire() immediately always", async () => {
    const limiter = new NoopRateLimiter();
    const start = Date.now();
    await limiter.acquire();
    assert.ok(Date.now() - start < 50);
  });

  it("handleRateLimit() is a no-op", () => {
    const limiter = new NoopRateLimiter();
    assert.doesNotThrow(() => limiter.handleRateLimit(10));
  });
});
