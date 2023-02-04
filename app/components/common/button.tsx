function Button({
  name,
  type = "submit",
  children,
}: {
  name?: string;
  type?: any;
  children: any;
}) {
  return (
    <button className="rounded-sm bg-light-blue p-1" name={name} type={type}>
      {children}
    </button>
  );
}

export default Button;
