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
  LocationArea,
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

export const getAbility = (ability: string | number) =>
  request<Ability>(`/ability/${ability}`);

export const getAbilityList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Ability>>("/ability", query);

export const getBerry = (berry: string | number) =>
  request<Berry>(`/berry/${berry}`);

export const getBerryList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Berry>>("/berry", query);

export const getBerryFirmness = (berryFirmness: string | number) =>
  request<BerryFirmness>(`/berry-firmness/${berryFirmness}`);

export const getBerryFirmnessList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<BerryFirmness>>("/berry-firmness", query);

export const getBerryFlavor = (berryFlavor: string | number) =>
  request<BerryFlavor>(`/berry-flavor/${berryFlavor}`);

export const getBerryFlavorList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<BerryFlavor>>("/berry-flavor", query);

export const getCharacteristic = (characteristic: string | number) =>
  request<Characteristic>(`/characteristic/${characteristic}`);

export const getCharacteristicList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Characteristic>>("/characteristic", query);

export const getContestEffect = (contestEffect: string | number) =>
  request<ContestEffect>(`/contest-effect/${contestEffect}`);

export const getContestEffectList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<ContestEffect>>("/contest-effect", query);

export const getContestType = (contestType: string | number) =>
  request<ContestType>(`/contest-type/${contestType}`);

export const getContestTypeList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<ContestType>>("/contest-type", query);

export const getEggGroup = (eggGroup: string | number) =>
  request<EggGroup>(`/egg-group/${eggGroup}`);

export const getEggGroupList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<EggGroup>>("/egg-group", query);

export const getEncounterCondition = (encounterCondition: string | number) =>
  request<EncounterCondition>(`/encounter-condition/${encounterCondition}`);

export const getEncounterConditionList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<EncounterCondition>>(
    "/encounter-condition",
    query,
  );

export const getEncounterConditionValue = (
  encounterConditionValue: string | number,
) =>
  request<EncounterConditionValue>(
    `/encounter-condition-value/${encounterConditionValue}`,
  );

export const getEncounterConditionValueList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<EncounterConditionValue>>(
    "/encounter-condition-value",
    query,
  );

export const getEncounterMethod = (encounterMethod: string | number) =>
  request<EncounterMethod>(`/encounter-method/${encounterMethod}`);

export const getEncounterMethodList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<EncounterMethod>>("/encounter-method", query);

export const getEvolutionChain = (evolutionChain: string | number) =>
  request<EvolutionChain>(`/evolution-chain/${evolutionChain}`);

export const getEvolutionChainList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<EvolutionChain>>("/evolution-chain", query);

export const getEvolutionTrigger = (evolutionTrigger: string | number) =>
  request<EvolutionTrigger>(`/evolution-trigger/${evolutionTrigger}`);

export const getEvolutionTriggerList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<EvolutionTrigger>>("/evolution-trigger", query);

export const getGender = (gender: string | number) =>
  request<Gender>(`/gender/${gender}`);

export const getGenderList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Gender>>("/gender", query);

export const getGeneration = (generation: string | number) =>
  request<Generation>(`/generation/${generation}`);

export const getGenerationList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Generation>>("/generation", query);

export const getGrowthRate = (growthRate: string | number) =>
  request<GrowthRate>(`/growth-rate/${growthRate}`);

export const getGrowthRateList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<GrowthRate>>("/growth-rate", query);

export const getItem = (item: string | number) =>
  request<Item>(`/item/${item}`);

export const getItemList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Item>>("/item", query);

export const getItemAttribute = (itemAttribute: string | number) =>
  request<ItemAttribute>(`/item-attribute/${itemAttribute}`);

export const getItemAttributeList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<ItemAttribute>>("/item-attribute", query);

export const getItemCategory = (itemCategory: string | number) =>
  request<ItemCategory>(`/item-category/${itemCategory}`);

export const getItemCategoryList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<ItemCategory>>("/item-category", query);

export const getItemFlingEffect = (itemFlingEffect: string | number) =>
  request<ItemFlingEffect>(`/item-fling-effect/${itemFlingEffect}`);

export const getItemFlingEffectList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<ItemFlingEffect>>("/item-fling-effect", query);

export const getItemPocket = (itemPocket: string | number) =>
  request<ItemPocket>(`/item-pocket/${itemPocket}`);

export const getItemPocketList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<ItemPocket>>("/item-pocket", query);

export const getLanguage = (language: string | number) =>
  request<Language>(`/language/${language}`);

export const getLanguageList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Language>>("/language", query);

export const getLocation = (location: string | number) =>
  request<Location>(`/location/${location}`);

export const getLocationList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Location>>("/location", query);

export const getLocationArea = (locationArea: string | number) =>
  request<LocationArea>(`/location-area/${locationArea}`);

export const getLocationAreaList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<LocationArea>>("/location-area", query);

