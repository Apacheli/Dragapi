import { request } from "./request.ts";
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

export * from "./resources/mod.ts";

export type Identifier = string | number;

export const getAbilityList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Ability>> => request("ability", query);

export const getAbility = (ability: Identifier) =>
  request(`ability/${ability}`);

export const getBerryList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Berry>> => request("berry", query);

export const getBerry = (berry: Identifier) => request(`berry/${berry}`);

export const getBerryFirmnessList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<BerryFirmness>> =>
  request("berry-firmness", query);

export const getBerryFirmness = (berryFirmness: Identifier) =>
  request(`berry-firmness/${berryFirmness}`);

export const getBerryFlavorList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<BerryFlavor>> => request("berry-flavor", query);

export const getBerryFlavor = (berryFlavor: Identifier) =>
  request(`berry-flavor/${berryFlavor}`);

export const getCharacteristicList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Characteristic>> =>
  request("characteristic", query);

export const getCharacteristic = (characteristic: Identifier) =>
  request(`characteristic/${characteristic}`);

export const getContestEffectList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ContestEffect>> =>
  request("contest-effect", query);

export const getContestEffect = (contestEffect: Identifier) =>
  request(`contest-effect/${contestEffect}`);

export const getContestTypeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ContestType>> => request("contest-type", query);

export const getContestType = (contestType: Identifier) =>
  request(`contest-type/${contestType}`);

export const getEggGroupList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EggGroup>> => request("egg-group", query);

export const getEggGroup = (eggGroup: Identifier) =>
  request(`egg-group/${eggGroup}`);

export const getEncounterConditionList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EncounterCondition>> =>
  request("encounter-condition", query);

export const getEncounterCondition = (encounterCondition: Identifier) =>
  request(`encounter-condition/${encounterCondition}`);

export const getEncounterConditionValueList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EncounterConditionValue>> =>
  request("encounter-condition-value", query);

export const getEncounterConditionValue = (
  encounterConditionValue: Identifier,
) => request(`encounter-condition-value/${encounterConditionValue}`);

export const getEncounterMethodList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EncounterMethod>> =>
  request("encounter-method", query);

export const getEncounterMethod = (encounterMethod: Identifier) =>
  request(`encounter-method/${encounterMethod}`);

export const getEvolutionChainList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EvolutionChain>> =>
  request("evolution-chain", query);

export const getEvolutionChain = (evolutionChain: Identifier) =>
  request(`evolution-chain/${evolutionChain}`);

export const getEvolutionTriggerList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<EvolutionTrigger>> =>
  request("evolution-trigger", query);

export const getEvolutionTrigger = (evolutionTrigger: Identifier) =>
  request(`evolution-trigger/${evolutionTrigger}`);

export const getGenderList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Gender>> => request("gender", query);

export const getGender = (gender: Identifier) => request(`gender/${gender}`);

export const getGenerationList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Generation>> => request("generation", query);

export const getGeneration = (generation: Identifier) =>
  request(`generation/${generation}`);

export const getGrowthRateList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<GrowthRate>> => request("growth-rate", query);

export const getGrowthRate = (growthRate: Identifier) =>
  request(`growth-rate/${growthRate}`);

export const getItemList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Item>> => request("item", query);

export const getItem = (item: Identifier) => request(`item/${item}`);

export const getItemAttributeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemAttribute>> =>
  request("item-attribute", query);

export const getItemAttribute = (itemAttribute: Identifier) =>
  request(`item-attribute/${itemAttribute}`);

export const getItemCategoryList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemCategory>> =>
  request("item-category", query);

export const getItemCategory = (itemCategory: Identifier) =>
  request(`item-category/${itemCategory}`);

export const getItemFlingEffectList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemFlingEffect>> =>
  request("item-fling-effect", query);

export const getItemFlingEffect = (itemFlingEffect: Identifier) =>
  request(`item-fling-effect/${itemFlingEffect}`);

export const getItemPocketList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<ItemPocket>> => request("item-pocket", query);

export const getItemPocket = (itemPocket: Identifier) =>
  request(`item-pocket/${itemPocket}`);

export const getLanguageList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Language>> => request("language", query);

export const getLanguage = (language: Identifier) =>
  request(`language/${language}`);

export const getLocationList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Location>> => request("location", query);

export const getLocation = (location: Identifier) =>
  request(`location/${location}`);

export const getLocationAreaList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<LocationArea>> =>
  request("location-area", query);

export const getLocationArea = (locationArea: Identifier) =>
  request(`location-area/${locationArea}`);

export const getMachineList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Machine>> => request("machine", query);

export const getMachine = (machine: Identifier) =>
  request(`machine/${machine}`);

