/**
 * Generates TypeScript types from resolved OpenAPI schemas.
 */
import type { ResolvedOperation, SchemaObject } from "./parser.js";

export function generateTypes(
  schemas: Record<string, SchemaObject>,
  operations: ResolvedOperation[],
): string {
  const lines: string[] = [
    "// GENERATED — DO NOT EDIT BY HAND",
    "// Source: openapi.json",
    "// Run `pnpm codegen` to regenerate",
    "",
    "// ─── Primitive aliases ────────────────────────────────────────────────────",
    "",
    "/** A 24-character hex Trello resource ID. */",
    "export type TrelloID = string;",
    "",
    '/** Position: "top", "bottom", or a floating-point number. */',
    'export type PosStringOrNumber = "top" | "bottom" | number;',
    "",
    "// ─── Schemas ──────────────────────────────────────────────────────────────",
    "",
  ];

  // Sort schemas alphabetically for deterministic output
  const sortedNames = Object.keys(schemas).sort();

  const skip = new Set(["TrelloID", "posStringOrNumber", "APIKey", "APIToken"]);

  for (const name of sortedNames) {
    if (skip.has(name)) continue;
    const schema = schemas[name];
    if (schema == null) continue;
    const tsType = schemaToTs(schema, schemas, name);
    const jsdoc = buildJsDoc(schema);
    if (jsdoc) lines.push(jsdoc);
    lines.push(`export type ${sanitizeName(name)} = ${tsType};`, "");
  }

  lines.push(
    "// ─── Operation parameter types ────────────────────────────────────────────",
    "",
  );

  for (const op of operations) {
    const paramTypeName = `${pascalCase(op.operationId)}Params`;
    const responseTypeName = `${pascalCase(op.operationId)}Response`;

    const jsdoc = buildOperationJsDoc(op);
    if (jsdoc) lines.push(jsdoc);

    // Params interface
    const fields: string[] = [];

    for (const p of op.pathParams) {
      const fieldJsDoc = p.description
        ? `  /** ${escapeJsDoc(p.description)} */\n`
        : "";
      const tsType = p.schema != null ? schemaToTs(p.schema, {}) : "string";
      fields.push(`${fieldJsDoc}  ${sanitizeFieldName(p.name)}: ${tsType};`);
    }

    for (const p of op.queryParams) {
      const fieldJsDoc = buildParamJsDoc(p);
      const optional = p.required !== true;
      const tsType = p.schema != null ? schemaToTs(p.schema, {}) : "string";
      fields.push(
        `${fieldJsDoc}  ${sanitizeFieldName(p.name)}${optional ? "?" : ""}: ${tsType};`,
      );
    }

    if (op.bodySchema?.properties != null) {
      const required = new Set(op.bodySchema.required ?? []);
      for (const [key, prop] of Object.entries(op.bodySchema.properties)) {
        const fieldJsDoc = prop.description
          ? `  /** ${escapeJsDoc(prop.description)} */\n`
          : "";
        const optional = !required.has(key);
        const tsType = schemaToTs(prop, {});
        fields.push(
          `${fieldJsDoc}  ${sanitizeFieldName(key)}${optional ? "?" : ""}: ${tsType};`,
        );
      }
    }

    if (fields.length > 0) {
      lines.push(
        `export interface ${paramTypeName} {`,
        ...fields,
        "}",
        "",
      );
    } else {
      lines.push(`export type ${paramTypeName} = Record<string, never>;`, "");
    }

    // Response type: void for 204/no-body, concrete type if schema present, unknown otherwise
    const responseType =
      op.responseSchema != null
        ? schemaToTs(op.responseSchema, {})
        : op.isVoidResponse
          ? "void"
          : "unknown";
    lines.push(`export type ${responseTypeName} = ${responseType};`, "");
  }

  return lines.join("\n");
}

export function schemaToTs(
  schema: SchemaObject,
  allSchemas: Record<string, SchemaObject>,
  contextName?: string,
): string {
  // $ref should already be resolved by the parser
  // Handle nullable wrapper
  const nullable = schema.nullable === true;

  const base = resolveBase(schema, allSchemas, contextName);
  return nullable ? `${base} | null` : base;
}

