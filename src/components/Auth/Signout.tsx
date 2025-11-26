import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Signout() {
  const { user, logout } = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const darkStyles = "bg-blue-800 hover:opacity-90 active:opacity-85";
  const lightStyles =
    "bg-blue-700 hover:bg-blue-800 active:bg-blue-800 active:opacity-90";

  return (
    <button
      className={`flex justify-center items-center gap-2 py-1.5 px-3 text-gray-50 rounded-sm hover:cursor-pointer ${
        theme === "dark" ? darkStyles : lightStyles
      }`}
      title={`Signout (${user?.displayName})`}
      onClick={logout}
    >
      Sign out
    </button>
  );
}
