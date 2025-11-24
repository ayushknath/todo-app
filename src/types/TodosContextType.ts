import type { TodoItemType } from "./TodoItemType.ts";

export interface TodosContextType {
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
  deleteTodo: (id: string) => void;
}
