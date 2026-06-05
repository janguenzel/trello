import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { validateCredentials, injectAuth } from "../../src/core/auth.js";

describe("validateCredentials", () => {
  it("throws when key is empty", () => {
    assert.throws(
      () => validateCredentials({ key: "", token: "validtoken" }),
      /API key is required/,
    );
  });

  it("throws when token is whitespace-only", () => {
    assert.throws(
      () => validateCredentials({ key: "validkey", token: "   " }),
      /API token is required/,
    );
  });
});

describe("injectAuth", () => {
  it("trims leading/trailing whitespace from key and token before injecting", () => {
    const url = new URL("https://api.trello.com/1/boards/1");
    injectAuth(url, { key: "  mykey  ", token: "\tmytoken\n" });
    assert.equal(url.searchParams.get("key"), "mykey");
    assert.equal(url.searchParams.get("token"), "mytoken");
  });
});
