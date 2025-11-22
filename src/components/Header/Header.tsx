import ThemeSwitcher from "./ThemeSwitcher.tsx";

interface HeaderProps {
  themeHandler: () => void;
}

export default function Header({ themeHandler }: HeaderProps) {
  return (
    <header className="flex justify-between mb-8">
      <h1 className="text-4xl font-bold tracking-widest uppercase">Todo</h1>
      <ThemeSwitcher themeHandler={themeHandler} />
    </header>
  );
}
