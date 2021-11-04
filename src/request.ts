import type { PaginationOptions } from "./resources/pagination.ts";

export const request = async (endpoint: string, query?: PaginationOptions) => {
  let url = `https://pokeapi.co/api/v2${endpoint}`;
  if (query) {
    url += `?${new URLSearchParams(query as Record<string, string>)}`;
  }
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(await response.text());
};
