import { EAspirations, ECareers, ISim } from "./types/interfaces";
import { ETraits } from "./types/interfaces";
import { EAges } from "./types/interfaces";

import { TRAITS } from "./constants/sim-data";

import { filterOutNoTrait, getEnumList, randomFromWeights } from "./utils";

export function makeChild({
  sims: { leftParent, rightParent, existingChild },
}: {
  sims: { [key: string]: ISim };
}): ISim {
  const combinedTraits = [
    ...(leftParent.traits || []),
    ...(rightParent.traits || []),
  ];
  // the starting {-1: 1} is the chance of getting a random trait
  const combinedWeightedTraits = combinedTraits.reduce(
    (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 2 }),
    { [-1]: 1 } as { [key: number]: number }
  );

  const newTraits = [] as number[];
  while (newTraits.length < 3) {
    newTraits.push(randomFromWeights(combinedWeightedTraits));
  }

  return {
    age: existingChild ? existingChild.age || EAges.Adult : EAges.Adult,
    traits: newTraits,
  };
}

export function rollSim({ sim }: { sim: ISim }): ISim {
  const mutatedSim = { ...sim };

  const traits = mutatedSim.traits ? filterOutNoTrait(mutatedSim.traits) : [];
  const allTraitList = getEnumList(ETraits);
  let filteredTraits = allTraitList.filter((key) => {
    const trait = TRAITS[key];
    return (
      ((trait.minAge && trait.minAge <= sim.age) || !trait.minAge) &&
      !traits.includes(key)
    );
  });

  while (traits.length < 3) {
    const selectedIndex = Math.floor(Math.random() * filteredTraits.length);

    const newTrait = +filteredTraits[selectedIndex];
    let valid = true;

    traits.forEach((existingTrait) => {
      if (TRAITS[existingTrait].conflicts?.includes(newTrait)) {
        valid = false;
      }
    });

    if (valid) traits.push(newTrait);
  }
  mutatedSim.traits = traits;

  const allAspirationList = getEnumList(EAspirations);
  if (mutatedSim.aspiration === -1) {
    const selectedIndex = Math.floor(Math.random() * allAspirationList.length);
    mutatedSim.aspiration = allAspirationList[selectedIndex];
  }

  const allCareerList = getEnumList(ECareers);
  if (mutatedSim.career === -1 || !mutatedSim.career) {
    const selectedIndex = Math.floor(Math.random() * allCareerList.length);
    mutatedSim.career = allCareerList[selectedIndex];
  }

  return mutatedSim;
}
