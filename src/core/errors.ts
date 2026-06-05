export interface SerializedRequest {
  readonly method: string;
  readonly url: string;
  readonly body: unknown;
}

export interface RawResponse {
  readonly status: number;
  readonly headers: Record<string, string>;
  readonly body: unknown;
}

export class TrelloError extends Error {
  constructor(
    message: string,
    readonly status: number | null,
    readonly request: SerializedRequest,
    readonly response: RawResponse | null,
    readonly retryable: boolean,
    readonly retryAfter: Date | null,
  ) {
    super(message);
    this.name = new.target.name;
  }
}

export class TrelloAuthError extends TrelloError {}
export class TrelloForbiddenError extends TrelloError {}
export class TrelloNotFoundError extends TrelloError {}
export class TrelloRateLimitError extends TrelloError {}
export class TrelloNetworkError extends TrelloError {}
export class TrelloValidationError extends TrelloError {}
export class TrelloServerError extends TrelloError {}
export class TrelloConflictError extends TrelloError {}
export class TrelloSubRequestError extends TrelloError {}

export class TrelloQueueError extends Error {
  constructor(message: string) {
    super(message);
    this.name = new.target.name;
  }
}

export function mapHttpError(
  status: number,
  message: string,
  request: SerializedRequest,
  response: RawResponse,
): TrelloError {
  const retryAfterHeader =
    response.headers["retry-after"] ?? response.headers["Retry-After"];
  let retryAfter: Date | null = null;
  if (retryAfterHeader != null) {
    const seconds = parseFloat(retryAfterHeader);
    // Retry-After is either a delta-seconds value or an HTTP-date string.
    if (!isNaN(seconds)) {
      retryAfter = new Date(Date.now() + seconds * 1000);
    } else {
      const parsed = new Date(retryAfterHeader);
      retryAfter = isNaN(parsed.getTime()) ? null : parsed;
    }
  }

  switch (status) {
    case 400:
      return new TrelloValidationError(
        message, status, request, response, false, null,
      );
    case 401:
      return new TrelloAuthError(message, status, request, response, false, null);
    case 403:
      return new TrelloForbiddenError(
        message, status, request, response, false, null,
      );
    case 404:
      return new TrelloNotFoundError(
        message, status, request, response, false, null,
      );
    case 409:
      return new TrelloConflictError(
        message, status, request, response, false, null,
      );
    case 429:
      return new TrelloRateLimitError(
        message, status, request, response, true, retryAfter,
      );
    case 449:
      return new TrelloSubRequestError(
        message, status, request, response, false, null,
      );
    default:
      return status >= 500
        ? new TrelloServerError(message, status, request, response, true, null)
        : new TrelloError(message, status, request, response, false, null);
  }
}

export function isTrelloError(err: unknown): err is TrelloError {
  return err instanceof TrelloError;
}
