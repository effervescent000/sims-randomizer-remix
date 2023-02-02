import React, { useState } from "react";

function TextInput({ label }: { label?: string }) {
  const [value, setValue] = useState("");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <span>{label}</span>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default TextInput;
