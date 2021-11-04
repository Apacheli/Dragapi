import type {
  Ability,
  Berry,
  BerryFirmness,
  BerryFlavor,
  Characteristic,
  ContestEffect,
  ContestType,
  EggGroup,
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
  EvolutionChain,
  EvolutionTrigger,
  Gender,
  Generation,
  GrowthRate,
  Item,
  ItemAttribute,
  ItemCategory,
  ItemFlingEffect,
  ItemPocket,
  Language,
  Location,
  LocationArea,
  LocationAreaEncounter,
  Machine,
  Move,
  MoveAilment,
  MoveBattleStyle,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
  NamedAPIResourceList,
  Nature,
  PaginationOptions,
  PalParkArea,
  PokeathlonStat,
  Pokedex,
  Pokemon,
  PokemonColor,
  PokemonForm,
  PokemonHabitat,
  PokemonShape,
  PokemonSpecies,
  Region,
  Stat,
  SuperContestEffect,
  Type,
  Version,
  VersionGroup,
} from "./resources/mod.ts";

import { request } from "./request.ts";

export type Identifier = string | number;

export const abilityList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Ability>> => request("ability", query);

export const ability = (ability: Identifier): Promise<Ability> =>
  request(`ability/${ability}`);

export const berryList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Berry>> => request("berry", query);

export const berry = (berry: Identifier): Promise<Berry> =>
  request(`berry/${berry}`);

export const berryFirmnessList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<BerryFirmness>> =>
  request("berry-firmness", query);

export const berryFirmness = (
  berryFirmness: Identifier,
): Promise<BerryFirmness> => request(`berry-firmness/${berryFirmness}`);

export const berryFlavorList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<BerryFlavor>> => request("berry-flavor", query);

export const berryFlavor = (berryFlavor: Identifier): Promise<BerryFlavor> =>
  request(`berry-flavor/${berryFlavor}`);

export const characteristicList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Characteristic>> =>
  request("characteristic", query);

export const characteristic = (
  characteristic: Identifier,
): Promise<Characteristic> => request(`characteristic/${characteristic}`);

export const contestEffectList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ContestEffect>> =>
  request("contest-effect", query);

export const contestEffect = (
  contestEffect: Identifier,
): Promise<ContestEffect> => request(`contest-effect/${contestEffect}`);

export const contestTypeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ContestType>> => request("contest-type", query);

export const contestType = (contestType: Identifier): Promise<ContestType> =>
  request(`contest-type/${contestType}`);

export const eggGroupList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EggGroup>> => request("egg-group", query);

export const eggGroup = (eggGroup: Identifier): Promise<EggGroup> =>
  request(`egg-group/${eggGroup}`);

export const encounterConditionList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EncounterCondition>> =>
  request("encounter-condition", query);

export const encounterCondition = (
  encounterCondition: Identifier,
): Promise<EncounterCondition> =>
  request(`encounter-condition/${encounterCondition}`);

export const encounterConditionValueList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EncounterConditionValue>> =>
  request("encounter-condition-value", query);

export const encounterConditionValue = (
  encounterConditionValue: Identifier,
): Promise<EncounterConditionValue> =>
  request(`encounter-condition-value/${encounterConditionValue}`);

export const encounterMethodList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EncounterMethod>> =>
  request("encounter-method", query);

export const encounterMethod = (
  encounterMethod: Identifier,
): Promise<EncounterMethod> => request(`encounter-method/${encounterMethod}`);

export const evolutionChainList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EvolutionChain>> =>
  request("evolution-chain", query);

export const evolutionChain = (
  evolutionChain: Identifier,
): Promise<EvolutionChain> => request(`evolution-chain/${evolutionChain}`);

export const evolutionTriggerList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EvolutionTrigger>> =>
  request("evolution-trigger", query);

export const evolutionTrigger = (
  evolutionTrigger: Identifier,
): Promise<EvolutionTrigger> =>
  request(`evolution-trigger/${evolutionTrigger}`);

export const genderList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Gender>> => request("gender", query);

export const gender = (gender: Identifier): Promise<Gender> =>
  request(`gender/${gender}`);

export const generationList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Generation>> => request("generation", query);

export const generation = (generation: Identifier): Promise<Generation> =>
  request(`generation/${generation}`);

export const growthRateList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<GrowthRate>> => request("growth-rate", query);

export const growthRate = (growthRate: Identifier): Promise<GrowthRate> =>
  request(`growth-rate/${growthRate}`);

export const itemList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Item>> => request("item", query);

export const item = (item: Identifier): Promise<Item> =>
  request(`item/${item}`);

export const itemAttributeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemAttribute>> =>
  request("item-attribute", query);

export const itemAttribute = (
  itemAttribute: Identifier,
): Promise<ItemAttribute> => request(`item-attribute/${itemAttribute}`);

export const itemCategoryList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemCategory>> =>
  request("item-category", query);

export const itemCategory = (itemCategory: Identifier): Promise<ItemCategory> =>
  request(`item-category/${itemCategory}`);

export const itemFlingEffectList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemFlingEffect>> =>
  request("item-fling-effect", query);

export const itemFlingEffect = (
  itemFlingEffect: Identifier,
): Promise<ItemFlingEffect> => request(`item-fling-effect/${itemFlingEffect}`);

export const itemPocketList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemPocket>> => request("item-pocket", query);

export const itemPocket = (itemPocket: Identifier): Promise<ItemPocket> =>
  request(`item-pocket/${itemPocket}`);

export const languageList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Language>> => request("language", query);