export const getMoveList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Move>> => request("move", query);

export const getMove = (move: Identifier) => request(`move/${move}`);

export const getMoveAilmentList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveAilment>> => request("move-ailment", query);

export const getMoveAilment = (moveAilment: Identifier) =>
  request(`move-ailment/${moveAilment}`);

export const getMoveBattleStyleList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveBattleStyle>> =>
  request("move-battle-style", query);

export const getMoveBattleStyle = (moveBattleStyle: Identifier) =>
  request(`move-battle-style/${moveBattleStyle}`);

export const getMoveCategoryList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveCategory>> =>
  request("move-category", query);

export const getMoveCategory = (moveCategory: Identifier) =>
  request(`move-category/${moveCategory}`);

export const getMoveDamageClassList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveDamageClass>> =>
  request("move-damage-class", query);

export const getMoveDamageClass = (moveDamageClass: Identifier) =>
  request(`move-damage-class/${moveDamageClass}`);

export const getMoveLearnMethodList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveLearnMethod>> =>
  request("move-learn-method", query);

export const getMoveLearnMethod = (moveLearnMethod: Identifier) =>
  request(`move-learn-method/${moveLearnMethod}`);

export const getMoveTargetList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<MoveTarget>> => request("move-target", query);

export const getMoveTarget = (moveTarget: Identifier) =>
  request(`move-target/${moveTarget}`);

export const getNatureList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Nature>> => request("nature", query);

export const getNature = (nature: Identifier) => request(`nature/${nature}`);

export const getPalParkAreaList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PalParkArea>> =>
  request("pal-park-area", query);

export const getPalParkArea = (palParkArea: Identifier) =>
  request(`pal-park-area/${palParkArea}`);

export const getPokeathlonStatList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokeathlonStat>> =>
  request("pokeathlon-stat", query);

export const getPokeathlonStat = (pokeathlonStat: Identifier) =>
  request(`pokeathlon-stat/${pokeathlonStat}`);

export const getPokedexList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Pokedex>> => request("pokedex", query);

export const getPokedex = (pokedex: Identifier) =>
  request(`pokedex/${pokedex}`);

export const getPokemonList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Pokemon>> => request("pokemon", query);

export const getPokemon = (pokemon: Identifier) =>
  request(`pokemon/${pokemon}`);

export const getPokemonColorList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonColor>> =>
  request("pokemon-color", query);

export const getPokemonColor = (pokemonColor: Identifier) =>
  request(`pokemon-color/${pokemonColor}`);

export const getPokemonFormList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonForm>> => request("pokemon-form", query);

export const getPokemonForm = (pokemonForm: Identifier) =>
  request(`pokemon-form/${pokemonForm}`);

export const getPokemonHabitatList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonHabitat>> =>
  request("pokemon-habitat", query);

export const getPokemonHabitat = (pokemonHabitat: Identifier) =>
  request(`pokemon-habitat/${pokemonHabitat}`);

export const getPokemonShapeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonShape>> =>
  request("pokemon-shape", query);

export const getPokemonShape = (pokemonShape: Identifier) =>
  request(`pokemon-shape/${pokemonShape}`);

export const getPokemonSpeciesList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<PokemonSpecies>> =>
  request("pokemon-species", query);

export const getPokemonSpecies = (pokemonSpecies: Identifier) =>
  request(`pokemon-species/${pokemonSpecies}`);

export const getRegionList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Region>> => request("region", query);

export const getRegion = (region: Identifier) => request(`region/${region}`);

export const getStatList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Stat>> => request("stat", query);

export const getStat = (stat: Identifier) => request(`stat/${stat}`);

export const getSuperContestEffectList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<SuperContestEffect>> =>
  request("super-contest-effect", query);

export const getSuperContestEffect = (superContestEffect: Identifier) =>
  request(`super-contest-effect/${superContestEffect}`);

export const getTypeList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Type>> => request("type", query);

export const getType = (type: Identifier) => request(`type/${type}`);

export const getVersionList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<Version>> => request("version", query);

export const getVersion = (version: Identifier) =>
  request(`version/${version}`);

export const getVersionGroupList = (
  query?: PaginationOptions,
): Promise<NamedAPIResourceList<VersionGroup>> =>
  request("version-group", query);

export const getVersionGroup = (versionGroup: Identifier) =>
  request(`version-group/${versionGroup}`);

// Unlisted endpoints

export const getPokemonLocationArea = (
  pokemon: Identifier,
): Promise<LocationAreaEncounter> => request(`/pokemon/${pokemon}/encounters`);

export * from "./get_endpoints.ts";