function resolveBase(
  schema: SchemaObject,
  allSchemas: Record<string, SchemaObject>,
  contextName?: string,
): string {
  // Special named schema overrides
  if (contextName === "posStringOrNumber" || contextName === "TrelloID") {
    return contextName === "TrelloID" ? "TrelloID" : "PosStringOrNumber";
  }

  if (schema.oneOf != null && schema.oneOf.length > 0) {
    const members = schema.oneOf.map((s) => schemaToTs(s, allSchemas));
    return members.join(" | ");
  }

  if (schema.anyOf != null && schema.anyOf.length > 0) {
    const members = schema.anyOf.map((s) => schemaToTs(s, allSchemas));
    return members.join(" | ");
  }

  if (schema.allOf != null && schema.allOf.length > 0) {
    const members = schema.allOf.map((s) => schemaToTs(s, allSchemas));
    if (members.length === 1) return members[0] ?? "unknown";
    return members.join(" & ");
  }

  if (schema.enum != null) {
    const members = schema.enum.map((v) =>
      typeof v === "string" ? JSON.stringify(v) : String(v),
    );
    return members.join(" | ");
  }

  switch (schema.type) {
    case "string":
      return "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      if (schema.items != null) {
        const itemType = schemaToTs(schema.items, allSchemas);
        return `${itemType}[]`;
      }
      return "unknown[]";
    case "object":
      return objectToTs(schema, allSchemas);
    default:
      // Unknown type — check for $ref (should be resolved, but guard)
      if (schema.$ref != null) {
        return sanitizeName(extractRefName(schema.$ref));
      }
      // Fallback
      if (schema.properties != null) {
        return objectToTs(schema, allSchemas);
      }
      return "unknown";
  }
}

function objectToTs(
  schema: SchemaObject,
  allSchemas: Record<string, SchemaObject>,
): string {
  if (schema.properties == null || Object.keys(schema.properties).length === 0) {
    if (schema.additionalProperties === true) return "Record<string, unknown>";
    return "Record<string, unknown>";
  }

  const required = new Set(schema.required ?? []);
  const fields: string[] = [];

  for (const [key, prop] of Object.entries(schema.properties)) {
    const optional = !required.has(key);
    const tsType = schemaToTs(prop, allSchemas);
    const comment =
      prop.description != null
        ? `  /** ${escapeJsDoc(prop.description)} */\n`
        : "";
    fields.push(
      `${comment}  ${sanitizeFieldName(key)}${optional ? "?" : ""}: ${tsType};`,
    );
  }

  return `{\n${fields.join("\n")}\n}`;
}

function buildJsDoc(schema: SchemaObject): string {
  const parts: string[] = [];
  if (schema.description) parts.push(escapeJsDoc(schema.description));
  if (schema.example !== undefined && schema.example !== null) {
    const ex =
      typeof schema.example === "string"
        ? `"${schema.example}"`
        : JSON.stringify(schema.example);
    parts.push(`@example ${ex}`);
  }
  if (schema.deprecated === true) parts.push("@deprecated");
  if (parts.length === 0) return "";
  if (parts.length === 1 && !parts[0]?.startsWith("@")) {
    return `/** ${parts[0]} */`;
  }
  return `/**\n * ${parts.join("\n * ")}\n */`;
}

function buildOperationJsDoc(op: ResolvedOperation): string {
  const parts: string[] = [];
  if (op.summary) parts.push(escapeJsDoc(op.summary));
  if (op.description && op.description !== op.summary)
    parts.push(escapeJsDoc(op.description));
  if (op.deprecated === true) parts.push("@deprecated");
  if (parts.length === 0) return "";
  return `/**\n * ${parts.join("\n * ")}\n */`;
}

function buildParamJsDoc(p: {
  description?: string;
  deprecated?: boolean;
  example?: unknown;
}): string {
  if (!p.description && !p.deprecated) return "";
  const parts: string[] = [];
  if (p.description) parts.push(escapeJsDoc(p.description));
  if (p.deprecated) parts.push("@deprecated");
  return `  /**\n   * ${parts.join("\n   * ")}\n   */\n`;
}

function escapeJsDoc(s: string): string {
  return s
    .replace(/\*\//g, "*\\/")
    .replace(/@/g, "&#64;")
    .replace(/\n/g, " ")
    .trim();
}

export function sanitizeName(name: string): string {
  // Convert to valid TypeScript identifier
  if (name === "List" || name === "TrelloList") return "TrelloList";
  // Handle names starting with numbers or containing hyphens
  return name.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^(\d)/, "_$1");
}

export function sanitizeFieldName(name: string): string {
  // Field names that are reserved words
  const reserved = new Set(["delete", "default", "export", "import", "type"]);
  if (reserved.has(name)) return `${name}_`;
  if (/^[0-9]/.test(name)) return `_${name}`;
  // Convert camelCase/snake_case with special chars
  return name.replace(/[^a-zA-Z0-9_]/g, "_");
}

export function pascalCase(s: string): string {
  return s
    .replace(/[_\-\s]+([a-zA-Z])/g, (_, c: string) => c.toUpperCase())
    .replace(/^([a-z])/, (_, c: string) => c.toUpperCase());
}

function extractRefName(ref: string): string {
  const parts = ref.split("/");
  return parts[parts.length - 1] ?? ref;
}
