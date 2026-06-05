import type { TrelloCredentials } from "./auth.js";
import { validateCredentials } from "./auth.js";
import { TrelloValidationError } from "./errors.js";
import type { HttpLayer } from "./http.js";
import { createHttpLayer } from "./http.js";
import type { AnyRateLimiter, RateLimitConfig } from "./rate-limiter.js";
import { createRateLimiter } from "./rate-limiter.js";
import type { RetryOptions } from "./retry.js";
import type { AnyQueue, JobHandle, QueueConfig } from "./queue/queue.js";
import { createQueue } from "./queue/queue.js";
import { CollectionBuilder } from "../builders/collection.js";
import { SearchBuilder } from "../builders/search.js";

// Generated types
import type {
  Board,
  Card,
  TrelloList,
  Member,
  Action,
  Label,
  Checklist,
  Organization,
  Webhook,
  CustomField,
  GetBoardsIdParams,
  PostBoardsParams,
  PutBoardsIdParams,
  GetCardsIdParams,
  PostCardsParams,
  PutCardsIdParams,
  GetMembersIdParams,
  GetListsIdParams,
  PostListsParams,
  PutListsIdParams,
  GetOrganizationsIdParams,
  PostOrganizationsParams,
  PutOrganizationsIdParams,
  GetWebhooksIdParams,
  PostWebhooksParams,
  PutWebhooksIdParams,
  GetChecklistsIdParams,
  PostChecklistsParams,
  GetLabelsIdParams,
  PostLabelsParams,
  GetCustomFieldsIdParams,
  PostCustomFieldsParams,
  TrelloID,
} from "../generated/types.js";

/** Typed wrapper for a single item in a Trello batch response. */
export type BatchResponse<T = unknown> =
  | { "200": T }
  | { "401": string }
  | { "403": string }
  | { "404": string };

export interface TrelloClientOptions {
  key: string;
  token: string;
  rateLimit?: {
    enabled?: boolean;
    limits?: RateLimitConfig["limits"];
  };
  queue?: {
    enabled?: boolean;
    path?: string;
  };
  retry?: RetryOptions;
}

function col<TItem, TFilter extends object>(
  http: HttpLayer,
  path: string,
  pathParams: Record<string, string> = {},
): CollectionBuilder<TItem, TFilter> {
  return new CollectionBuilder<TItem, TFilter>(http, "GET", path, pathParams);
}

// ─── Resource API shape types ──────────────────────────────────────────────────

interface BoardsAPI {
  (id: TrelloID): {
    cards: () => CollectionBuilder<Card, GetCardsIdParams>;
    lists: () => CollectionBuilder<TrelloList, GetListsIdParams>;
    members: () => CollectionBuilder<Member, GetMembersIdParams>;
    actions: () => CollectionBuilder<Action, Record<string, never>>;
    labels: () => CollectionBuilder<Label, GetLabelsIdParams>;
    checklists: () => CollectionBuilder<Checklist, GetChecklistsIdParams>;
    customFields: () => CollectionBuilder<CustomField, GetCustomFieldsIdParams>;
  };
  get(id: TrelloID, params?: Partial<GetBoardsIdParams>): Promise<Board>;
  list(): CollectionBuilder<Board, GetBoardsIdParams>;
  create(params: PostBoardsParams): Promise<JobHandle<Board>>;
  update(id: TrelloID, params: Partial<PutBoardsIdParams>): Promise<JobHandle<Board>>;
  delete(id: TrelloID): Promise<JobHandle<void>>;
}

interface MembersAPI {
  (id: TrelloID): {
    get(params?: Partial<GetMembersIdParams>): Promise<Member>;
    boards(): CollectionBuilder<Board, GetBoardsIdParams>;
    cards(): CollectionBuilder<Card, GetCardsIdParams>;
  };
  get(id: TrelloID, params?: Partial<GetMembersIdParams>): Promise<Member>;
  me: {
    get(params?: Partial<GetMembersIdParams>): Promise<Member>;
    boards(): CollectionBuilder<Board, GetBoardsIdParams>;
    cards(): CollectionBuilder<Card, GetCardsIdParams>;
    organizations(): CollectionBuilder<Organization, GetOrganizationsIdParams>;
  };
}

export class TrelloClient {
  private readonly _http: HttpLayer;
  private readonly _rateLimiter: AnyRateLimiter;
  private readonly _queue: AnyQueue;

