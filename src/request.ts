// deno-lint-ignore no-explicit-any
export const request = async <T>(pathname: string, query?: any): Promise<T> => {
  let url = `https://pokeapi.co/api/v2${pathname}`;
  if (query) {
    url += "?";
    for (const key in query) {
      url += `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}&`;
    }
    url = url.slice(0, -1);
  }
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error(await response.text());
};

export const getEndpoints = () => request<Record<string, string>>("/");
