import _ from "lodash";
import Select from "./common/select";

import {
  AGES,
  TODDLER_TRAITS,
  traitsKeyValuePairs,
} from "~/constants/sim-data";

function SimInput({ simId, label }: { simId: number; label?: string }) {
  return (
    <div>
      {label && <span>{label}</span>}
      <Select
        label="Age"
        options={AGES.map((age, index) => ({ name: age, value: `${index}` }))}
        fieldName={`sim-${simId}.age`}
      />
      <Select
        label="Toddler trait"
        options={TODDLER_TRAITS.map(({ key }) => ({ name: key, value: key }))}
        fieldName={`sim-${simId}.toddlerTrait`}
      />
      {_.range(3).map((_n, i) => (
        <Select
          label="Trait"
          options={traitsKeyValuePairs}
          key={i}
          fieldName={`sim-${simId}.trait`}
        />
      ))}
    </div>
  );
}

export default SimInput;
