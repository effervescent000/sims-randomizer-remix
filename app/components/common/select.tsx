import React, { useState } from "react";
import type { ISelectOptions } from "~/types/interfaces";

function Select({
  label,
  options,
  fieldName,
}: {
  label?: string;
  options: ISelectOptions[];
  fieldName: string;
}) {
  return (
    <div>
      <span>{label}</span>
      <select name={fieldName}>
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
