import _ from "lodash";

import type { ISim } from "~/types/interfaces";

import {
  AGES,
  aspirationsKeyValuePairs,
  TODDLER_TRAITS,
  traitsKeyValuePairs,
} from "~/constants/sim-data";
import Select from "./common/select";

function SimOutput({
  label,
  simData,
  context,
}: {
  label?: string;
  simData?: ISim;
  context: string;
}) {
  const traits = simData && simData.traits ? simData.traits : [];
  while (traits.length < 3) {
    traits.push(-1);
  }
  return (
    <div>
      {label && <span>{label}</span>}
      <Select
        label="Age"
        options={AGES.map((age, index) => ({ name: age, value: `${index}` }))}
        cyValue={`${context}-out.age`}
      />
      <Select
        label="Toddler trait"
        options={TODDLER_TRAITS.map(({ key }) => ({ name: key, value: key }))}
        cyValue={`${context}-out.toddlerTrait`}
      />
      {_.range(3).map((_n, i) => (
        <Select
          label="Trait"
          options={traitsKeyValuePairs}
          key={i}
          value={`${traits[i]}`}
          cyValue={`${context}-out.trait`}
        />
      ))}
      <Select
        label="Aspiration"
        options={aspirationsKeyValuePairs}
        cyValue={`${context}-out.aspiration`}
      />
    </div>
  );
}

export default SimOutput;
