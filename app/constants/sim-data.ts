import type {
  GenericNumberedObject,
  GenericObject,
  IAspiration,
  ICareer,
  ISelectOptions,
  ITrait,
} from "~/types/interfaces";
import { ECareers } from "~/types/interfaces";
import { EAspirations } from "~/types/interfaces";
import { EAges, EPacks, ETraits } from "~/types/interfaces";
import { humanizeKey } from "~/utils";
import { WEIGHTS } from "./constants";

export const AGES = ["Baby", "Toddler", "Child", "Teen", "YA+"];

export const TODDLER_TRAITS: GenericObject[] = [
  { key: "angelic" },
  { key: "charmer" },
  { key: "clingy" },
  { key: "fussy" },
  { key: "independent" },
  { key: "inquisitive" },
  { key: "silly" },
  { key: "wild" },
];

export const TRAITS: { [key: number]: ITrait } = {
  [ETraits.Adventurous]: {
    requires: [EPacks.SnowyEscape],
  },
  [ETraits.Active]: {
    conflicts: [ETraits.Lazy],
    aspirationWeights: [
      {
        key: EAspirations.Bodybuilder,
        value: 2,
      },
      { key: EAspirations.ExtremeSportsEnthusiast, value: 1 },
    ],
  },
  [ETraits.Ambitious]: {
    conflicts: [ETraits.Lazy, ETraits.Freegan],
    minAge: EAges.Adult,
  },
  [ETraits.AnimalEnthusiast]: { requires: [EPacks.CottageLiving] },
  [ETraits.ArtLover]: {},
  [ETraits.Bookworm]: {},
  [ETraits.Bro]: { minAge: EAges.Teen },
  [ETraits.CatLover]: {
    requires: [EPacks.Pets],
  },
  [ETraits.Cheerful]: { conflicts: [ETraits.Gloomy, ETraits.HotHeaded] },
  [ETraits.ChildOfTheIslands]: {
    requires: [EPacks.IslandLiving],
  },
  [ETraits.ChildOfTheOcean]: {
    requires: [EPacks.IslandLiving],
  },
  [ETraits.Childish]: {
    conflicts: [ETraits.Snob, ETraits.Evil, ETraits.HatesChildren],
    minAge: EAges.Teen,
  },
  [ETraits.Clumsy]: {
    minAge: EAges.Teen,
    conflicts: [ETraits.Maker],
  },
  [ETraits.Creative]: {},
  [ETraits.DanceMachine]: {
    requires: [EPacks.GetTogether],
  },
  [ETraits.DogLover]: {
    requires: [EPacks.Pets],
  },
  [ETraits.Erratic]: {},
  [ETraits.Evil]: { conflicts: [ETraits.Good, ETraits.Childish] },
  [ETraits.FamilyOriented]: {
    conflicts: [ETraits.HatesChildren, ETraits.Noncommittal],
    minAge: EAges.Adult,
  },
  [ETraits.Foodie]: {
    conflicts: [ETraits.Freegan, ETraits.Glutton],
    minAge: EAges.Teen,
  },
  [ETraits.Freegan]: {
    requires: [EPacks.EcoLifestyle],
    conflicts: [
      ETraits.Ambitious,
      ETraits.Foodie,
      ETraits.Materialistic,
      ETraits.Snob,
      ETraits.Squeamish,
    ],
    minAge: EAges.Teen,
  },
  [ETraits.Geek]: {},
  [ETraits.Genius]: {},
  [ETraits.Gloomy]: {
    conflicts: [ETraits.Cheerful, ETraits.HotHeaded, ETraits.PartyAnimal],
  },
  [ETraits.Glutton]: { conflicts: [ETraits.Foodie, ETraits.Squeamish] },
  [ETraits.Good]: {
    conflicts: [ETraits.Evil, ETraits.Mean, ETraits.Kleptomaniac],
  },
  [ETraits.Goofball]: { conflicts: [ETraits.Snob] },
  [ETraits.GreenFiend]: {
    requires: [EPacks.EcoLifestyle],
  },
  [ETraits.HatesChildren]: {
    conflicts: [ETraits.FamilyOriented, ETraits.Childish],
    minAge: EAges.Teen,
  },
  [ETraits.HighMaintenance]: {
    requires: [EPacks.SpaDay],
    minAge: EAges.Teen,
  },
  [ETraits.HotHeaded]: {
    conflicts: [ETraits.Cheerful, ETraits.Gloomy],
  },
  [ETraits.Insider]: {
    requires: [EPacks.GetTogether],
    conflicts: [ETraits.Loner],
  },
  [ETraits.Jealous]: {
    minAge: EAges.Teen,
  },
  [ETraits.Kleptomaniac]: { conflicts: [ETraits.Good] },
  [ETraits.LactoseIntolerant]: {
    requires: [EPacks.CottageLiving],
  },
  [ETraits.Lazy]: {
    conflicts: [
      ETraits.Active,
      ETraits.Adventurous,
      ETraits.Ambitious,
      ETraits.Maker,
      ETraits.Neat,
      ETraits.Overachiever,
    ],
  },
  [ETraits.Loner]: {
    conflicts: [ETraits.Insider, ETraits.Outgoing, ETraits.PartyAnimal],
  },
  [ETraits.LovesOutdoors]: {
    conflicts: [ETraits.Squeamish],
    aspirationWeights: [{ key: EAspirations.OutdoorEnthusiast, value: 3 }],
  },
  [ETraits.Loyal]: { minAge: EAges.Teen, conflicts: [ETraits.Noncommittal] },
  [ETraits.Maker]: {
    requires: [EPacks.EcoLifestyle],
    conflicts: [ETraits.Clumsy, ETraits.Lazy],
    minAge: EAges.Teen,
  },
  [ETraits.Materialistic]: {
    minAge: EAges.Teen,
    conflicts: [ETraits.Freegan],
  },
  [ETraits.Mean]: {
    conflicts: [ETraits.Good, ETraits.Proper],
  },
  [ETraits.MusicLover]: {},
  [ETraits.Neat]: {
    conflicts: [ETraits.Lazy, ETraits.Slob],
  },
  [ETraits.Noncommittal]: {
    conflicts: [ETraits.FamilyOriented, ETraits.Loyal],
    minAge: EAges.Adult,
  },
  [ETraits.Outgoing]: {
    conflicts: [ETraits.Loner, ETraits.Paranoid, ETraits.SociallyAwkward],
  },
  [ETraits.Overachiever]: {
    requires: [EPacks.HighSchoolYears],
    conflicts: [ETraits.Lazy],
    minAge: EAges.Teen,
  },
  [ETraits.Paranoid]: {
    requires: [EPacks.StrangerVille],
    conflicts: [ETraits.Outgoing],
    minAge: EAges.Teen,
  },
  [ETraits.PartyAnimal]: {
    requires: [EPacks.HighSchoolYears],
    conflicts: [ETraits.Gloomy, ETraits.Loner, ETraits.SociallyAwkward],
    minAge: EAges.Teen,
  },
  [ETraits.Perfectionist]: {},
  [ETraits.Proper]: {
    requires: [EPacks.SnowyEscape],
    conflicts: [ETraits.Mean, ETraits.Slob],
  },
  [ETraits.RecycleDisciple]: {
    requires: [EPacks.EcoLifestyle],
  },
  [ETraits.Romantic]: {
    conflicts: [ETraits.Unflirty],
    minAge: EAges.Teen,
  },
  [ETraits.SelfAbsorbed]: {
    requires: [EPacks.GetFamous],
    aspirationWeights: [
      { key: EAspirations.WorldFamousCelebrity, value: WEIGHTS.MID },
    ],
  },
  [ETraits.SelfAssured]: {},
  [ETraits.Slob]: {
    conflicts: [ETraits.Neat, ETraits.Proper, ETraits.Squeamish],
  },
  [ETraits.Snob]: {
    conflicts: [ETraits.Childish, ETraits.Freegan, ETraits.Goofball],
    minAge: EAges.Teen,
    aspirationWeights: [
      { key: EAspirations.BestsellingAuthor, value: WEIGHTS.LOW },
      { key: EAspirations.FabulouslyWealthy, value: WEIGHTS.LOW },
      { key: EAspirations.MansionBaron, value: WEIGHTS.LOW },
      { key: EAspirations.WorldFamousCelebrity, value: WEIGHTS.LOW },
    ],
  },
  [ETraits.SociallyAwkward]: {
    requires: [EPacks.HighSchoolYears],
    conflicts: [ETraits.Outgoing, ETraits.PartyAnimal],
    minAge: EAges.Teen,
  },
  [ETraits.Squeamish]: {
    requires: [EPacks.OutdoorRetreat],
    conflicts: [
      ETraits.Glutton,
      ETraits.LovesOutdoors,
      ETraits.Slob,
      ETraits.Freegan,
    ],
  },
  [ETraits.Unflirty]: {
    requires: [EPacks.CityLiving],
    conflicts: [ETraits.Romantic],
    minAge: EAges.Teen,
  },
  [ETraits.Vegetarian]: {},
};

