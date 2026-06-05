// Official Trello rate limits: https://developer.atlassian.com/cloud/trello/guides/rest-api/rate-limits/
// - 100 requests / 10 s per token
// - 300 requests / 10 s per API key
// - 100 requests / 900 s for /1/members/ (not enforced client-side — TODO)
// Response headers x-rate-limit-api-{token|key}-{interval-ms|max|remaining} are available
// but reactive header-based throttling is not yet wired (TODO).

export interface RateLimitConfig {
  enabled: boolean;
  limits?: {
    /** Max requests per token window (Trello default: 100) */
    tokenRequests?: number;
    /** Token window duration in ms (Trello default: 10_000) */
    tokenWindowMs?: number;
    /** Max requests per API key window (Trello default: 300) */
    keyRequests?: number;
    /** API key window duration in ms (Trello default: 10_000) */
    keyWindowMs?: number;
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class TokenBucket {
  private tokens: number;
  private lastRefill: number;
  // Serializes concurrent acquire() calls so only one _doAcquire runs at a time.
  // Without this, multiple awaiters can each see tokens >= 1 and all decrement,
  // driving tokens deeply negative and bypassing the rate limit.
  private acquireQueue: Promise<void> = Promise.resolve();

  constructor(
    private readonly capacity: number,
    private readonly refillRate: number, // tokens per ms
  ) {
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  private refill(): void {
    const now = Date.now();
    const elapsed = now - this.lastRefill;
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillRate);
    this.lastRefill = now;
  }

  async acquire(): Promise<void> {
    const thisAcquire = this.acquireQueue.then(() => this._doAcquire());
    // Advance the queue even if this acquisition fails (keeps the chain unblocked).
    this.acquireQueue = thisAcquire.catch(() => undefined);
    return thisAcquire;
  }

  private async _doAcquire(): Promise<void> {
    this.refill();

    if (this.tokens >= 1) {
      this.tokens -= 1;
      return;
    }

    const tokensNeeded = 1 - this.tokens;
    const waitMs = tokensNeeded / this.refillRate;
    await sleep(Math.ceil(waitMs));
    this.refill();
    this.tokens -= 1;
  }

  /** Drain all tokens to simulate a full rate-limit pause. */
  drain(): void {
    this.tokens = 0;
    this.lastRefill = Date.now();
  }
}

export class RateLimiter {
  private readonly tokenBucket: TokenBucket;
  private readonly keyBucket: TokenBucket;
  private blocked: Promise<void> | null = null;
  private blockedSeq = 0;

  constructor(config: RateLimitConfig) {
    const limits = config.limits ?? {};
    const tokenReqs = limits.tokenRequests ?? 100;
    const tokenMs   = limits.tokenWindowMs  ?? 10_000;
    const keyReqs   = limits.keyRequests    ?? 300;
    const keyMs     = limits.keyWindowMs    ?? 10_000;

    this.tokenBucket = new TokenBucket(tokenReqs, tokenReqs / tokenMs);
    this.keyBucket   = new TokenBucket(keyReqs,   keyReqs   / keyMs);
  }

  async acquire(): Promise<void> {
    // Loop instead of a single `if` to re-check if a new block arrived
    // while we were awaiting the previous one (TOCTOU guard).
    while (this.blocked != null) await this.blocked;
    await Promise.all([this.tokenBucket.acquire(), this.keyBucket.acquire()]);
  }

  /**
   * Called when a 429 response is received.
   * Pauses all token acquisition for `retryAfterSeconds`.
   */
  handleRateLimit(retryAfterSeconds: number): void {
    const pauseMs = Math.ceil(retryAfterSeconds * 1000);
    this.tokenBucket.drain();
    this.keyBucket.drain();
    // Chain onto any existing pause so the longest window always wins.
    // Use a sequence number so that a short-window callback finishing first
    // does NOT null out a longer-window block that was installed after it.
    const existing = this.blocked ?? Promise.resolve();
    const seq = ++this.blockedSeq;
    this.blocked = Promise.all([existing, sleep(pauseMs)]).then(() => {
      if (this.blockedSeq === seq) this.blocked = null;
    });
  }
}

/** No-op rate limiter for when rate limiting is disabled. */
export class NoopRateLimiter {
  async acquire(): Promise<void> {}
  handleRateLimit(_retryAfterSeconds: number): void {}
}

export type AnyRateLimiter = RateLimiter | NoopRateLimiter;

export function createRateLimiter(config: RateLimitConfig): AnyRateLimiter {
  return config.enabled ? new RateLimiter(config) : new NoopRateLimiter();
}
