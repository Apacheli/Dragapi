// https://pokeapi.co/docs/v2#resource-listspagination-section

import type { NamedAPIResource } from "./utility.ts";

/** https://pokeapi.co/docs/v2#named */
export interface NamedAPIResourceList<T> {
  /** The total number of resources available from this API. */
  count: number;
  /** The URL for the next page in the list. */
  next: number;
  /** The URL for the previous page in the list. */
  previous: boolean;
  /** A list of named API resources. */
  results: NamedAPIResource<T>;
}
