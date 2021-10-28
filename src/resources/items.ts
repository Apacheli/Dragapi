// deno-lint-ignore-file camelcase

// https://pokeapi.co/docs/v2#items-section

import type { EvolutionChain } from "./evolution.ts";
import type { Version } from "./games.ts";
import type { Pokemon } from "./pokemon.ts";
import type {
  APIResource,
  Description,
  Effect,
  GenerationGameIndex,
  MachineVersionDetail,
  Name,
  NamedAPIResource,
  VerboseEffect,
  VersionGroupFlavorText,
} from "./utility.ts";

/** https://pokeapi.co/docs/v2#item */
export interface Item {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The price of this item in stores. */
  cost: number;
  /** The power of the move Fling when used with this item. */
  fling_power: number;
  /** The effect of the move Fling when used with this item. */
  fling_effect: NamedAPIResource<ItemFlingEffect>;
  /** A list of attributes this item has. */
  attributes: NamedAPIResource<ItemAttribute>[];
  /** The category of items this item falls into. */
  category: NamedAPIResource<ItemCategory>;
  /** The effect of this ability listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The flavor text of this ability listed in different languages. */
  flavor_text_entries: VersionGroupFlavorText[];
  /** A list of game indices relevent to this item by generation. */
  game_indices: GenerationGameIndex[];
  /** The name of this item listed in different languages. */
  names: Name[];
  /** A set of sprites used to depict this item in the game. */
  sprites: ItemSprites;
  /** A list of Pokémon that might be found in the wild holding this item. */
  held_by_pokemon: ItemHolderPokemon[];
  /** An evolution chain this item requires to produce a bay during mating. */
  baby_trigger_for: APIResource<EvolutionChain>;
  /** A list of the machines related to this item. */
  machines: MachineVersionDetail[];
}

export interface ItemSprites {
  /** The default depiction of this item. */
  default: string;
}

export interface ItemHolderPokemon {
  /** The Pokémon that holds this item. */
  pokemon: NamedAPIResource<Pokemon>;
  /** The details for the version that this item is held in by the Pokémon. */
  version_details: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
  /** How often this Pokémon holds this item in this version. */
  rarity: number;
  /** The version that this item is held in by the Pokémon. */
  version: NamedAPIResource<Version>;
}

/** https://pokeapi.co/docs/v2#item-attributes */
export interface ItemAttribute {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of items that have this attribute. */
  items: NamedAPIResource<Item>[];
  /** The name of this item attribute listed in different languages. */
  names: Name[];
  /** The description of this item attribute listed in different languages. */
  descriptions: Description[];
}

/** https://pokeapi.co/docs/v2#item-categories */
export interface ItemCategory {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of items that are a part of this category. */
  items: NamedAPIResource<Item>[];
  /** The name of this item category listed in different languages. */
  names: Name[];
  /** The pocket items in this category would be put in. */
  pocket: NamedAPIResource<ItemPocket>;
}

/** https://pokeapi.co/docs/v2#item-fling-effects */
export interface ItemFlingEffect {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The result of this fling effect listed in different languages. */
  effect_entries: Effect[];
  /** A list of items that have this fling effect. */
  items: NamedAPIResource<Item>[];
}

/** https://pokeapi.co/docs/v2#item-pockets */
export interface ItemPocket {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of item categories that are relevant to this item pocket. */
  categories: NamedAPIResource<ItemCategory>[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
