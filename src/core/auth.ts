export interface TrelloCredentials {
  readonly key: string;
  readonly token: string;
}

export function validateCredentials(creds: TrelloCredentials): void {
  if (!creds.key || creds.key.trim().length === 0) {
    throw new Error("TrelloClient: API key is required");
  }
  if (!creds.token || creds.token.trim().length === 0) {
    throw new Error("TrelloClient: API token is required");
  }
}

export function injectAuth(url: URL, creds: TrelloCredentials): void {
  url.searchParams.set("key", creds.key.trim());
  url.searchParams.set("token", creds.token.trim());
}
