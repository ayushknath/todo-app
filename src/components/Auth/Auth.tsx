import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.tsx";

import Signin from "./Signin.tsx";
import Signout from "./Signout.tsx";

export default function Auth() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-self-end">
      {user !== null ? <Signout /> : <Signin />}
    </div>
  );
}
