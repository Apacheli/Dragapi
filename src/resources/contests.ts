// deno-lint-ignore-file camelcase

// https://pokeapi.co/docs/v2#contests-section

import type { BerryFlavor } from "./berries.ts";
import type { Move } from "./moves.ts";
import type {
  Effect,
  FlavorText,
  Language,
  NamedAPIResource,
} from "./utility.ts";

/** https://pokeapi.co/docs/v2#contest-types */
export interface ContestType {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The berry flavor that correlates with this contest type. */
  berry_flavor: NamedAPIResource<BerryFlavor>;
  /** The name of this contest type listed in different languages. */
  names: ContestName[];
}

export interface ContestName {
  /** The name for this contest. */
  name: string;
  /** The color associated with this contest's name. */
  color: string;
  /** The language that this name is in. */
  language: NamedAPIResource<Language>;
}

/** https://pokeapi.co/docs/v2#contest-effects */
export interface ContestEffect {
  /** The identifier for this resource. */
  id: number;
  /** The base number of hearts the user of this move gets. */
  appeal: number;
  /** The base number of hearts the user's opponent loses. */
  jam: number;
  /** The result of this contest effect listed in different languages. */
  effect_entries: Effect[];
  /** The flavor text of this contest effect listed in different languages. */
  flavor_text_entries: FlavorText[];
}

/** https://pokeapi.co/docs/v2#super-contest-effects */
export interface SuperContestEffect {
  /** The identifier for this resource. */
  id: number;
  /** The level of appeal this super contest effect has. */
  appeal: number;
  /** The flavor text of this super contest effect listed in different languages. */
  flavor_text_entries: FlavorText[];
  /** A list of moves that have the effect when used in super contests. */
  moves: NamedAPIResource<Move>[];
}
