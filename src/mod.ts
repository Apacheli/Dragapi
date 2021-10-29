import type { Berry, BerryFirmness, BerryFlavor } from "./resources/berries.ts";
import type {
  ContestEffect,
  ContestType,
  SuperContestEffect,
} from "./resources/contests.ts";
import type {
  EncounterCondition,
  EncounterConditionValue,
  EncounterMethod,
} from "./resources/encounters.ts";
import type {
  EvolutionChain,
  EvolutionTrigger,
} from "./resources/evolution.ts";
import type {
  Generation,
  Pokedex,
  Version,
  VersionGroup,
} from "./resources/games.ts";
import type {
  Item,
  ItemAttribute,
  ItemCategory,
  ItemFlingEffect,
  ItemPocket,
} from "./resources/items.ts";
import type {
  LocationArea,
  PalParkArea,
  Region,
} from "./resources/locations.ts";
import type { Machine } from "./resources/machines.ts";
import type {
  Move,
  MoveAilment,
  MoveBattleStyle,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
} from "./resources/moves.ts";
import type { NamedAPIResourceList } from "./resources/pagination.ts";
import type {
  Ability,
  Characteristic,
  EggGroup,
  Gender,
  GrowthRate,
  LocationAreaEncounter,
  Nature,
  PokeathlonStat,
  Pokemon,
  PokemonColor,
  PokemonForm,
  PokemonHabitat,
  PokemonShape,
  PokemonSpecies,
  Stat,
  Type,
} from "./resources/pokemon.ts";
import type { Language } from "./resources/utility.ts";

export * from "./resources/mod.ts";

export type Identifier = string | number;

export const request = async (endpoint: string) =>
  (await fetch(`https://pokeapi.co/api/v2${endpoint}`)).json();

export const getAbilityList = (): Promise<NamedAPIResourceList<Ability>> =>
  request("/ability");

export const getAbility = (ability: Identifier): Promise<Ability> =>
  request(`/ability/${ability}`);

export const getBerryList = (): Promise<NamedAPIResourceList<Berry>> =>
  request("/berry");

export const getBerry = (berry: Identifier): Promise<Berry> =>
  request(`/berry/${berry}`);

export const getBerryFirmnessList = (): Promise<
  NamedAPIResourceList<BerryFirmness>
> => request("/berry-firmness");

export const getBerryFirmness = (
  berryFirmness: Identifier,
): Promise<BerryFirmness> => request(`/berry-firmness/${berryFirmness}`);

export const getBerryFlavorList = (): Promise<
  NamedAPIResourceList<BerryFlavor>
> => request("/berry-flavor");

export const getBerryFlavor = (berryFlavor: Identifier): Promise<BerryFlavor> =>
  request(`/berry-flavor/${berryFlavor}`);

export const getCharacteristicList = (): Promise<
  NamedAPIResourceList<Characteristic>
> => request("/characteristic");

export const getCharacteristic = (
  characteristic: Identifier,
): Promise<Characteristic> => request(`/characteristic/${characteristic}`);

export const getContestEffectList = (): Promise<
  NamedAPIResourceList<ContestEffect>
> => request("/contest-effect");

export const getContestEffect = (
  contestEffect: Identifier,
): Promise<ContestEffect> => request(`/contest-effect/${contestEffect}`);

export const getContestTypeList = (): Promise<
  NamedAPIResourceList<ContestType>
> => request("/contest-type");

export const getContestType = (contestType: Identifier): Promise<ContestType> =>
  request(`/contest-type/${contestType}`);

export const getEggGroupList = (): Promise<NamedAPIResourceList<EggGroup>> =>
  request("/egg-group");

export const getEggGroup = (eggGroup: Identifier): Promise<EggGroup> =>
  request(`/egg-group/${eggGroup}`);

export const getEncounterConditionList = (): Promise<
  NamedAPIResourceList<EncounterCondition>
> => request("/encounter-condition");

export const getEncounterCondition = (
  encounterCondition: Identifier,
): Promise<EncounterCondition> =>
  request(`/encounter-condition/${encounterCondition}`);

export const getEncounterConditionValueList = (): Promise<
  NamedAPIResourceList<EncounterConditionValue>
> => request("/encounter-condition-value");

export const getEncounterConditionValue = (
  encounterConditionValue: Identifier,
): Promise<EncounterConditionValue> =>
  request(`/encounter-condition-value/${encounterConditionValue}`);

export const getEncounterMethodList = (): Promise<
  NamedAPIResourceList<EncounterMethod>
> => request("/encounter-method");

export const getEncounterMethod = (
  encounterMethod: Identifier,
): Promise<EncounterMethod> => request(`/encounter-method/${encounterMethod}`);

export const getEvolutionChainList = (): Promise<
  NamedAPIResourceList<EvolutionChain>
