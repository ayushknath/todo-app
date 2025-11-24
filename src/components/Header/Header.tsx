import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext.ts";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

interface HeaderProps {
  themeHandler: () => void;
}

export default function Header({ themeHandler }: HeaderProps) {
  const theme = useContext(ThemeContext);

  return (
    <header className="flex justify-between mb-8">
      <h1
        className={`text-4xl font-bold tracking-widest uppercase ${
          theme === "dark" ? "text-gray-50" : ""
        }`}
      >
        Todo
      </h1>
      <ThemeSwitcher themeHandler={themeHandler} />
    </header>
  );
}