export const language = (language: Identifier): Promise<Language> =>
  request(`language/${language}`);

export const locationList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Location>> => request("location", query);

export const location = (location: Identifier): Promise<Location> =>
  request(`location/${location}`);

export const locationAreaList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<LocationArea>> =>
  request("location-area", query);

export const locationArea = (locationArea: Identifier): Promise<LocationArea> =>
  request(`location-area/${locationArea}`);

export const machineList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Machine>> => request("machine", query);

export const machine = (machine: Identifier): Promise<Machine> =>
  request(`machine/${machine}`);

export const moveList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Move>> => request("move", query);

export const move = (move: Identifier): Promise<Move> =>
  request(`move/${move}`);

export const moveAilmentList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveAilment>> => request("move-ailment", query);

export const moveAilment = (moveAilment: Identifier): Promise<MoveAilment> =>
  request(`move-ailment/${moveAilment}`);

export const moveBattleStyleList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveBattleStyle>> =>
  request("move-battle-style", query);

export const moveBattleStyle = (
  moveBattleStyle: Identifier,
): Promise<MoveBattleStyle> => request(`move-battle-style/${moveBattleStyle}`);

export const moveCategoryList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveCategory>> =>
  request("move-category", query);

export const moveCategory = (moveCategory: Identifier): Promise<MoveCategory> =>
  request(`move-category/${moveCategory}`);

export const moveDamageClassList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveDamageClass>> =>
  request("move-damage-class", query);

export const moveDamageClass = (
  moveDamageClass: Identifier,
): Promise<MoveDamageClass> => request(`move-damage-class/${moveDamageClass}`);

export const moveLearnMethodList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveLearnMethod>> =>
  request("move-learn-method", query);

export const moveLearnMethod = (
  moveLearnMethod: Identifier,
): Promise<MoveLearnMethod> => request(`move-learn-method/${moveLearnMethod}`);

export const moveTargetList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveTarget>> => request("move-target", query);

export const moveTarget = (moveTarget: Identifier): Promise<MoveTarget> =>
  request(`move-target/${moveTarget}`);

export const natureList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Nature>> => request("nature", query);

export const nature = (nature: Identifier): Promise<Nature> =>
  request(`nature/${nature}`);

export const palParkAreaList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PalParkArea>> =>
  request("pal-park-area", query);

export const palParkArea = (palParkArea: Identifier): Promise<PalParkArea> =>
  request(`pal-park-area/${palParkArea}`);

export const pokeathlonStatList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokeathlonStat>> =>
  request("pokeathlon-stat", query);

export const pokeathlonStat = (
  pokeathlonStat: Identifier,
): Promise<PokeathlonStat> => request(`pokeathlon-stat/${pokeathlonStat}`);

export const pokedexList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Pokedex>> => request("pokedex", query);

export const pokedex = (pokedex: Identifier): Promise<Pokedex> =>
  request(`pokedex/${pokedex}`);

export const pokemonList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Pokemon>> => request("pokemon", query);

export const pokemon = (pokemon: Identifier): Promise<Pokemon> =>
  request(`pokemon/${pokemon}`);

export const pokemonColorList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonColor>> =>
  request("pokemon-color", query);

export const pokemonColor = (pokemonColor: Identifier): Promise<PokemonColor> =>
  request(`pokemon-color/${pokemonColor}`);

export const pokemonFormList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonForm>> => request("pokemon-form", query);

export const pokemonForm = (pokemonForm: Identifier): Promise<PokemonForm> =>
  request(`pokemon-form/${pokemonForm}`);

export const pokemonHabitatList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonHabitat>> =>
  request("pokemon-habitat", query);

export const pokemonHabitat = (
  pokemonHabitat: Identifier,
): Promise<PokemonHabitat> => request(`pokemon-habitat/${pokemonHabitat}`);

export const pokemonShapeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonShape>> =>
  request("pokemon-shape", query);

export const pokemonShape = (pokemonShape: Identifier): Promise<PokemonShape> =>
  request(`pokemon-shape/${pokemonShape}`);

export const pokemonSpeciesList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonSpecies>> =>
  request("pokemon-species", query);

export const pokemonSpecies = (
  pokemonSpecies: Identifier,
): Promise<PokemonSpecies> => request(`pokemon-species/${pokemonSpecies}`);

export const regionList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Region>> => request("region", query);

export const region = (region: Identifier): Promise<Region> =>
  request(`region/${region}`);

export const statList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Stat>> => request("stat", query);

export const stat = (stat: Identifier): Promise<Stat> =>
  request(`stat/${stat}`);

export const superContestEffectList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<SuperContestEffect>> =>
  request("super-contest-effect", query);

export const superContestEffect = (
  superContestEffect: Identifier,
): Promise<SuperContestEffect> =>
  request(`super-contest-effect/${superContestEffect}`);

export const typeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Type>> => request("type", query);

export const type = (type: Identifier): Promise<Type> =>
  request(`type/${type}`);

export const versionList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Version>> => request("version", query);

export const version = (version: Identifier): Promise<Version> =>
  request(`version/${version}`);

export const versionGroupList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<VersionGroup>> =>
  request("version-group", query);

export const versionGroup = (versionGroup: Identifier): Promise<VersionGroup> =>
  request(`version-group/${versionGroup}`);

// This endpoint exists, but it is not listed
export const pokemonLocationArea = (
  pokemon: Identifier,
): Promise<LocationAreaEncounter> => request(`/pokemon/${pokemon}/encounters`);
