/**
 * Fetches the latest Trello OpenAPI spec from Atlassian's CDN and updates openapi.json.
 *
 * Usage: node_modules/.bin/tsx codegen/src/update-spec.ts
 *        pnpm update-spec
 *
 * Does NOT run codegen — that is a deliberate separate step so you can review
 * what changed in the spec before regenerating types.
 */
import { readFile, rename, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { computeInputHash } from "./writer.js";

const SPEC_URL = "https://dac-static.atlassian.com/cloud/trello/swagger.v3.json";
const ROOT = new URL("../../", import.meta.url).pathname;
const OPENAPI_PATH = join(ROOT, "openapi.json");

async function readCurrentHash(): Promise<string | null> {
  try {
    const content = await readFile(OPENAPI_PATH, "utf8");
    return computeInputHash(content);
  } catch {
    return null;
  }
}

async function atomicWrite(path: string, content: string): Promise<void> {
  const tmp = path + ".tmp";
  await writeFile(tmp, content, "utf8");
  await rename(tmp, path);
}

async function main(): Promise<void> {
  console.log("Trello Spec Updater");
  console.log("===================");
  console.log(`Fetching: ${SPEC_URL}`);

  let response: Response;
  try {
    response = await fetch(SPEC_URL);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`\nNetwork error: ${msg}`);
    process.exit(1);
  }

  if (!response.ok) {
    console.error(`\nHTTP ${response.status}: ${response.statusText}`);
    process.exit(1);
  }

  const specText = await response.text();
  const newHash = computeInputHash(specText);
  const currentHash = await readCurrentHash();

  if (currentHash === newHash) {
    console.log(`\nAlready up to date (sha256: ${newHash})`);
    return;
  }

  await atomicWrite(OPENAPI_PATH, specText);

  const from = currentHash ?? "(none)";
  console.log(`\nUpdated: ${from} → ${newHash}`);
  console.log("\nNext steps:");
  console.log("  git diff openapi.json   # review what Trello changed");
  console.log("  pnpm codegen            # regenerate types");
  console.log("  pnpm typecheck          # verify");
}

main().catch((err: unknown) => {
  console.error("update-spec failed:", err);
  process.exit(1);
});
