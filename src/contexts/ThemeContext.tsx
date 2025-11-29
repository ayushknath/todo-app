import { createContext, useEffect, useState, type ReactNode } from "react";

import type { ThemeType } from "../types/ThemeType.ts";

interface ThemeContextType {
  theme: ThemeType;
  changeTheme: (arg: ThemeType) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  changeTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const changeTheme = (t: ThemeType) => {
    setTheme(t);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext value={{ theme, changeTheme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}
