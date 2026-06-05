import type { HttpLayer } from "../core/http.js";

export class CollectionBuilder<TItem, TFilter extends object> {
  private _filter: Partial<TFilter> = {};
  private _fields: string[] = [];
  private _limit?: number;
  private _page?: number;

  constructor(
    private readonly http: HttpLayer,
    private readonly method: "GET",
    private readonly path: string,
    private readonly pathParams: Record<string, string>,
  ) {}

  /** Merges additional filter criteria. Accumulative — repeated calls extend, not replace, previous filters. */
  filter(params: Partial<TFilter>): this {
    Object.assign(this._filter, params);
    return this;
  }

  fields(fields: Array<keyof TItem & string>): this {
    this._fields = fields;
    return this;
  }

  limit(n: number): this {
    this._limit = n;
    return this;
  }

  page(n: number): this {
    this._page = n;
    return this;
  }

  async get(): Promise<TItem[]> {
    const queryParams: Record<string, string | number | boolean | undefined> = {
      ...this._filter as Record<string, string | number | boolean | undefined>,
    };
    if (this._fields.length > 0) {
      queryParams["fields"] = this._fields.join(",");
    }
    if (this._limit != null) queryParams["limit"] = this._limit;
    if (this._page != null) queryParams["page"] = this._page;

    return this.http.execute<TItem[]>({
      method: this.method,
      path: this.path,
      pathParams: this.pathParams,
      queryParams,
    });
  }
}