> => request("/evolution-chain");

export const getEvolutionChain = (
  evolutionChain: Identifier,
): Promise<EvolutionChain> => request(`/evolution-chain/${evolutionChain}`);

export const getEvolutionTriggerList = (): Promise<
  NamedAPIResourceList<EvolutionTrigger>
> => request("/evolution-trigger");

export const getEvolutionTrigger = (
  evolutionTrigger: Identifier,
): Promise<EvolutionTrigger> =>
  request(`/evolution-trigger/${evolutionTrigger}`);

export const getGenderList = (): Promise<NamedAPIResourceList<Gender>> =>
  request("/gender");

export const getGender = (gender: Identifier): Promise<Gender> =>
  request(`/gender/${gender}`);

export const getGenerationList = (): Promise<
  NamedAPIResourceList<Generation>
> => request("/generation");

export const getGeneration = (generation: Identifier): Promise<Generation> =>
  request(`/generation/${generation}`);

export const getGrowthRateList = (): Promise<
  NamedAPIResourceList<GrowthRate>
> => request("/growth-rate");

export const getGrowthRate = (growthRate: Identifier): Promise<GrowthRate> =>
  request(`/growth-rate/${growthRate}`);

export const getItemList = (): Promise<NamedAPIResourceList<Item>> =>
  request("/item");

export const getItem = (item: Identifier): Promise<Item> =>
  request(`/item/${item}`);

export const getItemAttributeList = (): Promise<
  NamedAPIResourceList<ItemAttribute>
> => request("/item-attribute");

export const getItemAttribute = (
  itemAttribute: Identifier,
): Promise<ItemAttribute> => request(`/item-attribute/${itemAttribute}`);

export const getItemCategoryList = (): Promise<
  NamedAPIResourceList<ItemCategory>
> => request("/item-category");

export const getItemCategory = (
  itemCategory: Identifier,
): Promise<ItemCategory> => request(`/item-category/${itemCategory}`);

export const getItemFlingEffectList = (): Promise<
  NamedAPIResourceList<ItemFlingEffect>
> => request("/item-fling-effect");

export const getItemFlingEffect = (
  itemFlingEffect: Identifier,
): Promise<ItemFlingEffect> => request(`/item-fling-effect/${itemFlingEffect}`);

export const getItemPocketList = (): Promise<
  NamedAPIResourceList<ItemPocket>
> => request("/item-pocket");

export const getItemPocket = (itemPocket: Identifier): Promise<ItemPocket> =>
  request(`/item-pocket/${itemPocket}`);

export const getLanguageList = (): Promise<NamedAPIResourceList<Language>> =>
  request("/language");

export const getLanguage = (language: Identifier): Promise<Language> =>
  request(`/language/${language}`);

export const getLocationList = (): Promise<NamedAPIResourceList<Location>> =>
  request("/location");

export const getLocation = (location: Identifier): Promise<Location> =>
  request(`/location/${location}`);

export const getLocationAreaList = (): Promise<
  NamedAPIResourceList<LocationArea>
> => request("/location-area");

export const getLocationArea = (
  locationArea: Identifier,
): Promise<LocationArea> => request(`/location-area/${locationArea}`);

export const getMachineList = (): Promise<NamedAPIResourceList<Machine>> =>
  request("/machine");

export const getMachine = (machine: Identifier): Promise<Machine> =>
  request(`/machine/${machine}`);

export const getMoveList = (): Promise<NamedAPIResourceList<Move>> =>
  request("/move");

export const getMove = (move: Identifier): Promise<Move> =>
  request(`/move/${move}`);

export const getMoveAilmentList = (): Promise<
  NamedAPIResourceList<MoveAilment>
> => request("/move-ailment");

export const getMoveAilment = (moveAilment: Identifier): Promise<MoveAilment> =>
  request(`/move-ailment/${moveAilment}`);

export const getMoveBattleStyleList = (): Promise<
  NamedAPIResourceList<MoveBattleStyle>
> => request("/move-battle-style");

export const getMoveBattleStyle = (
  moveBattleStyle: Identifier,
): Promise<MoveBattleStyle> => request(`/move-battle-style/${moveBattleStyle}`);

export const getMoveCategoryList = (): Promise<
  NamedAPIResourceList<MoveCategory>
> => request("/move-category");

export const getMoveCategory = (
  moveCategory: Identifier,
): Promise<MoveCategory> => request(`/move-category/${moveCategory}`);

export const getMoveDamageClassList = (): Promise<
  NamedAPIResourceList<MoveDamageClass>
> => request("/move-damage-class");

export const getMoveDamageClass = (
  moveDamageClass: Identifier,
): Promise<MoveDamageClass> => request(`/move-damage-class/${moveDamageClass}`);

export const getMoveLearnMethodList = (): Promise<
  NamedAPIResourceList<MoveLearnMethod>
