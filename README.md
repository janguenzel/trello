# @janguenzel/trello

**A lightweight TypeScript wrapper for the Trello REST API.**

[![CI](https://github.com/janguenzel/trello/actions/workflows/ci.yml/badge.svg)](https://github.com/janguenzel/trello/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@janguenzel/trello)](https://www.npmjs.com/package/@janguenzel/trello)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Trello REST API](https://img.shields.io/badge/Trello%20REST%20API-docs-blue)](https://developer.atlassian.com/cloud/trello/rest/api-group-actions/)
[![GitHub Stars](https://img.shields.io/github/stars/janguenzel/trello)](https://github.com/janguenzel/trello)

Generated from Trello's official OpenAPI specification — every endpoint, every parameter, every response type — with built-in rate limiting and a few helpers that come up in real Trello integrations.

---

## Scope

This package is intentionally small and focused:

- **Every Trello REST API endpoint** — 256 operations across 187 paths, generated directly from the official OpenAPI spec. When Trello publishes API changes, two commands bring the package up to date.
- **Practical helpers only** — rate limiting, retry backoff, a durable mutation queue, webhook signature verification. Things that come up in real integrations, not abstractions for their own sake.
- **No major new features planned** — the goal is to stay lean. If the Trello API supports it, this package exposes it. If Trello doesn't support it, this package won't invent it.

This is a REST API wrapper, not an application framework. It won't manage OAuth flows, build opinionated data models, or grow in scope beyond what the Trello API itself offers.

---

## Reporting issues

Found a bug or something behaving unexpectedly? [Open an issue on GitHub](https://github.com/janguenzel/trello/issues/new).

Please include: the endpoint you were calling, the error message or unexpected behaviour, and the versions of Node.js and this package you are running.

---

## Install

```bash
pnpm add @janguenzel/trello
# npm install @janguenzel/trello
# yarn add @janguenzel/trello
```

**Requirements:** Node.js 22+. Zero runtime dependencies.

---

## Quick start

```ts
import { TrelloClient } from "@janguenzel/trello";

const client = new TrelloClient({
  key: process.env.TRELLO_KEY!,
  token: process.env.TRELLO_TOKEN!,
});

// Read a board — direct, fully typed
const board = await client.boards.get("boardId");
console.log(board.name); // string — autocomplete works

// Create a card — goes through the durable queue
const handle = await client.cards.create({
  idList: "listId",
  name: "Ship it",
});
const card = await handle.result(); // Card
console.log(card.id);
```

---

## Type safety

Every request and response is generated directly from Trello's OpenAPI spec. The compiler catches mistakes before they reach production.

```ts
// Autocomplete shows every valid field
const board = await client.boards.get("boardId", {
  fields: ["name", "closed", "url"], // only valid BoardFields allowed
});

// Wrong field → type error at compile time
const card = await client.cards.get("cardId", {
  fields: ["nonExistentField"], // TypeScript error
});

// Response types are precise — no casting needed
const cards = await client.boards("boardId").cards().get();
cards[0].name; // string
cards[0].due;  // string | null | undefined — exactly what Trello returns

// Error types are fully typed too
try {
  await client.boards.get("badId");
} catch (err) {
  if (err instanceof TrelloNotFoundError) {
    console.log(err.status);    // 404
    console.log(err.request);   // { method, url, body }
    console.log(err.retryable); // false
  }
}
```

---

## Query builder

Navigate Trello's resource hierarchy with a fluent API that mirrors the actual URL structure.

```ts
// Nested resource navigation
const cards = await client
  .boards("boardId")
  .cards()
  .filter({ closed: false })
  .fields(["name", "desc", "due", "idList"])
  .limit(50)
  .get();

// Lists on a board
const lists = await client
  .boards("boardId")
  .lists()
  .filter({ filter: "open" })
  .get();

// Cards in a list
const listCards = await client
  .lists("listId")
  .cards()
  .limit(100)
  .get();

// The authenticated member
const me = await client.members.me.get();

// My boards
const myBoards = await client.members.me.boards().get();

// My open cards due this week
const myCards = await client.members.me
  .cards()
  .filter({ filter: "due:week" })
  .get();

// Search across resources
const results = await client
  .search("automation")
  .cards({ limit: 20 })
  .boards({ limit: 5 })
  .get();

// Organizations and their members
const members = await client
  .organizations("orgId")
  .members()
  .get();
```

---

## Rate limiting

Trello enforces two rate limit windows: 100 requests per 10 seconds per token, and 300 requests per 10 seconds per API key.

### Preventive (before hitting limits)

A dual token bucket tracks your request rate against both of Trello's windows. If you're about to exceed a limit, the package delays the request just long enough — no errors, no manual throttling.

```ts
const client = new TrelloClient({
  key: "...",
  token: "...",
  rateLimit: {
    enabled: true, // default: true
    limits: {
      tokenRequests: 100,    // requests per token window (Trello: 100)
      tokenWindowMs: 10_000, // token window duration in ms (Trello: 10s)
      keyRequests: 300,      // requests per API key window (Trello: 300)
      keyWindowMs: 10_000,   // key window duration in ms (Trello: 10s)
    },
  },
});
```

### Reactive (when a 429 arrives anyway)

If Trello still returns a `429 Too Many Requests`, the package reads the `Retry-After` header, pauses all outgoing requests for the specified duration, and retries automatically.

### Retry backoff

Transient failures (network errors, 5xx responses) trigger exponential backoff with jitter:

```ts
const client = new TrelloClient({
  key: "...",
  token: "...",
  retry: {
    attempts: 5,       // total attempts (default: 5)
    baseDelay: 500,    // ms (default: 500)
    maxDelay: 30_000,  // ms cap (default: 30s)
    jitter: true,      // ±25% random jitter (default: true)
  },
});
```

Auth errors (401) and not-found errors (404) are never retried — only genuinely transient failures are.

---

## Durable job queue

By default, mutations are sent directly. Enable the queue to make them crash-durable.

```ts
const client = new TrelloClient({
  key: "...",
  token: "...",
  queue: {
    enabled: true,
    path: "./.trello-queue", // directory for the job log (default: ./.trello-queue)
  },
});

// On every startup — resumes unfinished jobs from the previous run
await client.queue.recover();
```

### How it works

Mutations (POST, PUT, DELETE) return a `JobHandle<T>` instead of a direct response. The job is written to disk *before* the HTTP request is sent. If your process dies at any point, `recover()` replays the job.

```ts
// Enqueue a card creation — written to disk immediately
const handle = await client.cards.create({
  idList: "listId",
  name: "Deploy to production",
});

// Await the result in the same process run
const card = await handle.result(); // Promise<Card>

// Or fire and forget — the job will complete on the next recover()
// even if this process never awaits handle.result()
```

```ts
// Recovery on the next startup
await client.queue.recover();
// All queued/retrying jobs from the previous run resume automatically
```

### Job lifecycle

```
queued → running → completed
queued → running → retrying → running   (on transient failure)
retrying → dead_letter                  (after max attempts)
```

### Storage

Jobs are stored in a plain-text NDJSON append log — no SQLite, no native binaries, no build step. The file is human-readable and inspectable with any text editor. Log compaction happens automatically when the file grows large.

### At-least-once delivery

Trello does not provide idempotency keys. If your process is killed in the narrow window between a successful HTTP response and the completion being written to disk, `recover()` will replay the request. For `update` operations this is harmless. For `create` operations it may produce a duplicate — plan accordingly for critical creates.

---

## Error handling

Every error is a typed class that extends `TrelloError`. Use `instanceof` to narrow:

```ts
import {
  TrelloAuthError,
  TrelloNotFoundError,
  TrelloConflictError,
  TrelloRateLimitError,
  TrelloNetworkError,
  isTrelloError,
} from "@janguenzel/trello";

try {
  const board = await client.boards.get("id");
} catch (err) {
  if (err instanceof TrelloAuthError) {
    // 401 — bad key or token
  } else if (err instanceof TrelloNotFoundError) {
    // 404 — board doesn't exist or you don't have access
  } else if (err instanceof TrelloConflictError) {
    // 409 — request conflicts with current state
  } else if (err instanceof TrelloRateLimitError) {
    // 429 — only thrown if rate limiter is disabled
    console.log(err.retryAfter); // Date | null
  } else if (err instanceof TrelloNetworkError) {
    // DNS failure, timeout, etc.
    console.log(err.retryable); // true
  } else if (isTrelloError(err)) {
    // All other Trello errors
    console.log(err.status);   // HTTP status code
    console.log(err.request);  // { method, url, body }
    console.log(err.response); // { status, headers, body }
  }
}
```

**Error classes:**

| Class | Status | Retryable | Notes |
|---|---|---|---|
| `TrelloAuthError` | 401 | No | Invalid key or token |
| `TrelloForbiddenError` | 403 | No | Action not permitted |
| `TrelloNotFoundError` | 404 | No | Resource does not exist |
| `TrelloConflictError` | 409 | No | Request conflicts with current state |
| `TrelloValidationError` | 400 | No | Missing or invalid fields |
| `TrelloSubRequestError` | 449 | No | Trello couldn't process all parts of the request |
| `TrelloRateLimitError` | 429 | Yes | Only surfaces when rate limiter is disabled |
| `TrelloServerError` | 5xx | Yes | Transient server-side failure |
| `TrelloNetworkError` | — | Yes | DNS, timeout, connection reset |
| `TrelloQueueError` | — | — | Job queue internal error |

---

## Webhook verification

When building a Trello webhook receiver, use `verifyWebhookSignature` to validate the `X-Trello-Webhook` header on incoming requests:

```ts
import { verifyWebhookSignature, TRELLO_WEBHOOK_IP_RANGE } from "@janguenzel/trello";

// In your webhook handler (Express, Fastify, etc.)
app.post("/trello-webhook", (req, res) => {
  const valid = verifyWebhookSignature({
    callbackUrl: "https://yourapp.com/trello-webhook", // must match the registered URL exactly
    body: JSON.stringify(req.body),
    signature: req.headers["x-trello-webhook"] as string,
    apiSecret: process.env.TRELLO_API_SECRET!,
  });

  if (!valid) return res.status(401).send("Invalid signature");

  // handle the webhook...
  res.sendStatus(200);
});
```

`TRELLO_WEBHOOK_IP_RANGE` (`"104.192.142.240/28"`) is exported as a constant for firewall allowlisting. Trello retries failed deliveries 3 times (at 30 s, 60 s, and 120 s) and disables webhooks after 30 consecutive days of failures.

---

## Staying up to date

The package is generated from Trello's official OpenAPI specification. When Trello updates their API, syncing takes two commands:

```bash
# 1. Fetch the latest spec from Atlassian's CDN
pnpm update-spec
# → "Updated: abc123 → def456"

# 2. Review what changed
git diff openapi.json

# 3. Regenerate all types
pnpm codegen

# 4. Verify no regressions
pnpm typecheck
```

The codegen step is deterministic — two runs on the same `openapi.json` produce byte-identical output. A weekly CI check (`spec-drift.yml`) detects when the upstream spec changes.

---

## Configuration reference

```ts
const client = new TrelloClient({
  // Required
  key: string,    // Trello API key
  token: string,  // Trello API token

  // Rate limiting (optional)
  rateLimit?: {
    enabled?: boolean,       // default: true
    limits?: {
      tokenRequests?: number,  // per-token limit (default: 100)
      tokenWindowMs?: number,  // token window in ms (default: 10_000)
      keyRequests?: number,    // per-key limit (default: 300)
      keyWindowMs?: number,    // key window in ms (default: 10_000)
    },
  },

  // Durable job queue (optional)
  queue?: {
    enabled?: boolean, // default: false
    path?: string,     // default: "./.trello-queue"
  },

  // Retry behaviour (optional)
  retry?: {
    attempts?: number,   // default: 5
    baseDelay?: number,  // default: 500 (ms)
    maxDelay?: number,   // default: 30_000 (ms)
    jitter?: boolean,    // default: true
  },
});
```

---

## Development

```bash
# Install dependencies
pnpm install

# Fetch latest Trello OpenAPI spec
pnpm update-spec

# Check for spec drift without updating
pnpm check:spec

# Regenerate types from spec
pnpm codegen

# Type check
pnpm typecheck

# Run tests
pnpm test

# Build
pnpm build
```

### Project structure

```
codegen/        Code generation pipeline (parser, type/op/builder generators)
src/
  core/         Runtime: HTTP, auth, rate limiter, retry, queue
  builders/     CollectionBuilder, SearchBuilder
  webhooks.ts   Webhook signature verification utility
  generated/    Generated types — DO NOT EDIT (run pnpm codegen)
  index.ts      Public API
tests/
  unit/         Rate limiter, retry, queue/storage
  codegen/      Type generator unit tests
  integration/  Full client against MSW mock server
openapi.json    Trello's OpenAPI spec (source of truth for codegen)
```

---

## License

MIT © Jan Henning Günzel
