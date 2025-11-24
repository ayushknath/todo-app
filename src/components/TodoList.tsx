import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext.ts";
import { TodosContext } from "../contexts/TodosContext.ts";
import TodoItem from "./TodoItem.tsx";

export default function TodoList() {
  const theme = useContext(ThemeContext);
  const { todos } = useContext(TodosContext);

  const ulDarkTheme = "bg-gray-700";
  const ulLightTheme = "";
  const liDarkTheme = "border-slate-50 text-gray-50";
  const liLightTheme = "";

  return (
    <ul
      className={`rounded-sm ${theme === "dark" ? ulDarkTheme : ulLightTheme}`}
    >
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`p-4 border-b grid grid-rows-1 grid-cols-[5%_85%_10%] items-center ${
            theme === "dark" ? liDarkTheme : liLightTheme
          }`}
        >
          <TodoItem item={todo} />
        </li>
      ))}
    </ul>
  );
}
