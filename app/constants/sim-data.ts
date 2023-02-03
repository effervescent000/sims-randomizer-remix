import type { GenericObject, ISelectOptions, ITrait } from "~/types/interfaces";
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

export const TRAITS: ITrait = {
  adventurous: {
    requires: ["snowyEscape"],
  },
  ambitious: {},
  animalEnthusiast: {},
  artLover: {},
  bookworm: {},
  bro: {},
  catLover: {
    requires: ["pets"],
  },
  cheerful: {},
  childOfTheIslands: {
    requires: ["islandLiving"],
  },
  childOfTheOcean: {
    requires: ["islandLiving"],
  },
  childish: {},
  clumsy: {},
  creative: {},
  danceMachine: {
    requires: ["getTogether"],
  },
  dogLover: {
    conflicts: ["pets"],
  },
  erratic: {},
  evil: {},
  familyOriented: {},
  foodie: {},
  freegan: {
    requires: ["ecoLifestyle"],
  },
  geek: {},
  genius: {},
  gloomy: {},
  glutton: {},
  good: {},
  goofball: {},
  greenFiend: {
    requires: ["ecoLifestyle"],
  },
  hatesChildren: {},
  highMaintenance: {
    requires: ["spaDay"],
  },
  hotHeaded: {},
  insider: {
    requires: ["getTogether"],
  },
  jealous: {},
  kleptomaniac: {},
  lactoseIntolerant: {
    requires: ["cottageLiving"],
  },
  lazy: {},
  loner: {},
  lovesOutdoors: {},
  maker: {
    requires: ["ecoLifestyle"],
  },
  materialistic: {},
  mean: {},
  musicLover: {},
  neat: {},
  noncommittal: {},
  outgoing: {},
  paranoid: {
    requires: ["strangerVille"],
  },
  perfectionist: {},
  proper: {
    conflicts: ["snowyEscape"],
  },
  recycleDisciple: {},
  romantic: {},
  selfAbsorbed: {
    requires: ["getFamous"],
  },
  selfAssured: {},
  slob: {},
  snob: {},
  squeamish: {
    requires: ["outdoorRetreat"],
  },
  unflirty: {},
  vegetarian: {},
};

export const traitsKeyValuePairs = Object.keys(TRAITS).reduce(
  (acc, key) => [...acc, { name: humanizeKey(key), value: key }],
  [] as ISelectOptions[]
);
