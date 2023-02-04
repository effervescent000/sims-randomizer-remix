import type { ISim } from "./types/interfaces";
import { ETraits } from "./types/interfaces";
import { EAges } from "./types/interfaces";

import { filterOutNoTrait, randomFromWeights } from "./utils";

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
  const traits = sim.traits ? filterOutNoTrait(sim.traits) : [];
  const allTraitList = Object.keys(ETraits);

  while (traits.length < 3) {
    traits.push(+allTraitList[Math.floor(Math.random() * allTraitList.length)]);
  }

  return { ...sim, traits };
}
