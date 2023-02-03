export interface GenericObject {
  [key: string]: string;
}

export interface ITrait {
  conflicts?: ETraits[];
  requires?: EPacks[];
  minAge?: EAges;
}

export interface ISelectOptions {
  name: string;
  value: string;
}

export interface ISim {
  age: number;
  toddlerTrait?: string;
  traits?: string[];
  aspiration?: string;
  career?: string;
}

// ENUMS

export enum EPacks {
  CityLiving,
  CottageLiving,
  EcoLifestyle,
  GetFamous,
  GetTogether,
  HighSchoolYears,
  IslandLiving,
  OutdoorRetreat,
  Pets,
  SnowyEscape,
  SpaDay,
  StrangerVille,
}

export enum EAges {
  Baby,
  Toddler,
  Child,
  Teen,
  Adult,
}

export enum ETraits {
  Adventurous,
  Active,
  Ambitious,
  AnimalEnthusiast,
  ArtLover,
  Bookworm,
  Bro,
  CatLover,
  Cheerful,
  ChildOfTheIslands,
  ChildOfTheOcean,
  Childish,
  Clumsy,
  Creative,
  DanceMachine,
  DogLover,
  Erratic,
  Evil,
  FamilyOriented,
  Foodie,
  Freegan,
  Geek,
  Genius,
  Gloomy,
  Glutton,
  Good,
  Goofball,
  GreenFiend,
  HatesChildren,
  HighMaintenance,
  HotHeaded,
  Insider,
  Jealous,
  Kleptomaniac,
  LactoseIntolerant,
  Lazy,
  Loner,
  LovesOutdoors,
  Loyal,
  Maker,
  Materialistic,
  Mean,
  MusicLover,
  Neat,
  Noncommittal,
  Overachiever,
  Outgoing,
  Paranoid,
  PartyAnimal,
  Perfectionist,
  Proper,
  RecycleDisciple,
  Romantic,
  SelfAbsorbed,
  SelfAssured,
  Slob,
  Snob,
  SociallyAwkward,
  Squeamish,
  Vegetarian,
  Unflirty,
}
