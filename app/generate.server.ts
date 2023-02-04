import type { ISim } from "./types/interfaces";
import { EAges } from "./types/interfaces";
import { randomFromWeights } from "./utils";

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
  let counter = 0;
  const newTraits = [] as number[];
  while (counter < 3) {
    newTraits.push(randomFromWeights(combinedWeightedTraits));
    counter++;
  }
  return {
    age: existingChild ? existingChild.age || EAges.Adult : EAges.Adult,
    traits: newTraits,
  };
}
