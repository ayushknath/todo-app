import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import type { TodoItemType } from "./types/TodoItemType.ts";
import { ThemeContext } from "./contexts/ThemeContext.ts";
import { TodosContext } from "./contexts/TodosContext.ts";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { NotificationContext } from "./contexts/NotificationContext.tsx";
import Header from "./components/Header/Header.tsx";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import Notification from "./components/Notification/Notification.tsx";

type ThemeType = "light" | "dark";

export default function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const { notificationQueue } = useContext(NotificationContext);

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
      <AuthProvider>
        <ThemeContext value={theme}>
          <TodosContext value={{ todos, setTodos, deleteTodo }}>
            <Header themeHandler={handleTheme} />
            <main>
              <TodoInput />
              <TodoList />
            </main>
            <aside className="fixed right-0 bottom-0 z-100 flex flex-col items-end gap-4 max-w-md pr-4 pb-4">
              {notificationQueue.map((notification) => (
                <Notification
                  key={uuidv4()}
                  level={notification.level}
                  message={notification.message}
                />
              ))}
            </aside>
          </TodosContext>
        </ThemeContext>
      </AuthProvider>
    </div>
  );
}
