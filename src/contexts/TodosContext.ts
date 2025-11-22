import { createContext } from "react";

import type { TodosContextType } from "../types/TodosContextType";

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},
});
