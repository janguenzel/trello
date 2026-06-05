import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import {
  TrelloClient,
  TrelloAuthError,
  TrelloNotFoundError,
  TrelloRateLimitError,
  TrelloNetworkError,
  TrelloValidationError,
  isTrelloError,
} from "../../src/index.js";

const BASE = "https://api.trello.com/1";

// Shared mock fixtures
const BOARD = { id: "board1", name: "My Board", closed: false, url: "https://trello.com/b/x" };
const CARD = { id: "card1", name: "My Card", closed: false, idList: "list1", idBoard: "board1" };
const MEMBER = { id: "member1", username: "jdoe", fullName: "Jane Doe" };
const LIST = { id: "list1", name: "To Do", closed: false, idBoard: "board1" };

const server = setupServer();

/** Create a client with rate limiting and retries disabled for deterministic tests. */
function makeClient(): TrelloClient {
  return new TrelloClient({
    key: "testkey1234567890123456789012345",
    token: "testtoken" + "x".repeat(55),
    rateLimit: { enabled: false },
    retry: { attempts: 1, baseDelay: 0, jitter: false },
  });
}

describe("TrelloClient integration", () => {
  before(() => server.listen({ onUnhandledRequest: "error" }));
  after(() => server.close());
  beforeEach(() => server.resetHandlers());

  // ── Happy-path GETs ──────────────────────────────────────────────────────

  describe("boards.get()", () => {
    it("returns a typed Board on 200", async () => {
      server.use(
        http.get(`${BASE}/boards/:id`, ({ params }) => {
          assert.equal(params["id"], "board1");
          return HttpResponse.json(BOARD);
        }),
      );
      const client = makeClient();
      const board = await client.boards.get("board1");
      assert.equal(board.id, "board1");
      assert.equal(board.name, "My Board");
    });
  });

  describe("boards().cards() — query builder", () => {
    it("sends correct path and query params", async () => {
      let capturedUrl: URL | null = null;
      server.use(
        http.get(`${BASE}/boards/:id/cards`, ({ request }) => {
          capturedUrl = new URL(request.url);
          return HttpResponse.json([CARD]);
        }),
      );
      const client = makeClient();
      const cards = await client
        .boards("board1")
        .cards()
        .filter({ closed: false })
        .limit(10)
        .get();

      assert.ok(capturedUrl != null);
      assert.equal(capturedUrl.pathname, "/1/boards/board1/cards");
      assert.equal(capturedUrl.searchParams.get("closed"), "false");
      assert.equal(capturedUrl.searchParams.get("limit"), "10");
      assert.equal(cards.length, 1);
      assert.equal(cards[0]?.id, "card1");
    });
  });

  describe("members.me.get()", () => {
    it("resolves /members/me path", async () => {
      server.use(
        http.get(`${BASE}/members/me`, () => HttpResponse.json(MEMBER)),
      );
      const client = makeClient();
      const me = await client.members.me.get();
      assert.equal(me.id, "member1");
      assert.equal(me.username, "jdoe");
    });
  });

  describe("search()", () => {
    it("sends correct query params for multi-model search", async () => {
      let capturedUrl: URL | null = null;
      server.use(
        http.get(`${BASE}/search`, ({ request }) => {
          capturedUrl = new URL(request.url);
          return HttpResponse.json({ cards: [CARD], boards: [BOARD] });
        }),
      );
      const client = makeClient();
      const result = await client
        .search("automation")
        .cards({ limit: 5 })
        .boards({ limit: 2 })
        .get();

      assert.ok(capturedUrl != null);
      assert.equal(capturedUrl.searchParams.get("query"), "automation");
      assert.ok(capturedUrl.searchParams.get("modelTypes")?.includes("cards"));
      assert.ok(capturedUrl.searchParams.get("modelTypes")?.includes("boards"));
      assert.ok(Array.isArray(result.cards));
    });
  });

  // ── Mutations via DirectQueue ─────────────────────────────────────────────

  describe("cards.create()", () => {
    it("POSTs query params and returns a typed Card via JobHandle", async () => {
      let capturedUrl: URL | null = null;
      server.use(
        http.post(`${BASE}/cards`, ({ request }) => {
          capturedUrl = new URL(request.url);
          return HttpResponse.json({ ...CARD, name: "New Card" }, { status: 200 });
        }),
      );
      const client = makeClient();
      const handle = await client.cards.create({ idList: "list1", name: "New Card" });
      const card = await handle.result();

      assert.ok(capturedUrl != null);
      assert.equal((capturedUrl as URL).searchParams.get("name"), "New Card");
      assert.equal((capturedUrl as URL).searchParams.get("idList"), "list1");
      assert.equal(card.name, "New Card");
    });
  });

  describe("cards.update()", () => {
    it("PUTs query params and returns updated Card", async () => {
      server.use(
        http.put(`${BASE}/cards/:id`, ({ params, request }) => {
          assert.equal(params["id"], "card1");
          const url = new URL(request.url);
          return HttpResponse.json({ ...CARD, closed: url.searchParams.get("closed") === "true" });
        }),
      );
      const client = makeClient();
      const handle = await client.cards.update("card1", { closed: true });
      const updated = await handle.result();
      assert.equal(updated.closed, true);
    });
  });

  describe("cards.delete()", () => {
    it("DELETEs the card and resolves void", async () => {
      let deleted = false;
      server.use(
        http.delete(`${BASE}/cards/:id`, ({ params }) => {
          assert.equal(params["id"], "card1");
          deleted = true;
          return new HttpResponse(null, { status: 200 });
        }),
      );
      const client = makeClient();
      const handle = await client.cards.delete("card1");
      await handle.result();
      assert.equal(deleted, true);
    });
  });

  // ── Auth injection ────────────────────────────────────────────────────────

  describe("auth", () => {
    it("appends key and token as query params to every request", async () => {
      let capturedUrl: URL | null = null;
      server.use(
        http.get(`${BASE}/boards/:id`, ({ request }) => {
          capturedUrl = new URL(request.url);
          return HttpResponse.json(BOARD);
        }),
      );
      const client = makeClient();
      await client.boards.get("board1");

      assert.ok(capturedUrl != null);
      assert.equal(capturedUrl.searchParams.get("key"), "testkey1234567890123456789012345");
      assert.ok(capturedUrl.searchParams.get("token")?.startsWith("testtoken"));
    });
  });

  // ── Error mapping ─────────────────────────────────────────────────────────

  describe("error mapping", () => {
    it("401 → TrelloAuthError", async () => {
      server.use(
        http.get(`${BASE}/boards/:id`, () =>
          HttpResponse.json({ message: "invalid token" }, { status: 401 }),
        ),
      );
      const client = makeClient();
      await assert.rejects(
        () => client.boards.get("board1"),
        (err: unknown) => {
          assert.ok(err instanceof TrelloAuthError, `Expected TrelloAuthError, got ${String(err)}`);
          assert.equal(err.status, 401);
          assert.equal(err.retryable, false);
          return true;
        },
      );
    });

    it("404 → TrelloNotFoundError", async () => {
      server.use(
        http.get(`${BASE}/boards/:id`, () =>
          HttpResponse.json({ message: "not found" }, { status: 404 }),
        ),
      );
      const client = makeClient();
      await assert.rejects(
        () => client.boards.get("board1"),
        (err: unknown) => {
          assert.ok(err instanceof TrelloNotFoundError);
          assert.equal(err.status, 404);
          assert.equal(err.retryable, false);
          return true;
        },
      );
    });

    it("400 → TrelloValidationError", async () => {
      server.use(
        http.post(`${BASE}/cards`, () =>
          HttpResponse.json({ message: "invalid idList" }, { status: 400 }),
        ),
      );
      const client = makeClient();
      const handle = await client.cards.create({ idList: "bad", name: "x" });
      await assert.rejects(
        () => handle.result(),
        (err: unknown) => {
          assert.ok(err instanceof TrelloValidationError);
          assert.equal(err.status, 400);
          return true;
        },
      );
    });

    it("429 → TrelloRateLimitError with retryAfter", async () => {
      server.use(
        http.get(`${BASE}/boards/:id`, () =>
          new HttpResponse(null, {
            status: 429,
            headers: { "Retry-After": "5" },
          }),
        ),
      );
      // Use a client with retry disabled so 429 surfaces directly
      const client = new TrelloClient({
        key: "testkey1234567890123456789012345",
        token: "testtoken" + "x".repeat(55),
        rateLimit: { enabled: false },
        retry: { attempts: 1, baseDelay: 0, jitter: false },
      });
      await assert.rejects(
        () => client.boards.get("board1"),
        (err: unknown) => {
          assert.ok(err instanceof TrelloRateLimitError);
          assert.equal(err.status, 429);
          assert.equal(err.retryable, true);
          assert.ok(err.retryAfter instanceof Date);
          return true;
        },
      );
    });

    it("network error → TrelloNetworkError", async () => {
      server.use(
        http.get(`${BASE}/boards/:id`, () => HttpResponse.error()),
      );
      const client = makeClient();
      await assert.rejects(
        () => client.boards.get("board1"),
        (err: unknown) => {
          assert.ok(err instanceof TrelloNetworkError);
          assert.equal(err.status, null);
          assert.equal(err.retryable, true);
          return true;
        },
      );
    });

    it("isTrelloError() narrows correctly", async () => {
      server.use(
        http.get(`${BASE}/boards/:id`, () =>
          HttpResponse.json({ message: "unauthorized" }, { status: 401 }),
        ),
      );
      const client = makeClient();
      try {
        await client.boards.get("board1");
        assert.fail("should have thrown");
      } catch (err) {
        assert.ok(isTrelloError(err));
        assert.ok(err.request.url.includes("/boards/"));
        assert.ok(err.request.method === "GET");
      }
    });
  });

  // ── Retry behaviour ───────────────────────────────────────────────────────

  describe("retry on transient errors", () => {
    it("retries a network error and succeeds on second attempt", async () => {
      let attempts = 0;
      server.use(
        http.get(`${BASE}/boards/:id`, () => {
          attempts++;
          if (attempts === 1) return HttpResponse.error();
          return HttpResponse.json(BOARD);
        }),
      );
      const client = new TrelloClient({
        key: "testkey1234567890123456789012345",
        token: "testtoken" + "x".repeat(55),
        rateLimit: { enabled: false },
        retry: { attempts: 3, baseDelay: 0, jitter: false },
      });
      const board = await client.boards.get("board1");
      assert.equal(board.id, "board1");
      assert.equal(attempts, 2);
    });

    it("does not retry a 401", async () => {
      let attempts = 0;
      server.use(
        http.get(`${BASE}/boards/:id`, () => {
          attempts++;
          return HttpResponse.json({}, { status: 401 });
        }),
      );
      const client = new TrelloClient({
        key: "testkey1234567890123456789012345",
        token: "testtoken" + "x".repeat(55),
        rateLimit: { enabled: false },
        retry: { attempts: 5, baseDelay: 0, jitter: false },
      });
      await assert.rejects(() => client.boards.get("board1"), TrelloAuthError);
      assert.equal(attempts, 1, "should not have retried a 401");
    });
  });

  // ── Lists and nested resources ────────────────────────────────────────────

  describe("lists.get()", () => {
    it("returns a typed list", async () => {
      server.use(
        http.get(`${BASE}/lists/:id`, () => HttpResponse.json(LIST)),
      );
      const client = makeClient();
      const list = await client.lists.get("list1");
      assert.equal(list.id, "list1");
      assert.equal(list.name, "To Do");
    });
  });

  describe("boards().members() — nested collection", () => {
    it("resolves the correct nested path", async () => {
      let capturedPath = "";
      server.use(
        http.get(`${BASE}/boards/:id/members`, ({ request }) => {
          capturedPath = new URL(request.url).pathname;
          return HttpResponse.json([MEMBER]);
        }),
      );
      const client = makeClient();
      const members = await client.boards("board1").members().get();
      assert.equal(capturedPath, "/1/boards/board1/members");
      assert.equal(members[0]?.id, "member1");
    });
  });

  describe("batch()", () => {
    it("sends paths as a comma-joined 'urls' query parameter", async () => {
      let capturedUrl: URL | null = null;
      server.use(
        http.get(`${BASE}/batch`, ({ request }) => {
          capturedUrl = new URL(request.url);
          return HttpResponse.json([{ "200": BOARD }, { "200": CARD }]);
        }),
      );
      const client = makeClient();
      await client.batch(["/boards/board1", "/cards/card1"]);

      assert.ok(capturedUrl != null);
      assert.equal(capturedUrl.searchParams.get("urls"), "/boards/board1,/cards/card1");
    });

    it("throws TrelloValidationError when more than 10 paths are supplied", async () => {
      const client = makeClient();
      const paths = Array.from({ length: 11 }, (_, i) => `/boards/${i}`);
      await assert.rejects(
        () => client.batch(paths),
        (err: unknown) => {
          assert.ok(err instanceof TrelloValidationError);
          return true;
        },
      );
    });
  });
});
