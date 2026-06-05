import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseSpec } from "../../codegen/src/parser.js";

function makeSpec(overrides: Record<string, unknown> = {}): unknown {
  return {
    info: { title: "Test", version: "1.0" },
    components: { schemas: {} },
    paths: {},
    ...overrides,
  };
}

describe("parseSpec", () => {
  it("returns empty operations for an empty paths object", () => {
    const result = parseSpec(makeSpec());
    assert.equal(result.operations.length, 0);
  });

  it("parses a simple GET operation and derives operationId from method+path", () => {
    const spec = makeSpec({
      paths: {
        "/boards/{id}": {
          get: {
            parameters: [
              { name: "id", in: "path", required: true, schema: { type: "string" } },
              { name: "fields", in: "query", schema: { type: "string" } },
            ],
            responses: { "200": { content: { "application/json": { schema: { type: "object" } } } } },
          },
        },
      },
    });
    const result = parseSpec(spec);
    assert.equal(result.operations.length, 1);
    const op = result.operations[0];
    assert.ok(op != null);
    assert.equal(op.operationId, "getBoardsId");
    assert.equal(op.method, "GET");
    assert.equal(op.path, "/boards/{id}");
    assert.equal(op.pathParams.length, 1);
    assert.equal(op.queryParams.length, 1);
  });

  it("sets isVoidResponse=true for 204 responses", () => {
    const spec = makeSpec({
      paths: {
        "/boards/{id}": {
          delete: {
            parameters: [{ name: "id", in: "path", required: true, schema: { type: "string" } }],
            responses: { "204": { description: "No Content" } },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    assert.equal(op.isVoidResponse, true);
    assert.equal(op.responseSchema, undefined);
  });

  it("sets isVoidResponse=false when a 200 JSON schema is present", () => {
    const spec = makeSpec({
      paths: {
        "/boards/{id}": {
          get: {
            parameters: [],
            responses: { "200": { content: { "application/json": { schema: { type: "string" } } } } },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    assert.equal(op.isVoidResponse, false);
    assert.ok(op.responseSchema != null);
  });

  it("resolves $ref schemas inline", () => {
    const spec = makeSpec({
      components: {
        schemas: {
          Board: {
            type: "object",
            properties: { id: { type: "string" }, name: { type: "string" } },
            required: ["id"],
          },
        },
      },
      paths: {
        "/boards/{id}": {
          get: {
            parameters: [],
            responses: {
              "200": {
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Board" },
                  },
                },
              },
            },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    assert.ok(op.responseSchema != null);
    assert.ok(op.responseSchema.properties != null);
    assert.ok("id" in op.responseSchema.properties);
  });

  it("deduplicates operation IDs with numeric suffix on collision", () => {
    // "/boards/{id}" → generateOperationId → "get-boards-Id" → sanitize → "getBoardsId"
    // "/boards-id"   → generateOperationId → "get-boards-id" → sanitize → "getBoardsId"
    // Both produce the same base ID — the second must receive the "2" suffix.
    const spec = makeSpec({
      paths: {
        "/boards/{id}": {
          get: { parameters: [], responses: { "200": { description: "ok" } } },
        },
        "/boards-id": {
          get: { parameters: [], responses: { "200": { description: "ok" } } },
        },
      },
    });
    const ops = parseSpec(spec).operations;
    assert.equal(ops.length, 2);
    const ids = ops.map((o) => o.operationId);
    assert.notEqual(ids[0], ids[1], "Colliding operationIds must be deduplicated");
    assert.ok(ids.includes("getBoardsId"), `Expected "getBoardsId" in ${JSON.stringify(ids)}`);
    assert.ok(ids.includes("getBoardsId2"), `Expected "getBoardsId2" in ${JSON.stringify(ids)}`);
  });

  it("handles nullable schema ($ref + nullable override)", () => {
    const spec = makeSpec({
      components: {
        schemas: {
          Board: { type: "object", properties: { id: { type: "string" } } },
        },
      },
      paths: {
        "/boards": {
          get: {
            parameters: [],
            responses: {
              "200": {
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Board", nullable: true },
                  },
                },
              },
            },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    assert.ok(op.responseSchema != null);
    assert.equal(op.responseSchema.nullable, true);
  });

  it("prefers 200 over 201 and 204 for response schema", () => {
    const spec = makeSpec({
      paths: {
        "/cards": {
          post: {
            parameters: [],
            responses: {
              "200": { content: { "application/json": { schema: { type: "string" } } } },
              "201": { content: { "application/json": { schema: { type: "number" } } } },
            },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    assert.equal(op.responseSchema?.type, "string");
  });

  it("falls back to 201 when no 200 is present", () => {
    const spec = makeSpec({
      paths: {
        "/cards": {
          post: {
            parameters: [],
            responses: {
              "201": { content: { "application/json": { schema: { type: "number" } } } },
            },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    assert.equal(op.responseSchema?.type, "number");
    assert.equal(op.isVoidResponse, false);
  });

  it("merges path-item-level and operation-level params (op overrides)", () => {
    const spec = makeSpec({
      paths: {
        "/boards/{id}": {
          parameters: [
            { name: "id", in: "path", required: true, schema: { type: "string" } },
            { name: "shared", in: "query", schema: { type: "string", description: "path-level" } },
          ],
          get: {
            parameters: [
              // same name+in → overrides path-item level
              { name: "shared", in: "query", schema: { type: "number", description: "op-level" } },
            ],
            responses: { "200": { description: "ok" } },
          },
        },
      },
    });
    const op = parseSpec(spec).operations[0];
    assert.ok(op != null);
    const shared = op.queryParams.find((p) => p.name === "shared");
    assert.ok(shared != null);
    assert.equal(shared.schema?.description, "op-level");
    assert.equal(op.queryParams.length, 1);
  });
});