  readonly boards: BoardsAPI;
  readonly cards: {
    get(id: TrelloID, params?: Partial<GetCardsIdParams>): Promise<Card>;
    create(params: PostCardsParams): Promise<JobHandle<Card>>;
    update(id: TrelloID, params: Partial<PutCardsIdParams>): Promise<JobHandle<Card>>;
    delete(id: TrelloID): Promise<JobHandle<void>>;
  };
  readonly lists: {
    get(id: TrelloID, params?: Partial<GetListsIdParams>): Promise<TrelloList>;
    create(params: PostListsParams): Promise<JobHandle<TrelloList>>;
    update(id: TrelloID, params: Partial<PutListsIdParams>): Promise<JobHandle<TrelloList>>;
    cards(id: TrelloID): CollectionBuilder<Card, GetCardsIdParams>;
  };
  readonly members: MembersAPI;
  readonly organizations: {
    get(id: TrelloID, params?: Partial<GetOrganizationsIdParams>): Promise<Organization>;
    create(params: PostOrganizationsParams): Promise<JobHandle<Organization>>;
    update(id: TrelloID, params: Partial<PutOrganizationsIdParams>): Promise<JobHandle<Organization>>;
    delete(id: TrelloID): Promise<JobHandle<void>>;
    boards(id: TrelloID): CollectionBuilder<Board, GetBoardsIdParams>;
    members(id: TrelloID): CollectionBuilder<Member, GetMembersIdParams>;
  };
  readonly webhooks: {
    get(id: TrelloID, params?: Partial<GetWebhooksIdParams>): Promise<Webhook>;
    create(params: PostWebhooksParams): Promise<JobHandle<Webhook>>;
    update(id: TrelloID, params: Partial<PutWebhooksIdParams>): Promise<JobHandle<Webhook>>;
    delete(id: TrelloID): Promise<JobHandle<void>>;
  };
  readonly labels: {
    get(id: TrelloID, params?: Partial<GetLabelsIdParams>): Promise<Label>;
    create(params: PostLabelsParams): Promise<JobHandle<Label>>;
    delete(id: TrelloID): Promise<JobHandle<void>>;
  };
  readonly checklists: {
    get(id: TrelloID, params?: Partial<GetChecklistsIdParams>): Promise<Checklist>;
    create(params: PostChecklistsParams): Promise<JobHandle<Checklist>>;
    delete(id: TrelloID): Promise<JobHandle<void>>;
  };
  readonly customFields: {
    get(id: TrelloID, params?: Partial<GetCustomFieldsIdParams>): Promise<CustomField>;
    create(params: PostCustomFieldsParams): Promise<JobHandle<CustomField>>;
    delete(id: TrelloID): Promise<JobHandle<void>>;
  };

