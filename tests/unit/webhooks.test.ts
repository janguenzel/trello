import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { verifyWebhookSignature } from "../../src/webhooks.js";

const BODY = '{"action":"createCard","model":{"id":"board1"}}';
const CALLBACK_URL = "https://example.com/webhook";
const API_SECRET = "my-test-api-secret";

function sign(body: string, callbackUrl: string, secret: string): string {
  return createHmac("sha1", secret).update(body + callbackUrl).digest("base64");
}

describe("verifyWebhookSignature", () => {
  it("accepts a valid signature (body + callbackUrl order)", () => {
    const signature = sign(BODY, CALLBACK_URL, API_SECRET);
    assert.equal(
      verifyWebhookSignature({ body: BODY, callbackUrl: CALLBACK_URL, signature, apiSecret: API_SECRET }),
      true,
    );
  });

  it("rejects a tampered signature", () => {
    const signature = sign(BODY, CALLBACK_URL, API_SECRET);
    const tampered = signature.slice(0, -4) + "XXXX";
    assert.equal(
      verifyWebhookSignature({ body: BODY, callbackUrl: CALLBACK_URL, signature: tampered, apiSecret: API_SECRET }),
      false,
    );
  });

  it("rejects a signature computed in the wrong order (callbackUrl + body)", () => {
    const reversedSignature = createHmac("sha1", API_SECRET)
      .update(CALLBACK_URL + BODY)
      .digest("base64");
    assert.equal(
      verifyWebhookSignature({ body: BODY, callbackUrl: CALLBACK_URL, signature: reversedSignature, apiSecret: API_SECRET }),
      false,
    );
  });

  it("returns false when signature has mismatched length (avoids timingSafeEqual throw)", () => {
    assert.equal(
      verifyWebhookSignature({ body: BODY, callbackUrl: CALLBACK_URL, signature: "tooshort", apiSecret: API_SECRET }),
      false,
    );
  });
});