export const getMachine = (machine: string | number) =>
  request<Machine>(`/machine/${machine}`);

export const getMachineList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Machine>>("/machine", query);

export const getMove = (move: string | number) =>
  request<Move>(`/move/${move}`);

export const getMoveList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Move>>("/move", query);

export const getMoveAilment = (moveAilment: string | number) =>
  request<MoveAilment>(`/move-ailment/${moveAilment}`);

export const getMoveAilmentList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<MoveAilment>>("/move-ailment", query);

export const getMoveBattleStyle = (moveBattleStyle: string | number) =>
  request<MoveBattleStyle>(`/move-battle-style/${moveBattleStyle}`);

export const getMoveBattleStyleList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<MoveBattleStyle>>("/move-battle-style", query);

export const getMoveCategory = (moveCategory: string | number) =>
  request<MoveCategory>(`/move-category/${moveCategory}`);

export const getMoveCategoryList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<MoveCategory>>("/move-category", query);

export const getMoveDamageClass = (moveDamageClass: string | number) =>
  request<MoveDamageClass>(`/move-damage-class/${moveDamageClass}`);

export const getMoveDamageClassList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<MoveDamageClass>>("/move-damage-class", query);

export const getMoveLearnMethod = (moveLearnMethod: string | number) =>
  request<MoveLearnMethod>(`/move-learn-method/${moveLearnMethod}`);

export const getMoveLearnMethodList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<MoveLearnMethod>>("/move-learn-method", query);

export const getMoveTarget = (moveTarget: string | number) =>
  request<MoveTarget>(`/move-target/${moveTarget}`);

export const getMoveTargetList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<MoveTarget>>("/move-target", query);

export const getNature = (nature: string | number) =>
  request<Nature>(`/nature/${nature}`);

export const getNatureList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Nature>>("/nature", query);

export const getPalParkArea = (palParkArea: string | number) =>
  request<PalParkArea>(`/pal-park-area/${palParkArea}`);

export const getPalParkAreaList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PalParkArea>>("/pal-park-area", query);

export const getPokeathlonStat = (pokeathlonStat: string | number) =>
  request<PokeathlonStat>(`/pokeathlon-stat/${pokeathlonStat}`);

export const getPokeathlonStatList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PokeathlonStat>>("/pokeathlon-stat", query);

export const getPokedex = (pokedex: string | number) =>
  request<Pokedex>(`/pokedex/${pokedex}`);

export const getPokedexList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Pokedex>>("/pokedex", query);

export const getPokemon = (pokemon: string | number) =>
  request<Pokemon>(`/pokemon/${pokemon}`);

export const getPokemonList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Pokemon>>("/pokemon", query);

export const getPokemonColor = (pokemonColor: string | number) =>
  request<PokemonColor>(`/pokemon-color/${pokemonColor}`);

export const getPokemonColorList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PokemonColor>>("/pokemon-color", query);

export const getPokemonForm = (pokemonForm: string | number) =>
  request<PokemonForm>(`/pokemon-form/${pokemonForm}`);

export const getPokemonFormList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PokemonForm>>("/pokemon-form", query);

export const getPokemonHabitat = (pokemonHabitat: string | number) =>
  request<PokemonHabitat>(`/pokemon-habitat/${pokemonHabitat}`);

export const getPokemonHabitatList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PokemonHabitat>>("/pokemon-habitat", query);

export const getPokemonShape = (pokemonShape: string | number) =>
  request<PokemonShape>(`/pokemon-shape/${pokemonShape}`);

export const getPokemonShapeList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PokemonShape>>("/pokemon-shape", query);

export const getPokemonSpecies = (pokemonSpecies: string | number) =>
  request<PokemonSpecies>(`/pokemon-species/${pokemonSpecies}`);

export const getPokemonSpeciesList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<PokemonSpecies>>("/pokemon-species", query);

export const getRegion = (region: string | number) =>
  request<Region>(`/region/${region}`);

export const getRegionList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Region>>("/region", query);

export const getStat = (stat: string | number) =>
  request<Stat>(`/stat/${stat}`);

export const getStatList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Stat>>("/stat", query);

export const getSuperContestEffect = (superContestEffect: string | number) =>
  request<SuperContestEffect>(`/super-contest-effect/${superContestEffect}`);

export const getSuperContestEffectList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<SuperContestEffect>>(
    "/super-contest-effect",
    query,
  );

export const getType = (type: string | number) =>
  request<Type>(`/type/${type}`);

export const getTypeList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Type>>("/type", query);

export const getVersion = (version: string | number) =>
  request<Version>(`/version/${version}`);

export const getVersionList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<Version>>("/version", query);

export const getVersionGroup = (versionGroup: string | number) =>
  request<VersionGroup>(`/version-group/${versionGroup}`);

export const getVersionGroupList = (query?: PaginationOptions) =>
  request<NamedAPIResourceList<VersionGroup>>("/version-group", query);
