import type { ISelectOptions } from "~/types/interfaces";

function Select({
  label,
  options,
  fieldName,
  value,
}: {
  label?: string;
  options: ISelectOptions[];
  fieldName?: string;
  value?: string;
}) {
  return (
    <div>
      <span>{label}</span>
      <select name={fieldName} value={value} disabled={!!value}>
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
