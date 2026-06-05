/**
 * Generates per-resource builder type augmentations from path structure.
 */
import type { ResolvedOperation } from "./parser.js";
import { pascalCase, sanitizeName } from "./type-generator.js";

interface ResourceGroup {
  name: string; // e.g. "Boards"
  operations: ResolvedOperation[];
  subResources: Map<string, ResolvedOperation[]>;
}

export function generateBuilders(operations: ResolvedOperation[]): string {
  const groups = groupByResource(operations);

  const lines: string[] = [
    "// GENERATED — DO NOT EDIT BY HAND",
    "// Source: openapi.json",
    "// Run `pnpm codegen` to regenerate",
    "",
    'import type { CollectionBuilder } from "../builders/collection.js";',
    'import type { JobHandle } from "../core/queue/queue.js";',
    'import type * as T from "./types.js";',
    "",
  ];

  for (const group of groups.values()) {
    const interfaceName = `${pascalCase(group.name)}Resource`;
    lines.push(`export interface ${interfaceName} {`);

    // Direct operations on this resource (GET, POST, etc.)
    for (const op of group.operations) {
      const paramType = `T.${pascalCase(op.operationId)}Params`;
      const responseType = `T.${pascalCase(op.operationId)}Response`;

      if (op.method === "GET" && op.pathParams.length <= 1) {
        const optional = op.queryParams.length > 0;
        lines.push(
          `  get(params${optional ? "?" : ""}: Partial<${paramType}>): Promise<${responseType}>;`,
        );
      } else if (op.method === "POST") {
        lines.push(
          `  create(params: ${paramType}): Promise<JobHandle<${responseType}>>;`,
        );
      } else if (op.method === "PUT" || op.method === "DELETE") {
        const returnType =
          op.method === "DELETE"
            ? `JobHandle<void>`
            : `JobHandle<${responseType}>`;
        lines.push(
          `  ${op.method === "DELETE" ? "delete_" : "update"}(id: T.TrelloID, params: Partial<${paramType}>): Promise<${returnType}>;`,
        );
      }
    }

    // Sub-resource collection accessors
    for (const [subName, subOps] of group.subResources) {
      const getOp = subOps.find((o) => o.method === "GET");
      if (getOp == null) continue;
      const itemType = `T.${pascalCase(getOp.operationId)}Response`;
      const filterType = `T.${pascalCase(getOp.operationId)}Params`;
      lines.push(
        `  ${subName}(): CollectionBuilder<${itemType}, ${filterType}>;`,
      );
    }

    lines.push("}", "");
  }

  // Export a map of all resource interface names
  const resourceMapEntries = Array.from(groups.values())
    .map((g) => `  ${g.name.toLowerCase()}: ${pascalCase(g.name)}Resource;`)
    .join("\n");

  lines.push(
    "export interface ResourceMap {",
    resourceMapEntries,
    "}",
    "",
  );

  return lines.join("\n");
}

function groupByResource(
  operations: ResolvedOperation[],
): Map<string, ResourceGroup> {
  const groups = new Map<string, ResourceGroup>();

  for (const op of operations) {
    const segments = op.path.split("/").filter(Boolean);
    const rootSegment = segments[0];
    if (rootSegment == null) continue;

    // Skip segments that are pure path params
    if (rootSegment.startsWith("{")) continue;

    const groupName = rootSegment;
    if (!groups.has(groupName)) {
      groups.set(groupName, {
        name: groupName,
        operations: [],
        subResources: new Map(),
      });
    }
    const group = groups.get(groupName)!;

    // Determine if this is a direct operation or a sub-resource operation
    // Direct: /boards/{id} (2 segments where 2nd is path param)
    // Sub-resource: /boards/{id}/cards (3 segments)
    const secondSegment = segments[1];
    const thirdSegment = segments[2];

    if (
      segments.length <= 2 ||
      (segments.length === 2 && secondSegment?.startsWith("{"))
    ) {
      group.operations.push(op);
    } else if (
      segments.length >= 3 &&
      secondSegment?.startsWith("{") &&
      thirdSegment != null &&
      !thirdSegment.startsWith("{")
    ) {
      // Sub-resource: /boards/{id}/cards
      const subName = thirdSegment;
      if (!group.subResources.has(subName)) {
        group.subResources.set(subName, []);
      }
      group.subResources.get(subName)!.push(op);
    }
  }

  return groups;
}
