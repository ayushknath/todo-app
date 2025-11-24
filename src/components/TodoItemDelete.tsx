import { FaTrash } from "react-icons/fa6";

export default function TodoItemDelete({ onClick }: { onClick: () => void }) {
  return (
    <button className="hover:cursor-pointer" onClick={onClick}>
      <FaTrash />
    </button>
  );
}
