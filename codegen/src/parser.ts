/**
 * OpenAPI 3.0 parser → internal AST.
 * Resolves all $refs, normalizes nullable, flattens allOf where possible.
 */

export interface OpenApiSpec {
  info: { title: string; version: string };
  components: {
    schemas: Record<string, SchemaObject>;
  };
  paths: Record<string, PathItemObject>;
}

export interface SchemaObject {
  type?: string;
  format?: string;
  properties?: Record<string, SchemaObject>;
  required?: string[];
  items?: SchemaObject;
  enum?: unknown[];
  oneOf?: SchemaObject[];
  anyOf?: SchemaObject[];
  allOf?: SchemaObject[];
  $ref?: string;
  nullable?: boolean;
  description?: string;
  example?: unknown;
  deprecated?: boolean;
  pattern?: string;
  minimum?: number;
  maximum?: number;
  default?: unknown;
  additionalProperties?: boolean | SchemaObject;
}

export interface ParameterObject {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required?: boolean;
  description?: string;
  deprecated?: boolean;
  schema?: SchemaObject;
  example?: unknown;
}

export interface RequestBodyObject {
  required?: boolean;
  content?: Record<string, { schema?: SchemaObject }>;
}

export interface OperationObject {
  operationId?: string;
  summary?: string;
  description?: string;
  deprecated?: boolean;
  tags?: string[];
  parameters?: ParameterObject[];
  requestBody?: RequestBodyObject;
  responses?: Record<
    string,
    { description?: string; content?: Record<string, { schema?: SchemaObject }> }
  >;
}

export interface PathItemObject {
  get?: OperationObject;
  post?: OperationObject;
  put?: OperationObject;
  delete?: OperationObject;
  patch?: OperationObject;
}

export interface ResolvedSpec {
  schemas: Record<string, SchemaObject>;
  paths: Record<string, PathItemObject>;
  /** Map from path to operations, grouped by method */
  operations: ResolvedOperation[];
}

export interface ResolvedOperation {
  operationId: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  summary?: string;
  description?: string;
  deprecated?: boolean;
  tags: string[];
  pathParams: ParameterObject[];
  queryParams: ParameterObject[];
  bodySchema?: SchemaObject;
  responseSchema?: SchemaObject;
  /** True when the success response is explicitly void (204 No Content or no body). */
  isVoidResponse: boolean;
}

export function parseSpec(raw: unknown): ResolvedSpec {
  const spec = raw as OpenApiSpec;
  const schemas = spec.components?.schemas ?? {};

  // Resolve all $refs in schemas
  const resolvedSchemas: Record<string, SchemaObject> = {};
  for (const [name, schema] of Object.entries(schemas)) {
    resolvedSchemas[name] = resolveSchema(schema, schemas);
  }

  const operations: ResolvedOperation[] = [];
  const seenIds = new Map<string, number>();

  for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const method of ["get", "post", "put", "delete", "patch"] as const) {
      const op = pathItem[method];
      if (op == null) continue;

      const httpMethod = method.toUpperCase() as ResolvedOperation["method"];
      // Always derive the operation ID from method+path; the spec's operationId
      // often contains malformed identifiers (e.g. "cardsidmembersvoted1").
      const rawId = generateOperationId(httpMethod, path);
      const baseId = sanitizeOperationId(rawId);
      const count = seenIds.get(baseId) ?? 0;
      seenIds.set(baseId, count + 1);
      const opId = count === 0 ? baseId : `${baseId}${count + 1}`;

      // Merge path-item-level params with operation-level params.
      // Operation-level params override path-level params with the same name+in.
      const pathItemParams: ParameterObject[] = (pathItem.parameters as ParameterObject[] | undefined) ?? [];
      const opParams: ParameterObject[] = op.parameters ?? [];
      const mergedParamsMap = new Map<string, ParameterObject>();
      for (const p of [...pathItemParams, ...opParams]) {
        mergedParamsMap.set(`${p.in}:${p.name}`, p);
      }
      const params = Array.from(mergedParamsMap.values()).map((p) => ({
        ...p,
        schema: p.schema != null ? resolveSchema(p.schema, schemas) : undefined,
      }));

      const pathParams = params.filter((p) => p.in === "path");
      const queryParams = params.filter((p) => p.in === "query");
      const ignoredParams = params.filter((p) => p.in === "header" || p.in === "cookie");
      if (ignoredParams.length > 0) {
        const names = ignoredParams.map((p) => `${p.in}:${p.name}`).join(", ");
        console.warn(`[codegen] Ignored header/cookie params in ${method.toUpperCase()} ${path}: ${names}`);
      }

      let bodySchema: SchemaObject | undefined;
      if (op.requestBody != null) {
        const content = op.requestBody.content ?? {};
        const jsonContent = content["application/json"];
        if (jsonContent?.schema != null) {
          bodySchema = resolveSchema(jsonContent.schema, schemas);
        }
      }

      let responseSchema: SchemaObject | undefined;
      let isVoidResponse = false;
      const responses = op.responses ?? {};
      // Prefer 200, then 201, then 204, then the first 2xx response found.
      const successStatusCode =
        ["200", "201", "204"].find((c) => responses[c] != null) ??
        Object.keys(responses).find((c) => c.startsWith("2"));
      const successResponse = successStatusCode != null ? responses[successStatusCode] : undefined;
      if (successStatusCode === "204" || successResponse?.content == null) {
        // 204 No Content or no response body → void
        responseSchema = undefined;
        isVoidResponse = true;
      } else if (successResponse?.content != null) {
        const jsonContent = successResponse.content["application/json"];
        if (jsonContent?.schema != null) {
          responseSchema = resolveSchema(jsonContent.schema, schemas);
        }
      }

      operations.push({
        operationId: opId,
        method: httpMethod,
        path,
        summary: op.summary,
        description: op.description,
        deprecated: op.deprecated,
        tags: op.tags ?? [],
        pathParams,
        queryParams,
        bodySchema,
        responseSchema,
        isVoidResponse,
      });
    }
  }

  return { schemas: resolvedSchemas, paths: spec.paths, operations };
}

