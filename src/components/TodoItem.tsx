import type { TodoItemType } from "../types/TodoItemType.ts";

interface TodoItemProps {
  item: TodoItemType;
}

export default function TodoItem({ item }: TodoItemProps) {
  return (
    <>
      <input type="checkbox" id={`${item.id}`} />
      <label className="ml-2" htmlFor={`${item.id}`}>
        {item.text}
      </label>
    </>
  );
}
