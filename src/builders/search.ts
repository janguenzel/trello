import type { HttpLayer } from "../core/http.js";
import type { Card, Board, Member, Organization, Action } from "../generated/types.js";

export interface SearchOptions {
  limit?: number;
}

export interface SearchResult {
  cards?: Card[];
  boards?: Board[];
  members?: Member[];
  organizations?: Organization[];
  actions?: Action[];
  options?: {
    terms?: unknown[];
    modifiers?: unknown[];
    modelTypes?: string[];
    partial?: boolean;
  };
}

export class SearchBuilder {
  private modelTypes: Set<string> = new Set();
  private cardOptions: SearchOptions = {};
  private boardOptions: SearchOptions = {};
  private memberOptions: SearchOptions = {};
  private organizationOptions: SearchOptions = {};

  constructor(
    private readonly http: HttpLayer,
    private readonly query: string,
  ) {}

  cards(opts?: SearchOptions): this {
    this.modelTypes.add("cards");
    if (opts) this.cardOptions = { ...opts };
    return this;
  }

  boards(opts?: SearchOptions): this {
    this.modelTypes.add("boards");
    if (opts) this.boardOptions = { ...opts };
    return this;
  }

  members(opts?: SearchOptions): this {
    this.modelTypes.add("members");
    if (opts) this.memberOptions = { ...opts };
    return this;
  }

  organizations(opts?: SearchOptions): this {
    this.modelTypes.add("organizations");
    if (opts) this.organizationOptions = { ...opts };
    return this;
  }

  async get(): Promise<SearchResult> {
    const queryParams: Record<string, string | number> = {
      query: this.query,
    };

    if (this.modelTypes.size > 0) {
      queryParams["modelTypes"] = Array.from(this.modelTypes).join(",");
    }
    if (this.cardOptions.limit != null) {
      queryParams["cards_limit"] = this.cardOptions.limit;
    }
    if (this.boardOptions.limit != null) {
      queryParams["boards_limit"] = this.boardOptions.limit;
    }
    if (this.memberOptions.limit != null) {
      queryParams["members_limit"] = this.memberOptions.limit;
    }
    if (this.organizationOptions.limit != null) {
      queryParams["organizations_limit"] = this.organizationOptions.limit;
    }

    return this.http.execute<SearchResult>({
      method: "GET",
      path: "/search",
      queryParams,
    });
  }
}
