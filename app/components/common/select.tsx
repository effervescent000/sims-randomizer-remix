import type { ISelectOptions } from "~/types/interfaces";

function Select({
  label,
  options,
  fieldName,
  value,
  cyValue,
}: {
  label?: string;
  options: ISelectOptions[];
  fieldName?: string;
  value?: string;
  cyValue?: string;
}) {
  return (
    <div>
      <span>{label}</span>
      <select
        name={fieldName}
        value={value}
        disabled={!!value}
        data-cy={cyValue}
      >
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
