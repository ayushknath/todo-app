import { createContext, useState, type ReactNode } from "react";

import type { TodoItemType } from "../types/TodoItemType";

interface TodosContextType {
  todos: TodoItemType[];
  addTodo: (arg: TodoItemType) => void;
  deleteTodo: (arg: string) => void;
  updateTodo: (arg: TodoItemType[]) => void;
}

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const addTodo = (t: TodoItemType) => {
    setTodos((prev) => [...prev, t]);
  };

  const updateTodo = (ta: TodoItemType[]) => {
    setTodos(ta);
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
    <TodosContext value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodosContext>
  );
}
