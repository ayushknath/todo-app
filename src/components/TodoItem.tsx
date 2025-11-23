import type { TodoItemType } from "../types/TodoItemType.ts";
import TodoItemDelete from "./TodoItemDelete.tsx";
import TodoItemEdit from "./TodoItemEdit.tsx";

interface TodoItemProps {
  item: TodoItemType;
}

export default function TodoItem({ item }: TodoItemProps) {
  return (
    <>
      <input className="justify-self-start" type="checkbox" id={`${item.id}`} />
      <label htmlFor={`${item.id}`}>{item.text}</label>
      <div className="flex justify-between items-center">
        <TodoItemEdit />
        <TodoItemDelete />
      </div>
    </>
  );
}
