function PanelLayout({ children }: { children: JSX.Element[] }) {
  return <div className="flex flex-col items-center">{children}</div>;
}

export default PanelLayout;
