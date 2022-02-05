import type { PaginationOptions } from "./resources/pagination.ts";

export const request = async (endpoint: string, query?: PaginationOptions) => {
  let url = `https://pokeapi.co/api/v2/${endpoint}`;
  if (query) {
    url += `?${new URLSearchParams(query as Record<string, string>)}`;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": `dragapi (${Deno.build.os}) Deno/${Deno.version.deno}`,
    },
    signal: controller.signal,
  });
  clearTimeout(timeout);

  if (response.ok) {
    return response.headers.get("Content-Type")?.startsWith("application/json")
      ? response.json()
      : response.text();
  }

  throw new Error(await response.text());
};
