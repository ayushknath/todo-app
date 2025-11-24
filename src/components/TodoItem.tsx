import React, { useContext, useState } from "react";

import type { TodoItemType } from "../types/TodoItemType.ts";
import TodoItemDelete from "./TodoItemDelete.tsx";
import TodoItemEdit from "./TodoItemEdit.tsx";
import { TodosContext } from "../contexts/TodosContext.ts";

interface TodoItemProps {
  item: TodoItemType;
}

export default function TodoItem({ item }: TodoItemProps) {
  const [checked, setChecked] = useState(false);
  const { todos, setTodos, deleteTodo } = useContext(TodosContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    const newTodos = todos.map((todo) =>
      item.id === todo.id
        ? { ...todo, completed: e.target.checked }
        : { ...todo },
    );
    setTodos(newTodos);
  };

  return (
    <>
      <input
        className="justify-self-start"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        id={`${item.id}`}
      />
      <label
        className={`${checked ? "line-through" : ""}`}
        htmlFor={`${item.id}`}
      >
        {item.text}
      </label>
      <div className="flex justify-between items-center">
        <TodoItemEdit />
        <TodoItemDelete
          onClick={() => {
            deleteTodo(item.id);
          }}
        />
      </div>
    </>
  );
}
