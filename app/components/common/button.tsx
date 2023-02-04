function Button({
  name,
  type = "submit",
  children,
  cyValue,
}: {
  name?: string;
  type?: any;
  children: any;
  cyValue?: string;
}) {
  return (
    <button
      className="rounded-sm bg-light-blue p-1"
      name={name}
      type={type}
      data-cy={cyValue}
    >
      {children}
    </button>
  );
}

export default Button;
