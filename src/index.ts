// Public API
export { TrelloClient } from "./core/client.js";
export type { TrelloClientOptions, BatchResponse } from "./core/client.js";

// Error types
export {
  TrelloError,
  TrelloAuthError,
  TrelloForbiddenError,
  TrelloNotFoundError,
  TrelloConflictError,
  TrelloRateLimitError,
  TrelloNetworkError,
  TrelloValidationError,
  TrelloServerError,
  TrelloSubRequestError,
  TrelloQueueError,
  isTrelloError,
} from "./core/errors.js";
export type { SerializedRequest, RawResponse } from "./core/errors.js";

// Webhook utilities
export { verifyWebhookSignature, TRELLO_WEBHOOK_IP_RANGE } from "./webhooks.js";

// Queue types
export type { JobHandle } from "./core/queue/queue.js";
export type { Job, JobState } from "./core/queue/job.js";

// Builder types
export { CollectionBuilder } from "./builders/collection.js";
export { SearchBuilder } from "./builders/search.js";
export type { SearchOptions, SearchResult } from "./builders/search.js";

// Generated types — re-exported for consumers
export type * from "./generated/types.js";