> => request("/move-learn-method");

export const getMoveLearnMethod = (
  moveLearnMethod: Identifier,
): Promise<MoveLearnMethod> => request(`/move-learn-method/${moveLearnMethod}`);

export const getMoveTargetList = (): Promise<
  NamedAPIResourceList<MoveTarget>
> => request("/move-target");

export const getMoveTarget = (moveTarget: Identifier): Promise<MoveTarget> =>
  request(`/move-target/${moveTarget}`);

export const getNatureList = (): Promise<NamedAPIResourceList<Nature>> =>
  request("/nature");

export const getNature = (nature: Identifier): Promise<Nature> =>
  request(`/nature/${nature}`);

export const getPalParkAreaList = (): Promise<
  NamedAPIResourceList<PalParkArea>
> => request("/pal-park-area");

export const getPalParkArea = (palParkArea: Identifier): Promise<PalParkArea> =>
  request(`/pal-park-area/${palParkArea}`);

export const getPokeathlonStatList = (): Promise<
  NamedAPIResourceList<PokeathlonStat>
> => request("/pokeathlon-stat");

export const getPokeathlonStat = (
  pokeathlonStat: Identifier,
): Promise<PokeathlonStat> => request(`/pokeathlon-stat/${pokeathlonStat}`);

export const getPokedexList = (): Promise<NamedAPIResourceList<Pokedex>> =>
  request("/pokedex");

export const getPokedex = (pokedex: Identifier): Promise<Pokedex> =>
  request(`/pokedex/${pokedex}`);

export const getPokemonList = (): Promise<NamedAPIResourceList<Pokemon>> =>
  request("/pokemon");

export const getPokemon = (pokemon: Identifier): Promise<Pokemon> =>
  request(`/pokemon/${pokemon}`);

export const getPokemonColorList = (): Promise<
  NamedAPIResourceList<PokemonColor>
> => request("/pokemon-color");

export const getPokemonColor = (
  pokemonColor: Identifier,
): Promise<PokemonColor> => request(`/pokemon-color/${pokemonColor}`);

export const getPokemonFormList = (): Promise<
  NamedAPIResourceList<PokemonForm>
> => request("/pokemon-form");

export const getPokemonForm = (pokemonForm: Identifier): Promise<PokemonForm> =>
  request(`/pokemon-form/${pokemonForm}`);

export const getPokemonHabitatList = (): Promise<
  NamedAPIResourceList<PokemonHabitat>
> => request("/pokemon-habitat");

export const getPokemonHabitat = (
  pokemonHabitat: Identifier,
): Promise<PokemonHabitat> => request(`/pokemon-habitat/${pokemonHabitat}`);

export const getPokemonLocationArea = (
  pokemon: Identifier,
): Promise<LocationAreaEncounter> => request(`/pokemon/${pokemon}/encounters`);

export const getPokemonShapeList = (): Promise<
  NamedAPIResourceList<PokemonShape>
> => request("/pokemon-shape");

export const getPokemonShape = (
  pokemonShape: Identifier,
): Promise<PokemonShape> => request(`/pokemon-shape/${pokemonShape}`);

export const getPokemonSpeciesList = (): Promise<
  NamedAPIResourceList<PokemonSpecies>
> => request("/pokemon-species");

export const getPokemonSpecies = (
  pokemonSpecies: Identifier,
): Promise<PokemonSpecies> => request(`/pokemon-species/${pokemonSpecies}`);

export const getRegionList = (): Promise<NamedAPIResourceList<Region>> =>
  request("/region");

export const getRegion = (region: Identifier): Promise<Region> =>
  request(`/region/${region}`);

export const getStatList = (): Promise<NamedAPIResourceList<Stat>> =>
  request("/stat");

export const getStat = (stat: Identifier): Promise<Stat> =>
  request(`/stat/${stat}`);

export const getSuperContestEffectList = (): Promise<
  NamedAPIResourceList<SuperContestEffect>
> => request("/super-contest-effect");

export const getSuperContestEffect = (
  superContestEffect: Identifier,
): Promise<SuperContestEffect> =>
  request(`/super-contest-effect/${superContestEffect}`);

export const getTypeList = (): Promise<NamedAPIResourceList<Type>> =>
  request("/type");

export const getType = (type: Identifier): Promise<Type> =>
  request(`/type/${type}`);

export const getVersionList = (): Promise<NamedAPIResourceList<Version>> =>
  request("/version");

export const getVersion = (version: Identifier): Promise<Version> =>
  request(`/version/${version}`);

export const getVersionGroupList = (): Promise<
  NamedAPIResourceList<VersionGroup>
> => request("/version-group");

export const getVersionGroup = (
  versionGroup: Identifier,
): Promise<VersionGroup> => request(`/version-group/${versionGroup}`);