export const traitsKeyValuePairs = Object.keys(TRAITS).reduce(
  (acc, key) => [...acc, { name: humanizeKey(ETraits[+key]), value: key }],
  [{ name: "---", value: "-1" }] as ISelectOptions[]
);

export const ASPIRATIONS: { [key: number]: IAspiration } = {
  [EAspirations.Academic]: { requires: [EPacks.DiscoverUniversity] },
  [EAspirations.AnglingAce]: {},
  [EAspirations.ArchaeologyScholar]: { requires: [EPacks.JungleAdventure] },
  [EAspirations.BeachLife]: { requires: [EPacks.IslandLiving] },
  [EAspirations.BestsellingAuthor]: {},
  [EAspirations.BigHappyFamily]: {},
  [EAspirations.Bodybuilder]: {},
  [EAspirations.ChiefOfMischief]: {},
  [EAspirations.CityNative]: { requires: [EPacks.CityLiving] },
  [EAspirations.ComputerWhiz]: {},
  [EAspirations.CountryCaretaker]: { requires: [EPacks.CottageLiving] },
  [EAspirations.Curator]: {},
  [EAspirations.EcoInnovator]: { requires: [EPacks.EcoLifestyle] },
  [EAspirations.ExtremeSportsEnthusiast]: { requires: [EPacks.SnowyEscape] },
  [EAspirations.FabulouslyWealthy]: {},
  [EAspirations.FreelanceBotanist]: {},
  [EAspirations.FriendOfTheAnimals]: { requires: [EPacks.Pets] },
  [EAspirations.FriendOfTheWorld]: {},
  [EAspirations.GoodVampire]: { requires: [EPacks.Vampires] },
  [EAspirations.InnerPeace]: { requires: [EPacks.SpaDay] },
  [EAspirations.JokeStar]: {},
  [EAspirations.JungleExplorer]: { requires: [EPacks.JungleAdventure] },
  [EAspirations.LeaderOfThePack]: { requires: [EPacks.GetTogether] },
  [EAspirations.MansionBaron]: {},
  [EAspirations.MasterActor]: { requires: [EPacks.GetFamous] },
  [EAspirations.MasterChef]: {},
  [EAspirations.MasterMaker]: { requires: [EPacks.EcoLifestyle] },
  [EAspirations.MasterMixologist]: {},
  [EAspirations.MasterVampire]: { requires: [EPacks.Vampires] },
  [EAspirations.MtKomorebiSightseer]: { requires: [EPacks.SnowyEscape] },
  [EAspirations.MusicalGenius]: {},
  [EAspirations.NerdBrain]: {},
  [EAspirations.OutdoorEnthusiast]: { requires: [EPacks.OutdoorRetreat] },
  [EAspirations.PainterExtraordinaire]: {},
  [EAspirations.PartyAnimal]: {},
  [EAspirations.PublicEnemy]: {},
  [EAspirations.PurveyorOfPotions]: { requires: [EPacks.RealmOfMagic] },
  [EAspirations.RenaissanceSim]: {},
  [EAspirations.SelfCareSpecialist]: { requires: [EPacks.SpaDay] },
  [EAspirations.SerialRomantic]: {},
  [EAspirations.Soulmate]: {},
  [EAspirations.SpellcraftAndSorcery]: { requires: [EPacks.RealmOfMagic] },
  [EAspirations.StrangerVilleMystery]: { requires: [EPacks.StrangerVille] },
  [EAspirations.SuccessfulLineage]: {},
  [EAspirations.SuperParent]: { requires: [EPacks.Parenthood] },
  [EAspirations.VampireFamily]: { requires: [EPacks.Vampires] },
  [EAspirations.WorldFamousCelebrity]: { requires: [EPacks.GetFamous] },
  [EAspirations.ZenGuru]: { requires: [EPacks.SpaDay] },
};

