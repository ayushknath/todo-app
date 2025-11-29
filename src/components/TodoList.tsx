import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext.tsx";
import { TodosContext } from "../contexts/TodosContext.tsx";
import TodoItem from "./TodoItem.tsx";

export default function TodoList() {
  const { theme } = useContext(ThemeContext);
  const { todos } = useContext(TodosContext);

  const ulDarkTheme = "bg-gray-700";
  const ulLightTheme = "bg-gray-50";
  const liDarkTheme = "border-gray-500 text-gray-50";
  const liLightTheme = "border-gray-300";

  return (
    <ul
      className={`rounded-sm ${theme === "dark" ? ulDarkTheme : ulLightTheme}`}
    >
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          className={`p-4 ${
            index !== todos.length - 1 ? "border-b" : ""
          } grid grid-rows-1 grid-cols-[5%_85%_10%] items-center ${
            theme === "dark" ? liDarkTheme : liLightTheme
          }`}
        >
          <TodoItem item={todo} />
        </li>
      ))}
    </ul>
  );
}
