import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import type { TodoItemType } from "../types/TodoItemType.ts";
import { ThemeContext } from "../contexts/ThemeContext.ts";
import { TodosContext } from "../contexts/TodosContext.ts";

export default function TodoInput() {
  const theme = useContext(ThemeContext);
  const { todos, setTodos } = useContext(TodosContext);
  const [task, setTask] = useState("");

  const inputDarkTheme = "bg-gray-700 text-gray-50 placeholder:text-gray-50";
  const inputLightTheme = "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task === "") {
      return;
    }

    const newTodoItem: TodoItemType = {
      id: uuidv4(),
      text: task,
      completed: false,
    };

    setTask("");
    setTodos([...todos, newTodoItem]);
  };

  return (
    <form className="mb-7" onSubmit={handleSubmit}>
      <input
        className={`w-full p-4 rounded-sm ${
          theme === "dark" ? inputDarkTheme : inputLightTheme
        }`}
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Create a new todo..."
      />
    </form>
  );
}
