/**
 * Compares the committed openapi.json against the live Atlassian CDN spec.
 * Exits 0 if identical, exits 1 with a structured diff if drift is detected.
 *
 * Usage: pnpm check:spec
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { computeInputHash } from "./writer.js";

const SPEC_URL = "https://dac-static.atlassian.com/cloud/trello/swagger.v3.json";
const ROOT = new URL("../../", import.meta.url).pathname;
const OPENAPI_PATH = join(ROOT, "openapi.json");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete", "head", "options", "trace"] as const;

type OpenApiSpec = {
  paths?: Record<string, Record<string, unknown>>;
  components?: { schemas?: Record<string, unknown> };
};

type Diff = { added: string[]; removed: string[]; changed: string[] };

function diffOperations(local: OpenApiSpec, remote: OpenApiSpec): Diff {
  const localOps = new Map<string, string>();
  const remoteOps = new Map<string, string>();

  for (const [path, methods] of Object.entries(local.paths ?? {})) {
    for (const method of HTTP_METHODS) {
      if (methods[method] !== undefined) {
        localOps.set(`${method.toUpperCase()} ${path}`, JSON.stringify(methods[method]));
      }
    }
  }
  for (const [path, methods] of Object.entries(remote.paths ?? {})) {
    for (const method of HTTP_METHODS) {
      if (methods[method] !== undefined) {
        remoteOps.set(`${method.toUpperCase()} ${path}`, JSON.stringify(methods[method]));
      }
    }
  }

  const added: string[] = [];
  const removed: string[] = [];
  const changed: string[] = [];

  for (const [key, remoteVal] of remoteOps) {
    const localVal = localOps.get(key);
    if (localVal === undefined) added.push(key);
    else if (localVal !== remoteVal) changed.push(key);
  }
  for (const key of localOps.keys()) {
    if (!remoteOps.has(key)) removed.push(key);
  }

  return { added, removed, changed };
}

function diffSchemas(local: OpenApiSpec, remote: OpenApiSpec): Diff {
  const localSchemas = local.components?.schemas ?? {};
  const remoteSchemas = remote.components?.schemas ?? {};

  const added: string[] = [];
  const removed: string[] = [];
  const changed: string[] = [];

  for (const [name, schema] of Object.entries(remoteSchemas)) {
    const localSchema = localSchemas[name];
    if (localSchema === undefined) added.push(name);
    else if (JSON.stringify(localSchema) !== JSON.stringify(schema)) changed.push(name);
  }
  for (const name of Object.keys(localSchemas)) {
    if (!(name in remoteSchemas)) removed.push(name);
  }

  return { added, removed, changed };
}

function printDiff(label: string, diff: Diff): void {
  console.log(
    `\n${label}: +${diff.added.length} added, -${diff.removed.length} removed, ~${diff.changed.length} changed`,
  );
  for (const item of diff.added) console.log(`  + ${item}`);
  for (const item of diff.removed) console.log(`  - ${item}`);
  for (const item of diff.changed) console.log(`  ~ ${item}`);
}

async function main(): Promise<void> {
  console.log("OpenAPI Spec Drift Check");
  console.log("========================");
  console.log(`Fetching: ${SPEC_URL}`);

  let response: Response;
  try {
    response = await fetch(SPEC_URL);
  } catch (err) {
    console.error(`\nNetwork error: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }

  if (!response.ok) {
    console.error(`\nHTTP ${response.status}: ${response.statusText}`);
    process.exit(1);
  }

  const remoteText = await response.text();

  let localText: string;
  try {
    localText = await readFile(OPENAPI_PATH, "utf8");
  } catch {
    console.error("\nLocal openapi.json not found — run: pnpm update-spec");
    process.exit(1);
  }

  if (computeInputHash(localText) === computeInputHash(remoteText)) {
    console.log(`\nNo drift detected (sha256: ${computeInputHash(localText)})`);
    return;
  }

  const local = JSON.parse(localText) as OpenApiSpec;
  const remote = JSON.parse(remoteText) as OpenApiSpec;

  const ops = diffOperations(local, remote);
  const schemas = diffSchemas(local, remote);

  printDiff("Operations", ops);
  printDiff("Schemas", schemas);

  const totalOps = ops.added.length + ops.removed.length + ops.changed.length;
  const totalSchemas = schemas.added.length + schemas.removed.length + schemas.changed.length;

  console.log(`\nTotal changes: ${totalOps} operation(s), ${totalSchemas} schema(s)`);
  console.log("\nSpec has drifted from local openapi.json.");
  console.log("Run: pnpm update-spec && pnpm codegen");

  process.exit(1);
}

main().catch((err: unknown) => {
  console.error("check-spec failed:", err);
  process.exit(1);
});
