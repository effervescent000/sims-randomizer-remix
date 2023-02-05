export interface GenericObject {
  [key: string]: string;
}

export interface GenericNumberedObject {
  [key: number]: number;
}

export interface ITrait {
  conflicts?: ETraits[];
  requires?: EPacks[];
  minAge?: EAges;
  aspirationWeights?: { key: EAspirations; value: number }[];
}

export interface IAspiration {
  requires?: EPacks[];
}

export interface ICareer {
  requires?: EPacks[];
}

export interface ISelectOptions {
  name: string;
  value: string;
}

export interface ISim {
  age: number;
  toddlerTrait?: EToddlerTraits;
  traits?: ETraits[];
  aspiration?: number;
  career?: number;
}

// ENUMS

export enum EPacks {
  CityLiving,
  CottageLiving,
  DiscoverUniversity,
  DreamHomeDecorator,
  EcoLifestyle,
  GetFamous,
  GetToWork,
  GetTogether,
  HighSchoolYears,
  IslandLiving,
  JungleAdventure,
  NiftyKnitting,
  OutdoorRetreat,
  Parenthood,
  Pets,
  RealmOfMagic,
  Seasons,
  SnowyEscape,
  SpaDay,
  StrangerVille,
  Vampires,
  Werewolves,
}

export enum EAges {
  Baby,
  Toddler,
  Child,
  Teen,
  Adult,
}

export enum EToddlerTraits {
  Angelic,
  Charmer,
  Clingy,
  Fussy,
  independent,
  inquisitive,
  Silly,
  Wild,
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

export enum EAspirations {
  Academic,
  AnglingAce,
  ArchaeologyScholar,
  BeachLife,
  BestsellingAuthor,
  BigHappyFamily,
  Bodybuilder,
  ChiefOfMischief,
  CityNative,
  ComputerWhiz,
  CountryCaretaker,
  Curator,
  EcoInnovator,
  ExtremeSportsEnthusiast,
  FabulouslyFilthy,
  FabulouslyWealthy,
  FreelanceBotanist,
  FriendOfTheAnimals,
  FriendOfTheWorld,
  GoodVampire,
  InnerPeace,
  JokeStar,
  JungleExplorer,
  LeaderOfThePack,
  LordOfTheKnits,
  MansionBaron,
  MasterActor,
  MasterChef,
  MasterMaker,
  MasterMixologist,
  MasterVampire,
  MtKomorebiSightseer,
  MusicalGenius,
  NerdBrain,
  OutdoorEnthusiast,
  PainterExtraordinaire,
  PartyAnimal,
  PerfectlyPristine,
  PublicEnemy,
  PurveyorOfPotions,
  RenaissanceSim,
  SelfCareSpecialist,
  SerialRomantic,
  Soulmate,
  SpellcraftAndSorcery,
  StrangerVilleMystery,
  SuccessfulLineage,
  SuperParent,
  VampireFamily,
  WorldFamousCelebrity,
  ZenGuru,
}

export enum ECareers {
  Actor,
  AstronautInterstellarSmuggler,
  AthleteBodybuilder,
  AthleteProfessionalAthlete,
  BusinessInvestor,
  BusinessManagement,
  CivilDesignerCivicPlanner,
  CivilDesignerGreenTechnician,
  ConservationistEnvironmentalManager,
  ConservationistMarineBiologist,
  CriminalBoss,
  CriminalOracle,
  CriticArtsCritic,
  CriticFoodCritic,
  CulinaryChef,
  CulinaryMixologist,
  Detective,
  Doctor,
  EducationAdministrator,
  EducationProfessor,
  EngineerComputerEngineer,
  EngineerMechanicalEngineer,
  EntertainerComedian,
  EntertainerMusician,
  Freelancer,
  GardenerBotanist,
  GardenerFloralDesigner,
  InteriorDecorator,
  LawJudge,
  LawPrivateAttorney,
  MilitaryCovertOperator,
  MilitaryOfficer,
  PainterMasterOfTheReal,
  PainterPatronOfTheArts,
  PoliticianCharityOrganizer,
  PoliticianPolitician,
  SalarypersonExpert,
  SalarypersonSupervisor,
  Scientist,
  SecretAgentDiamondAgent,
  SecretAgentVillain,
  SelfEmployed,
  SocialMediaInternetPersonality,
  SocialMediaPublicRelations,
  StyleInfluencerStylist,
  StyleInfluencerTrendsetter,
  TechGuruESportGamer,
  TechGuruStartUpEntrepreneur,
  WriterAuthor,
  WriterJournalist,
  AstronautSpaceRanger,
}
