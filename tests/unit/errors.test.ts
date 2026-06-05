import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  mapHttpError,
  TrelloForbiddenError,
  TrelloConflictError,
  TrelloSubRequestError,
  TrelloServerError,
  TrelloRateLimitError,
} from "../../src/core/errors.js";

const req = { method: "GET", url: "https://api.trello.com/1/boards/123", body: null };

function makeResponse(headers: Record<string, string> = {}): { status: number; headers: Record<string, string>; body: unknown } {
  return { status: 200, headers, body: null };
}

describe("mapHttpError", () => {
  it("HTTP 403 → TrelloForbiddenError (non-retryable)", () => {
    const err = mapHttpError(403, "Forbidden", req, makeResponse());
    assert.ok(err instanceof TrelloForbiddenError);
    assert.equal(err.status, 403);
    assert.equal(err.retryable, false);
  });

  it("HTTP 409 → TrelloConflictError (non-retryable)", () => {
    const err = mapHttpError(409, "Conflict", req, makeResponse());
    assert.ok(err instanceof TrelloConflictError);
    assert.equal(err.status, 409);
    assert.equal(err.retryable, false);
  });

  it("HTTP 449 → TrelloSubRequestError (non-retryable)", () => {
    const err = mapHttpError(449, "Sub-request error", req, makeResponse());
    assert.ok(err instanceof TrelloSubRequestError);
    assert.equal(err.status, 449);
    assert.equal(err.retryable, false);
  });

  it("HTTP 500 → TrelloServerError (retryable)", () => {
    const err = mapHttpError(500, "Internal Server Error", req, makeResponse());
    assert.ok(err instanceof TrelloServerError);
    assert.equal(err.status, 500);
    assert.equal(err.retryable, true);
  });

  it("Retry-After as valid delta-seconds → retryAfter is a Date approximately that far in the future", () => {
    const before = Date.now();
    const err = mapHttpError(429, "Too Many Requests", req, makeResponse({ "retry-after": "60" }));
    const after = Date.now();
    assert.ok(err instanceof TrelloRateLimitError);
    assert.ok(err.retryAfter instanceof Date);
    assert.ok(!isNaN(err.retryAfter.getTime()));
    const ms = err.retryAfter.getTime();
    assert.ok(ms >= before + 59_000 && ms <= after + 61_000, `retryAfter ${ms} not ~60s from now`);
  });

  it("Retry-After as valid HTTP-date string → retryAfter is a valid Date", () => {
    const future = new Date(Date.now() + 30_000);
    const err = mapHttpError(429, "Too Many Requests", req, makeResponse({ "retry-after": future.toUTCString() }));
    assert.ok(err instanceof TrelloRateLimitError);
    assert.ok(err.retryAfter instanceof Date);
    assert.ok(!isNaN(err.retryAfter.getTime()), "retryAfter must be a valid Date for an HTTP-date string");
  });

  it("Retry-After as invalid string → retryAfter is null, not Invalid Date (H-2 regression)", () => {
    const err = mapHttpError(429, "Too Many Requests", req, makeResponse({ "retry-after": "not-a-date" }));
    assert.ok(err instanceof TrelloRateLimitError);
    assert.strictEqual(err.retryAfter, null, "Invalid Retry-After string must yield null, not Invalid Date");
  });
});
