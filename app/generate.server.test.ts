import type { ISim } from "./types/interfaces";

import { rollSim } from "./generate.server";

const emptySim = {} as ISim;
const simWithPartialTraits: ISim = { traits: [4, 8] };
const simWithFakeTrait: ISim = { traits: [4, 8, -1] };

test("returns a list w/o nulls", () => {
  for (let i = 0; i < 5; i++) {
    const traits = rollSim({ sim: emptySim }).traits;
    expect(traits).toHaveLength(3);
    expect(traits).not.toContain(null);
    traits?.forEach((trait) => expect(trait).toBeTypeOf("number"));
  }
});
test("filters out -1 traits", () => {
  const traits = rollSim({ sim: simWithFakeTrait }).traits;
  expect(traits).toHaveLength(3);
  expect(traits).not.toContain(-1);
});
test("fills out partial traits", () => {
  const traits = rollSim({ sim: simWithPartialTraits }).traits;
  expect(traits).toHaveLength(3);
});