export const emptyAspirationWeights = Object.keys(ASPIRATIONS).reduce(
  (acc, cur) => ({ ...acc, [cur]: 0 }),
  {} as GenericNumberedObject
);

export const aspirationsKeyValuePairs = Object.keys(ASPIRATIONS).reduce(
  (acc, key) => [...acc, { name: humanizeKey(EAspirations[+key]), value: key }],
  [{ name: "---", value: "-1" }] as ISelectOptions[]
);

export const CAREERS: { [key: number]: ICareer } = {
  [ECareers.AstronautInterstellarSmuggler]: {},
  [ECareers.AstronautSpaceRanger]: {},
  [ECareers.AthleteBodybuilder]: {},
  [ECareers.AthleteProfessionalAthlete]: {},
  [ECareers.BusinessInvestor]: {},
  [ECareers.BusinessManagement]: {},
  [ECareers.CriminalBoss]: {},
  [ECareers.CriminalOracle]: {},
  [ECareers.CulinaryChef]: {},
  [ECareers.CulinaryMixologist]: {},
  [ECareers.EntertainerComedian]: {},
  [ECareers.EntertainerMusician]: {},
  [ECareers.Freelancer]: {},
  [ECareers.PainterMasterOfTheReal]: {},
  [ECareers.PainterPatronOfTheArts]: {},
  [ECareers.SecretAgentDiamondAgent]: {},
  [ECareers.SecretAgentVillain]: {},
  [ECareers.SelfEmployed]: {},
  [ECareers.StyleInfluencerStylist]: {},
  [ECareers.StyleInfluencerTrendsetter]: {},
  [ECareers.TechGuruESportGamer]: {},
  [ECareers.TechGuruStartUpEntrepreneur]: {},
  [ECareers.WriterAuthor]: {},
  [ECareers.WriterJournalist]: {},
  [ECareers.Detective]: { requires: [EPacks.GetToWork] },
  [ECareers.Doctor]: { requires: [EPacks.GetToWork] },
  [ECareers.Scientist]: { requires: [EPacks.GetToWork] },
  [ECareers.CriticArtsCritic]: { requires: [EPacks.CityLiving] },
  [ECareers.CriticFoodCritic]: { requires: [EPacks.CityLiving] },
  [ECareers.PoliticianCharityOrganizer]: { requires: [EPacks.CityLiving] },
  [ECareers.PoliticianPolitician]: { requires: [EPacks.CityLiving] },
  [ECareers.SocialMediaInternetPersonality]: { requires: [EPacks.CityLiving] },
  [ECareers.SocialMediaPublicRelations]: { requires: [EPacks.CityLiving] },
  [ECareers.GardenerBotanist]: { requires: [EPacks.Seasons] },
  [ECareers.GardenerFloralDesigner]: { requires: [EPacks.Seasons] },
  [ECareers.Actor]: { requires: [EPacks.GetFamous] },
  [ECareers.MilitaryCovertOperator]: { requires: [EPacks.StrangerVille] },
  [ECareers.MilitaryOfficer]: { requires: [EPacks.StrangerVille] },
  [ECareers.ConservationistEnvironmentalManager]: {
    requires: [EPacks.IslandLiving],
  },
  [ECareers.ConservationistMarineBiologist]: {
    requires: [EPacks.IslandLiving],
  },
  [ECareers.EducationAdministrator]: { requires: [EPacks.DiscoverUniversity] },
  [ECareers.EducationProfessor]: { requires: [EPacks.DiscoverUniversity] },
  [ECareers.EngineerComputerEngineer]: {
    requires: [EPacks.DiscoverUniversity],
  },
  [ECareers.EngineerMechanicalEngineer]: {
    requires: [EPacks.DiscoverUniversity],
  },
  [ECareers.LawJudge]: { requires: [EPacks.DiscoverUniversity] },
  [ECareers.LawPrivateAttorney]: { requires: [EPacks.DiscoverUniversity] },
  [ECareers.CivilDesignerCivicPlanner]: { requires: [EPacks.EcoLifestyle] },
  [ECareers.CivilDesignerGreenTechnician]: { requires: [EPacks.EcoLifestyle] },
  [ECareers.SalarypersonExpert]: { requires: [EPacks.SnowyEscape] },
  [ECareers.SalarypersonSupervisor]: { requires: [EPacks.SnowyEscape] },
  [ECareers.InteriorDecorator]: { requires: [EPacks.DreamHomeDecorator] },
};

export const careersKeyValuePairs = Object.keys(CAREERS)
  .reduce(
    (acc, key) => [...acc, { name: humanizeKey(ECareers[+key]), value: key }],
    [{ name: "---", value: "-1" }] as ISelectOptions[]
  )
  .sort();
