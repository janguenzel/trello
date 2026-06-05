/**
 * Deterministic file writer with SHA-256 hash guard and atomic rename.
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export async function writeGenerated(
  filePath: string,
  content: string,
): Promise<void> {
  await mkdir(dirname(filePath), { recursive: true });

  const tmpPath = filePath + ".tmp";
  await writeFile(tmpPath, content, "utf8");
  await rename(tmpPath, filePath);

  console.log(`  wrote ${filePath}`);
}

export function computeInputHash(content: string): string {
  return createHash("sha256").update(content).digest("hex").slice(0, 16);
}

export async function isUpToDate(
  filePath: string,
  hash: string,
): Promise<boolean> {
  try {
    const existing = await readFile(filePath, "utf8");
    const firstLine = existing.split("\n")[0] ?? "";
    return firstLine.includes(hash);
  } catch {
    return false;
  }
}

export function addHeader(content: string, hash: string): string {
  const hashLine = `// openapi.json sha256: ${hash}`;
  // Insert after the first "GENERATED" comment line
  return content.replace(
    "// GENERATED — DO NOT EDIT BY HAND",
    `// GENERATED — DO NOT EDIT BY HAND\n${hashLine}`,
  );
}
