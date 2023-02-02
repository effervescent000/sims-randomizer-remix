import React, { useState } from "react";
import type { GenericObject } from "~/types/interfaces";

function Select({
  label,
  options,
}: {
  label?: string;
  options: GenericObject[];
}) {
  const [value, setValue] = useState("");

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <span>{label}</span>
      <select value={value} onChange={onChange}>
        {options.map(({ name: optName, value: optValue }) => (
          <option value={optValue} key={optValue}>
            {optName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
