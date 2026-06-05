import { describe, it, after } from "node:test";
import assert from "node:assert/strict";
import { createHttpLayer } from "../../src/core/http.js";
import { TrelloValidationError } from "../../src/core/errors.js";

const realFetch = globalThis.fetch;
after(() => { globalThis.fetch = realFetch; });

describe("HttpLayer", () => {
  it("throws TrelloValidationError for unresolved path parameter in URL", async () => {
    const layer = createHttpLayer({ key: "k", token: "t" }, undefined, { attempts: 1 });
    await assert.rejects(
      () => layer.execute({ method: "GET", path: "/boards/{boardId}" }),
      (err: unknown) => {
        assert.ok(err instanceof TrelloValidationError, `Expected TrelloValidationError, got ${String(err)}`);
        assert.ok((err as TrelloValidationError).message.includes("{boardId}"), "Message should name the unresolved param");
        return true;
      },
    );
  });

  it("strips key and token from the URL in error request metadata", async () => {
    globalThis.fetch = () =>
      Promise.resolve(new Response("Unauthorized", { status: 401, headers: { "Content-Type": "text/plain" } }));
    const layer = createHttpLayer({ key: "secret-key", token: "secret-token" }, undefined, { attempts: 1 });
    try {
      await layer.execute({ method: "GET", path: "/boards/123" });
      assert.fail("Expected an error to be thrown");
    } catch (err) {
      assert.ok(err instanceof Error && "request" in err, "Expected a TrelloError with a request field");
      const url = (err as { request: { url: string } }).request.url;
      assert.ok(!url.includes("secret-key"), `Error URL must not expose key, got: ${url}`);
      assert.ok(!url.includes("secret-token"), `Error URL must not expose token, got: ${url}`);
    }
  });

  it("parses response body as JSON when Content-Type is application/json", async () => {
    globalThis.fetch = () =>
      Promise.resolve(
        new Response(JSON.stringify({ id: "card1", name: "My Card" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      );
    const layer = createHttpLayer({ key: "k", token: "t" }, undefined, { attempts: 1 });
    const result = await layer.execute<{ id: string; name: string }>({ method: "GET", path: "/cards/card1" });
    assert.equal(result.id, "card1");
    assert.equal(result.name, "My Card");
  });

  it("returns null body (not throws) for empty application/json response body (H-1 regression)", async () => {
    globalThis.fetch = () =>
      Promise.resolve(
        new Response("", {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      );
    const layer = createHttpLayer({ key: "k", token: "t" }, undefined, { attempts: 1 });
    const result = await layer.execute<unknown>({ method: "DELETE", path: "/cards/card1" });
    assert.strictEqual(result, null);
  });
});
