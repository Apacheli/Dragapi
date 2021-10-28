// deno-lint-ignore-file camelcase

// https://pokeapi.co/docs/v2#machines-section

import type { VersionGroup } from "./games.ts";
import type { Item } from "./items.ts";
import type { Move } from "./moves.ts";
import type { NamedAPIResource } from "./utility.ts";

/** https://pokeapi.co/docs/v2#machines */
export interface Machine {
  /** The identifier for this resource. */
  id: number;
  /** The TM or HM item that corresponds to this machine. */
  item: NamedAPIResource<Item>;
  /** The move that is taught by this machine. */
  move: NamedAPIResource<Move>;
  /** The version group that this machine applies to. */
  version_group: NamedAPIResource<VersionGroup>;
}
