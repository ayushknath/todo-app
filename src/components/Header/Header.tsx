import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext.ts";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import Auth from "../Auth/Auth.tsx";

interface HeaderProps {
  themeHandler: () => void;
}

export default function Header({ themeHandler }: HeaderProps) {
  const theme = useContext(ThemeContext);

  return (
    <header className="grid grid-rows-1 grid-cols-[72%_5%_auto] gap-2 mb-8">
      <h1
        className={`text-4xl font-bold tracking-widest uppercase ${
          theme === "dark" ? "text-gray-50" : ""
        }`}
      >
        Todo
      </h1>
      <ThemeSwitcher themeHandler={themeHandler} />
      <Auth />
    </header>
  );
}
