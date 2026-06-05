import type { TrelloCredentials } from "./auth.js";
import { injectAuth } from "./auth.js";
import {
  type RawResponse,
  type SerializedRequest,
  TrelloNetworkError,
  TrelloRateLimitError,
  TrelloValidationError,
  mapHttpError,
} from "./errors.js";
import type { RetryOptions } from "./retry.js";
import { withRetry } from "./retry.js";

const BASE_URL = "https://api.trello.com/1";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface HttpRequest {
  method: HttpMethod;
  path: string;
  pathParams?: Record<string, string> | undefined;
  queryParams?: Record<string, string | string[] | number | boolean | undefined> | undefined;
  body?: unknown;
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal | undefined;
}

export interface HttpLayer {
  execute<T>(req: HttpRequest): Promise<T>;
}

export interface RateLimiterGate {
  acquire(): Promise<void>;
  handleRateLimit?(retryAfterSeconds: number): void;
}

export function createHttpLayer(
  credentials: TrelloCredentials,
  rateLimiter?: RateLimiterGate,
  retryOpts?: RetryOptions,
): HttpLayer {
  return {
    execute: <T>(req: HttpRequest): Promise<T> => {
      const attempt = async () => {
        if (rateLimiter != null) {
          await rateLimiter.acquire();
        }

        try {
          return await executeRequest<T>(req, credentials);
        } catch (err) {
          if (
            err instanceof TrelloRateLimitError &&
            err.retryAfter != null &&
            rateLimiter?.handleRateLimit != null
          ) {
            const seconds = Math.max(
              0,
              (err.retryAfter.getTime() - Date.now()) / 1000,
            );
            rateLimiter.handleRateLimit(seconds);
          }
          throw err;
        }
      };
      return withRetry(attempt, retryOpts);
    },
  };
}

function buildUrl(
  path: string,
  method: string,
  pathParams: Record<string, string> | undefined,
  queryParams: HttpRequest["queryParams"],
  credentials: TrelloCredentials,
): URL {
  let resolvedPath = path;
  if (pathParams != null) {
    for (const [key, value] of Object.entries(pathParams)) {
      resolvedPath = resolvedPath.replaceAll(`{${key}}`, encodeURIComponent(value));
    }
  }
  if (/\{[^}]+\}/u.test(resolvedPath)) {
    throw new TrelloValidationError(
      `Unresolved path parameter in path: ${path}`,
      null,
      { method, url: path, body: undefined },
      { status: 0, headers: {}, body: null },
      false,
      null,
    );
  }

  const url = new URL(`${BASE_URL}${resolvedPath}`);
  injectAuth(url, credentials);

  if (queryParams != null) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        url.searchParams.set(key, value.join(","));
      } else {
        url.searchParams.set(key, String(value));
      }
    }
  }

  return url;
}

function extractHeaders(headers: Headers): Record<string, string> {
  const result: Record<string, string> = {};
  headers.forEach((value: string, key: string) => {
    result[key] = value;
  });
  return result;
}

async function executeRequest<T>(
  req: HttpRequest,
  credentials: TrelloCredentials,
): Promise<T> {
  const url = buildUrl(req.path, req.method, req.pathParams, req.queryParams, credentials);

  // Strip credentials from the serialized URL so they don't appear in logs/error reports.
  const sanitizedUrl = new URL(url.toString());
  sanitizedUrl.searchParams.delete("key");
  sanitizedUrl.searchParams.delete("token");
  const serializedRequest: SerializedRequest = {
    method: req.method,
    url: sanitizedUrl.toString(),
    body: req.body,
  };

  const reqHeaders: Record<string, string> = { ...(req.headers ?? {}) };
  if (req.body != null) {
    reqHeaders["Content-Type"] = "application/json";
  }

  const init: RequestInit = {
    method: req.method,
    ...(req.signal != null ? { signal: req.signal } : {}),
    ...(Object.keys(reqHeaders).length > 0 ? { headers: reqHeaders } : {}),
  };

  if (req.body != null) {
    init.body = JSON.stringify(req.body);
  }

  let fetchResponse: Response;
  try {
    fetchResponse = await fetch(url, init);
  } catch (cause) {
    // Let AbortError propagate unwrapped so callers (e.g. Queue) can detect cancellation.
    if (cause instanceof Error && cause.name === "AbortError") throw cause;
    const message =
      cause instanceof Error ? cause.message : "Network request failed";
    throw new TrelloNetworkError(
      message,
      null,
      serializedRequest,
      null,
      true,
      null,
    );
  }

  const rawHeaders = extractHeaders(fetchResponse.headers);
  let body: unknown = null;

  const contentType = fetchResponse.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    const text = await fetchResponse.text();
    body = text.length > 0 ? (JSON.parse(text) as unknown) : null;
  } else {
    body = await fetchResponse.text();
  }

  const rawResponse: RawResponse = {
    status: fetchResponse.status,
    headers: rawHeaders,
    body,
  };

  if (!fetchResponse.ok) {
    const bodyRecord =
      typeof body === "object" && body !== null
        ? (body as Record<string, unknown>)
        : null;
    const message =
      typeof body === "string"
        ? body
        : bodyRecord?.["message"]?.toString() ?? `HTTP ${fetchResponse.status}`;
    throw mapHttpError(
      fetchResponse.status,
      message,
      serializedRequest,
      rawResponse,
    );
  }

  return body as T;
}
