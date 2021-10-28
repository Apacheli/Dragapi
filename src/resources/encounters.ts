// https://pokeapi.co/docs/v2#encounters-section

import type { Name, NamedAPIResource } from "./utility.ts";

/** https://pokeapi.co/docs/v2#encounter-methods */
export interface EncounterMethod {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A good value for sorting. */
  order: number;
  /** The name of this resource listed in different languages. */
  names: Name[];
}

/** https://pokeapi.co/docs/v2#encounter-conditions */
export interface EncounterCondition {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of possible values for this encounter condition. */
  values: NamedAPIResource<EncounterConditionValue>[];
}

/** https://pokeapi.co/docs/v2#encounter-condition-values */
export interface EncounterConditionValue {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The condition this encounter condition value pertains to. */
  condition: NamedAPIResource<EncounterCondition>;
  /** The name of this resource listed in different languages. */
  names: Name[];
}
