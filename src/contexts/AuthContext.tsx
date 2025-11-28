import {
  createContext,
  useEffect,
  useState,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { auth, googleProvider } from "../firebase/firebase";
import {
  type User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { NotificationContext } from "./NotificationContext";

interface AuthContextType {
  user: User | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const { triggerNotification } = useContext(NotificationContext);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!isFirstRender.current) {
        triggerNotification({
          notify: true,
          level: "INFO",
          message: u !== null ? `Signed in as ${u?.displayName}` : "Signed out",
        });
      } else {
        isFirstRender.current = false;
      }
    });

    return () => unsub();
  }, []);

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext value={{ user, loginWithGoogle, logout }}>
      {children}
    </AuthContext>
  );
}
