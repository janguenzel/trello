import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { schemaToTs, sanitizeName, pascalCase } from "../../codegen/src/type-generator.js";

describe("schemaToTs", () => {
  it("maps string type", () => {
    assert.equal(schemaToTs({ type: "string" }, {}), "string");
  });

  it("maps number type", () => {
    assert.equal(schemaToTs({ type: "number" }, {}), "number");
    assert.equal(schemaToTs({ type: "integer" }, {}), "number");
  });

  it("maps boolean type", () => {
    assert.equal(schemaToTs({ type: "boolean" }, {}), "boolean");
  });

  it("maps string enum to union literal", () => {
    const result = schemaToTs(
      { type: "string", enum: ["top", "bottom", "left"] },
      {},
    );
    assert.equal(result, '"top" | "bottom" | "left"');
  });

  it("maps array type", () => {
    assert.equal(
      schemaToTs({ type: "array", items: { type: "string" } }, {}),
      "string[]",
    );
  });

  it("maps nullable type", () => {
    assert.equal(
      schemaToTs({ type: "string", nullable: true }, {}),
      "string | null",
    );
  });

  it("maps oneOf to union", () => {
    const result = schemaToTs(
      {
        oneOf: [
          { type: "string", enum: ["top", "bottom"] },
          { type: "number" },
        ],
      },
      {},
    );
    assert.equal(result, '"top" | "bottom" | number');
  });

  it("maps object with properties to interface-like type", () => {
    const result = schemaToTs(
      {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
        },
        required: ["id"],
      },
      {},
    );
    assert.ok(result.includes("id: string"), "required field must be non-optional");
    assert.ok(result.includes("name?: string"), "optional field must have ?");
  });

  it("maps unknown type to 'unknown'", () => {
    assert.equal(schemaToTs({}, {}), "unknown");
  });
});

describe("sanitizeName", () => {
  it("handles List → TrelloList special case", () => {
    assert.equal(sanitizeName("List"), "TrelloList");
    assert.equal(sanitizeName("TrelloList"), "TrelloList");
  });

  it("sanitizes names with special characters", () => {
    const result = sanitizeName("My-Type");
    assert.match(result, /^[a-zA-Z_][a-zA-Z0-9_]*$/);
  });
});

describe("pascalCase", () => {
  it("converts hyphen-case to PascalCase", () => {
    assert.equal(pascalCase("get-boards-id"), "GetBoardsId");
  });

  it("converts snake_case to PascalCase", () => {
    assert.equal(pascalCase("get_boards_id"), "GetBoardsId");
  });

  it("leaves already-Pascal unchanged", () => {
    assert.equal(pascalCase("Board"), "Board");
  });
});
