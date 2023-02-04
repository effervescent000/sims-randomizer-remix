import type { GenericObject, ISelectOptions, ITrait } from "~/types/interfaces";
import { EAges, EPacks, ETraits } from "~/types/interfaces";
import { humanizeKey } from "~/utils";

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
  [ETraits.Active]: { conflicts: [ETraits.Lazy] },
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
  },
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
  },
  [ETraits.SelfAssured]: {},
  [ETraits.Slob]: {
    conflicts: [ETraits.Neat, ETraits.Proper, ETraits.Squeamish],
  },
  [ETraits.Snob]: {
    conflicts: [ETraits.Childish, ETraits.Freegan, ETraits.Goofball],
    minAge: EAges.Teen,
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
