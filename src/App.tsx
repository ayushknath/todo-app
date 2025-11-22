import { useState } from "react";

import type { TodoItemType } from "./types/TodoItemType.ts";
import { ThemeContext } from "./contexts/ThemeContext.ts";
import { TodosContext } from "./contexts/TodosContext.ts";
import Header from "./components/Header/Header.tsx";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div id="app" className="w-xl mx-auto my-12">
      <ThemeContext value={theme}>
        <TodosContext value={{ todos, setTodos }}>
          <Header themeHandler={handleTheme} />
          <main>
            <TodoInput />
            <TodoList />
          </main>
        </TodosContext>
      </ThemeContext>
    </div>
  );
}