  constructor(options: TrelloClientOptions) {
    const credentials: TrelloCredentials = {
      key: options.key,
      token: options.token,
    };
    validateCredentials(credentials);

    // Rate limiter is created first so it can be passed to the HTTP layer.
    // This ensures ALL requests (reads AND mutations) go through the token bucket.
    const rateLimitConfig: RateLimitConfig = {
      enabled: options.rateLimit?.enabled ?? true,
      ...(options.rateLimit?.limits != null
        ? { limits: options.rateLimit.limits }
        : {}),
    };
    this._rateLimiter = createRateLimiter(rateLimitConfig);

    // Pass the rate limiter and retry options to the HTTP layer so every
    // request — reads and mutations alike — is rate-limited and retried.
    this._http = createHttpLayer(
      credentials,
      this._rateLimiter,
      options.retry,
    );

    const queueConfig: QueueConfig = {
      enabled: options.queue?.enabled ?? false,
      ...(options.queue?.path != null ? { path: options.queue.path } : {}),
    };
    this._queue = createQueue(this._http, this._rateLimiter, queueConfig);

    const http = this._http;
    const queue = this._queue;

    // ── Boards ──────────────────────────────────────────────────────────────
    const boardsFn = (id: TrelloID) => {
      const eid = encodeURIComponent(id);
      return {
        cards: () => col<Card, GetCardsIdParams>(http, `/boards/${eid}/cards`),
        lists: () => col<TrelloList, GetListsIdParams>(http, `/boards/${eid}/lists`),
        members: () => col<Member, GetMembersIdParams>(http, `/boards/${eid}/members`),
        actions: () => col<Action, Record<string, never>>(http, `/boards/${eid}/actions`),
        labels: () => col<Label, GetLabelsIdParams>(http, `/boards/${eid}/labels`),
        checklists: () => col<Checklist, GetChecklistsIdParams>(http, `/boards/${eid}/checklists`),
        customFields: () => col<CustomField, GetCustomFieldsIdParams>(http, `/boards/${eid}/customFields`),
      };
    };

    const boardsMethods = {
      get: (id: TrelloID, params?: Partial<GetBoardsIdParams>): Promise<Board> =>
        http.execute<Board>({
          method: "GET",
          path: "/boards/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      list: (): CollectionBuilder<Board, GetBoardsIdParams> =>
        col<Board, GetBoardsIdParams>(http, "/members/me/boards"),
      create: (params: PostBoardsParams): Promise<JobHandle<Board>> =>
        queue.enqueue<Board>({ method: "POST", path: "/boards/", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      update: (id: TrelloID, params: Partial<PutBoardsIdParams>): Promise<JobHandle<Board>> =>
        queue.enqueue<Board>({ method: "PUT", path: "/boards/{id}", pathParams: { id }, queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/boards/{id}", pathParams: { id } }),
    };

    this.boards = Object.assign(boardsFn, boardsMethods) as BoardsAPI;

    // ── Cards ────────────────────────────────────────────────────────────────
    this.cards = {
      get: (id: TrelloID, params?: Partial<GetCardsIdParams>): Promise<Card> =>
        http.execute<Card>({
          method: "GET",
          path: "/cards/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostCardsParams): Promise<JobHandle<Card>> =>
        queue.enqueue<Card>({ method: "POST", path: "/cards", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      update: (id: TrelloID, params: Partial<PutCardsIdParams>): Promise<JobHandle<Card>> =>
        queue.enqueue<Card>({ method: "PUT", path: "/cards/{id}", pathParams: { id }, queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/cards/{id}", pathParams: { id } }),
    };

    // ── Lists ────────────────────────────────────────────────────────────────
    this.lists = {
      get: (id: TrelloID, params?: Partial<GetListsIdParams>): Promise<TrelloList> =>
        http.execute<TrelloList>({
          method: "GET",
          path: "/lists/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostListsParams): Promise<JobHandle<TrelloList>> =>
        queue.enqueue<TrelloList>({ method: "POST", path: "/lists", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      update: (id: TrelloID, params: Partial<PutListsIdParams>): Promise<JobHandle<TrelloList>> =>
        queue.enqueue<TrelloList>({ method: "PUT", path: "/lists/{id}", pathParams: { id }, queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      cards: (id: TrelloID) => col<Card, GetCardsIdParams>(http, `/lists/${encodeURIComponent(id)}/cards`),
    };

    // ── Members ──────────────────────────────────────────────────────────────
    const memberFn = (id: TrelloID) => {
      const eid = encodeURIComponent(id);
      return {
        get: (params?: Partial<GetMembersIdParams>): Promise<Member> =>
          http.execute<Member>({
            method: "GET",
            path: "/members/{id}",
            pathParams: { id },
            ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
          }),
        boards: () => col<Board, GetBoardsIdParams>(http, `/members/${eid}/boards`),
        cards: () => col<Card, GetCardsIdParams>(http, `/members/${eid}/cards`),
      };
    };

    const membersMethods = {
      get: (id: TrelloID, params?: Partial<GetMembersIdParams>): Promise<Member> =>
        http.execute<Member>({
          method: "GET",
          path: "/members/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      me: {
        get: (params?: Partial<GetMembersIdParams>): Promise<Member> =>
          http.execute<Member>({
            method: "GET",
            path: "/members/me",
            ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
          }),
        boards: () => col<Board, GetBoardsIdParams>(http, "/members/me/boards"),
        cards: () => col<Card, GetCardsIdParams>(http, "/members/me/cards"),
        organizations: () =>
          col<Organization, GetOrganizationsIdParams>(http, "/members/me/organizations"),
      },
    };

    this.members = Object.assign(memberFn, membersMethods) as MembersAPI;

    // ── Organizations ─────────────────────────────────────────────────────────
    this.organizations = {
      get: (id: TrelloID, params?: Partial<GetOrganizationsIdParams>): Promise<Organization> =>
        http.execute<Organization>({
          method: "GET",
          path: "/organizations/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostOrganizationsParams): Promise<JobHandle<Organization>> =>
        queue.enqueue<Organization>({ method: "POST", path: "/organizations", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      update: (id: TrelloID, params: Partial<PutOrganizationsIdParams>): Promise<JobHandle<Organization>> =>
        queue.enqueue<Organization>({ method: "PUT", path: "/organizations/{id}", pathParams: { id }, queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/organizations/{id}", pathParams: { id } }),
      boards: (id: TrelloID) => col<Board, GetBoardsIdParams>(http, `/organizations/${encodeURIComponent(id)}/boards`),
      members: (id: TrelloID) => col<Member, GetMembersIdParams>(http, `/organizations/${encodeURIComponent(id)}/members`),
    };

    // ── Webhooks ──────────────────────────────────────────────────────────────
    this.webhooks = {
      get: (id: TrelloID, params?: Partial<GetWebhooksIdParams>): Promise<Webhook> =>
        http.execute<Webhook>({
          method: "GET",
          path: "/webhooks/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostWebhooksParams): Promise<JobHandle<Webhook>> =>
        queue.enqueue<Webhook>({ method: "POST", path: "/webhooks/", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      update: (id: TrelloID, params: Partial<PutWebhooksIdParams>): Promise<JobHandle<Webhook>> =>
        queue.enqueue<Webhook>({ method: "PUT", path: "/webhooks/{id}", pathParams: { id }, queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/webhooks/{id}", pathParams: { id } }),
    };

    // ── Labels ────────────────────────────────────────────────────────────────
    this.labels = {
      get: (id: TrelloID, params?: Partial<GetLabelsIdParams>): Promise<Label> =>
        http.execute<Label>({
          method: "GET",
          path: "/labels/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostLabelsParams): Promise<JobHandle<Label>> =>
        queue.enqueue<Label>({ method: "POST", path: "/labels", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/labels/{id}", pathParams: { id } }),
    };

    // ── Checklists ────────────────────────────────────────────────────────────
    this.checklists = {
      get: (id: TrelloID, params?: Partial<GetChecklistsIdParams>): Promise<Checklist> =>
        http.execute<Checklist>({
          method: "GET",
          path: "/checklists/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostChecklistsParams): Promise<JobHandle<Checklist>> =>
        queue.enqueue<Checklist>({ method: "POST", path: "/checklists", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/checklists/{id}", pathParams: { id } }),
    };

    // ── Custom Fields ─────────────────────────────────────────────────────────
    this.customFields = {
      get: (id: TrelloID, params?: Partial<GetCustomFieldsIdParams>): Promise<CustomField> =>
        http.execute<CustomField>({
          method: "GET",
          path: "/customFields/{id}",
          pathParams: { id },
          ...(params != null ? { queryParams: params as unknown as Record<string, string | number | boolean | undefined> } : {}),
        }),
      create: (params: PostCustomFieldsParams): Promise<JobHandle<CustomField>> =>
        queue.enqueue<CustomField>({ method: "POST", path: "/customFields", queryParams: params as unknown as Record<string, string | number | boolean | undefined> }),
      delete: (id: TrelloID): Promise<JobHandle<void>> =>
        queue.enqueue<void>({ method: "DELETE", path: "/customFields/{id}", pathParams: { id } }),
    };
  }

  // ── Queue ────────────────────────────────────────────────────────────────────

  get queue(): { recover(): Promise<void> } {
    return this._queue;
  }

  /**
   * Cancel all pending retry/recovery timers on the durable Queue.
   * Call on graceful shutdown to prevent resource leaks and test-ordering issues.
   * No-op when the queue is disabled (DirectQueue has no timers).
   */
  destroy(): void {
    if ("destroy" in this._queue) {
      (this._queue as { destroy(): void }).destroy();
    }
  }

  // ── Search ───────────────────────────────────────────────────────────────────

  search(query: string): SearchBuilder {
    return new SearchBuilder(this._http, query);
  }

  // ── Batch ────────────────────────────────────────────────────────────────────

  async batch(paths: string[]): Promise<BatchResponse[]> {
    if (paths.length > 10) {
      throw new TrelloValidationError(
        `batch() accepts at most 10 paths; received ${paths.length}`,
        null,
        { method: "GET", url: "/batch", body: undefined },
        { status: 0, headers: {}, body: null },
        false,
        null,
      );
    }
    const urls = paths.join(",");
    return this._http.execute<BatchResponse[]>({
      method: "GET",
      path: "/batch",
      queryParams: { urls },
    });
  }

}