function resolveSchema(
  schema: SchemaObject,
  allSchemas: Record<string, SchemaObject>,
  depth = 0,
): SchemaObject {
  // Guard against infinite recursion
  if (depth > 10) return schema;

  if (schema.$ref != null) {
    const refName = extractRefName(schema.$ref);
    const referenced = allSchemas[refName];
    if (referenced == null) {
      console.warn(`[codegen] Unresolved $ref: "${refName}" — falling back to string`);
      return { type: "string" };
    }
    // Merge: the referencing schema may have additional fields (description, nullable)
    const resolved = resolveSchema(referenced, allSchemas, depth + 1);
    return {
      ...resolved,
      ...(schema.nullable != null ? { nullable: schema.nullable } : {}),
      ...(schema.description != null ? { description: schema.description } : {}),
      ...(schema.example !== undefined ? { example: schema.example } : {}),
    };
  }

  const result: SchemaObject = { ...schema };

  if (result.properties != null) {
    const resolved: Record<string, SchemaObject> = {};
    for (const [key, prop] of Object.entries(result.properties)) {
      resolved[key] = resolveSchema(prop, allSchemas, depth + 1);
    }
    result.properties = resolved;
  }

  if (result.items != null) {
    result.items = resolveSchema(result.items, allSchemas, depth + 1);
  }

  if (result.oneOf != null) {
    result.oneOf = result.oneOf.map((s) =>
      resolveSchema(s, allSchemas, depth + 1),
    );
  }

  if (result.anyOf != null) {
    result.anyOf = result.anyOf.map((s) =>
      resolveSchema(s, allSchemas, depth + 1),
    );
  }

  if (result.allOf != null) {
    result.allOf = result.allOf.map((s) =>
      resolveSchema(s, allSchemas, depth + 1),
    );
  }

  return result;
}

function extractRefName(ref: string): string {
  // "#/components/schemas/Foo" → "Foo"
  const parts = ref.split("/");
  return parts[parts.length - 1] ?? ref;
}

function localPascalCase(str: string): string {
  return str
    .replace(/[_\-\s]+([a-zA-Z])/g, (_, c: string) => (c as string).toUpperCase())
    .replace(/^([a-z])/, (_, c: string) => (c as string).toUpperCase());
}

function generateOperationId(method: string, path: string): string {
  // Replace {param} placeholders with PascalCase equivalents so the generated
  // name is readable (e.g. /cards/{id}/members → getCardsIdMembers).
  const segments = path
    .replace(/\{([^}]+)\}/g, (_, param: string) => localPascalCase(param))
    .split("/")
    .filter(Boolean);
  const resource = segments.join("-");
  return `${method.toLowerCase()}-${resource}`;
}

/**
 * Convert a raw operationId (possibly hyphenated, possibly duplicate-suffixed)
 * to a valid camelCase JavaScript identifier.
 * e.g. "get-boards-id" → "getBoardsId"
 *      "cardsidmembersvoted-1" → "cardsidmembersVoted1"
 */
function sanitizeOperationId(id: string): string {
  // Remove trailing numeric suffixes added by spec tooling (e.g. "-1")
  const cleaned = id.replace(/-(\d+)$/, (_, n: string) => n);
  // Convert hyphens and underscores to camelCase
  const camel = cleaned
    .replace(/[-_=]+([a-zA-Z0-9])/g, (_, c: string) => c.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, "");
  // Ensure starts with lowercase letter
  return camel.charAt(0).toLowerCase() + camel.slice(1);
}
