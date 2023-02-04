import _ from "lodash";
import Select from "./common/select";

import {
  AGES,
  TODDLER_TRAITS,
  traitsKeyValuePairs,
} from "~/constants/sim-data";

function SimInput({
  simId = 1,
  label,
  context,
}: {
  simId?: number;
  label?: string;
  context: string;
}) {
  const simKey = `sim-${simId}`;
  return (
    <div>
      {label && <span>{label}</span>}
      <Select
        label="Age"
        options={AGES.map((age, index) => ({ name: age, value: `${index}` }))}
        fieldName={`${simKey}.age`}
        cyValue={`${context}-${simKey}.age`}
      />
      <Select
        label="Toddler trait"
        options={TODDLER_TRAITS.map(({ key }) => ({ name: key, value: key }))}
        fieldName={`${simKey}.toddlerTrait`}
        cyValue={`${context}-${simKey}.toddlerTrait`}
      />
      {_.range(3).map((_n, i) => (
        <Select
          label="Trait"
          options={traitsKeyValuePairs}
          key={i}
          fieldName={`${simKey}.trait`}
          cyValue={`${context}-${simKey}.trait`}
        />
      ))}
    </div>
  );
}

export default SimInput;
