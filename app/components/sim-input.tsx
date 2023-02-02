import { AGES } from "~/constants/sim-data";
import Select from "./common/select";

function SimInput() {
  return (
    <>
      <Select
        label="Age"
        options={AGES.map((age, index) => ({ name: age, value: `${index}` }))}
      />
    </>
  );
}

export default SimInput;
