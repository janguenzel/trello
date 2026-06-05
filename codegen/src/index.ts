/**
 * Code generation CLI entry point.
 * Usage: node --import tsx/esm codegen/src/index.ts
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseSpec } from "./parser.js";
import { generateBuilders } from "./builder-generator.js";
import { generateOperations } from "./operation-generator.js";
import { generateTypes } from "./type-generator.js";
import {
  addHeader,
  computeInputHash,
  writeGenerated,
} from "./writer.js";

const ROOT = new URL("../../", import.meta.url).pathname;
const OPENAPI_PATH = join(ROOT, "openapi.json");
const GENERATED_DIR = join(ROOT, "src", "generated");

async function main(): Promise<void> {
  console.log("Trello SDK Codegen");
  console.log("==================");

  const rawJson = await readFile(OPENAPI_PATH, "utf8");
  const hash = computeInputHash(rawJson);
  console.log(`\nopenapi.json sha256: ${hash}`);

  const typesPath = join(GENERATED_DIR, "types.ts");
  const operationsPath = join(GENERATED_DIR, "operations.ts");
  const resourcesPath = join(GENERATED_DIR, "resources.ts");

  const spec = parseSpec(JSON.parse(rawJson));
  console.log(
    `\nParsed: ${spec.operations.length} operations, ${Object.keys(spec.schemas).length} schemas`,
  );

  console.log("\nGenerating types...");
  const typesContent = addHeader(
    generateTypes(spec.schemas, spec.operations),
    hash,
  );
  await writeGenerated(typesPath, typesContent);

  console.log("Generating operations...");
  const operationsContent = addHeader(
    generateOperations(spec.operations),
    hash,
  );
  await writeGenerated(operationsPath, operationsContent);

  console.log("Generating resource builders...");
  const buildersContent = addHeader(generateBuilders(spec.operations), hash);
  await writeGenerated(resourcesPath, buildersContent);

  console.log("\nDone.");
}

main().catch((err: unknown) => {
  console.error("Codegen failed:", err);
  process.exit(1);
});
