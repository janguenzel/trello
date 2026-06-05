/**
 * Generates the operations metadata map used at runtime for URL construction.
 */
import type { ResolvedOperation } from "./parser.js";
import { pascalCase } from "./type-generator.js";

export function generateOperations(operations: ResolvedOperation[]): string {
  const lines: string[] = [
    "// GENERATED — DO NOT EDIT BY HAND",
    "// Source: openapi.json",
    "// Run `pnpm codegen` to regenerate",
    "",
    'import type { HttpMethod } from "../core/http.js";',
    'import type * as T from "./types.js";',
    "",
    "export interface OperationMeta {",
    "  readonly method: HttpMethod;",
    "  readonly path: string;",
    "  readonly pathParams: readonly string[];",
    "  readonly summary?: string;",
    "  readonly deprecated?: true;",
    "}",
    "",
    "export const operations = {",
  ];

  for (const op of [...operations].sort((a, b) =>
    a.operationId.localeCompare(b.operationId),
  )) {
    const key = camelCase(op.operationId);
    const pathParamsArr = op.pathParams.map((p) => `"${p.name}"`).join(", ");
    const summaryEntry = op.summary
      ? `, summary: ${JSON.stringify(op.summary)}`
      : "";
    const deprecatedEntry = op.deprecated ? `, deprecated: true as const` : "";
    lines.push(
      `  ${key}: { method: "${op.method}" as const, path: "${op.path}", pathParams: [${pathParamsArr}] as const${summaryEntry}${deprecatedEntry} },`,
    );
  }

  lines.push("} as const satisfies Record<string, OperationMeta>;", "");
  lines.push("export type OperationId = keyof typeof operations;", "");
  lines.push("export interface OperationParamMap {");

  for (const op of operations) {
    const key = camelCase(op.operationId);
    const paramType = `T.${pascalCase(op.operationId)}Params`;
    lines.push(`  ${key}: ${paramType};`);
  }

  lines.push("}", "");
  lines.push("export interface OperationResponseMap {");

  for (const op of operations) {
    const key = camelCase(op.operationId);
    const responseType = `T.${pascalCase(op.operationId)}Response`;
    lines.push(`  ${key}: ${responseType};`);
  }

  lines.push("}", "");
  lines.push("export type OperationParams<K extends OperationId> = OperationParamMap[K];");
  lines.push("export type OperationResponse<K extends OperationId> = OperationResponseMap[K];");
  lines.push(
    "export type OperationArgs<K extends OperationId> = keyof OperationParams<K> extends never",
    "  ? [params?: OperationParams<K>]",
    "  : [params: OperationParams<K>];",
    "",
  );

  return lines.join("\n");
}

function camelCase(s: string): string {
  return s
    .replace(/[_\-\s]+([a-zA-Z])/g, (_, c: string) => c.toUpperCase())
    .replace(/^([A-Z])/, (_, c: string) => c.toLowerCase());
}
