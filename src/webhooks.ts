import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * CIDR range from which Trello sends webhook POST requests.
 * Use this to allowlist inbound traffic on your webhook receiver.
 * https://developer.atlassian.com/cloud/trello/guides/rest-api/webhooks/
 */
export const TRELLO_WEBHOOK_IP_RANGE = "104.192.142.240/28";

/**
 * Verifies the `X-Trello-Webhook` signature on an incoming webhook request.
 *
 * Trello signs each request with HMAC-SHA1 over `body + callbackUrl` using
 * the API secret, encoded as base64. Always verify this in production.
 *
 * @param params.callbackUrl - The exact URL Trello is posting to (must match the registered URL)
 * @param params.body        - The raw request body string
 * @param params.signature   - The value of the `X-Trello-Webhook` header
 * @param params.apiSecret   - Your Trello API secret (from Power-Ups admin)
 */
export function verifyWebhookSignature(params: {
  callbackUrl: string;
  /** Raw request body. Accepts Buffer (recommended) or string. */
  body: string | Buffer;
  signature: string;
  apiSecret: string;
}): boolean {
  const { callbackUrl, body, signature, apiSecret } = params;
  const bodyBuf = Buffer.isBuffer(body) ? body : Buffer.from(body, "utf8");
  const expected = createHmac("sha1", apiSecret)
    .update(bodyBuf)
    .update(callbackUrl)
    .digest("base64");

  if (signature.length !== expected.length) return false;

  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}
