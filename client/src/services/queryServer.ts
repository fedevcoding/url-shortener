import { SERVER_URL } from "@constants";

export class QueryServer {
  isError = (e: any): boolean => e instanceof Error;

  async newUrl(
    longUrl: string
  ): Promise<{ url: string; shortUrl: string } | Error> {
    const res = await fetch(`${SERVER_URL}/create`, {
      method: "POST",
      body: JSON.stringify({ longUrl }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return await res.json();
  }

  async solveUrl(url: string): Promise<{ resolvedUrl: string } | Error> {
    const res = await fetch(`${SERVER_URL}/solveUrl?url=${url}`);

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return await res.json();
  }
}