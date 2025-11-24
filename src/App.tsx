import { useState, useEffect } from "react";

import type { TodoItemType } from "./types/TodoItemType.ts";
import { ThemeContext } from "./contexts/ThemeContext.ts";
import { TodosContext } from "./contexts/TodosContext.ts";
import Header from "./components/Header/Header.tsx";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";

type ThemeType = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const deleteTodo = (todoId: string) => {
    const i = todos.findIndex((t) => todoId === t.id);
    const newTodos =
      i === todos.length - 1
        ? todos.slice(0, i)
        : [...todos.slice(0, i), ...todos.slice(i + 1)];
    setTodos(newTodos);
  };

  return (
    <div id="app" className="w-xl mx-auto">
      <ThemeContext value={theme}>
        <TodosContext value={{ todos, setTodos, deleteTodo }}>
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
