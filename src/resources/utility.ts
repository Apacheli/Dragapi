// deno-lint-ignore-file camelcase

// https://pokeapi.co/docs/v2#utility-section

import type { EncounterConditionValue, EncounterMethod } from "./encounters.ts";
import type { Generation, Version, VersionGroup } from "./games.ts";
import type { Machine } from "./machines.ts";

/** https://pokeapi.co/docs/v2#languages */
export interface Language {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Whether or not the games are published in this language. */
  official: boolean;
  /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
  iso639: string;
  /** The two-letter code of the language. Note that it is not unique. */
  iso3166: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
}

// https://pokeapi.co/docs/v2#common-models

export interface APIResource<T> {
  /** The URL of the referenced resource. */
  url: string;
}

export interface Description {
  /** The localized description for an API resource in a specific language. */
  description: string;
  /** The language this name is in. */
  language: NamedAPIResource<Language>;
}

export interface Effect {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource<Language>;
}

export interface Encounter {
  /** The lowest level the Pokémon could be encountered at. */
  min_level: number;
  /** The highest level the Pokémon could be encountered at. */
  max_Level: number;
  /** A list of condition values that must be in effect for this encounter to occur. */
  condition_values: NamedAPIResource<EncounterConditionValue>;
  /** Percent chance that this encounter will occur. */
  chance: number;
  /** The method by which this encounter happens. */
  method: NamedAPIResource<EncounterMethod>;
}

export interface FlavorText {
  /** The localized flavor text for an API resource in a specific language. */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResource<Language>;
  /** The game version this flavor text is extracted from. */
  version: NamedAPIResource<Version>;
}

export interface GenerationGameIndex {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The generation relevent to this game index. */
  generation: NamedAPIResource<Generation>;
}

export interface MachineVersionDetail {
  /** The machine that teaches a move from an item. */
  machine: APIResource<Machine>;
  /** The version group of this specific machine. */
  version_group: NamedAPIResource<VersionGroup>;
}

export interface Name {
  /** The localized name for an API resource in a specific language. */
  name: string;
  /** The language this name is in. */
  language: NamedAPIResource<Language>;
}

export interface NamedAPIResource<T> {
  /** The name of the referenced resource. */
  name: string;
  /** The URL of the referenced resource. */
  url: string;
}

export interface VerboseEffect {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The localized effect text in brief. */
  short_effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource<Language>;
}

export interface VersionEncounterDetail {
  /** The game version this encounter happens in. */
  version: NamedAPIResource<Version>;
  /** The total percentage of all encounter potential. */
  max_chance: number;
  /** A list of encounters and their specifics. */
  encounter_details: Encounter[];
}

export interface VersionGameIndex {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The version relevent to this game index. */
  version: NamedAPIResource<Version>;
}

export interface VersionGroupFlavorText {
  /** The localized name for an API resource in a specific language. */
  text: string;
  /** The language this name is in. */
  language: NamedAPIResource<Language>;
  /** The version group which uses this flavor text. */
  version_group: NamedAPIResource<VersionGroup>;
}
