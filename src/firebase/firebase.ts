import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUFMW1lEIGUDacw2sw89Cj84aomby2wS8",
  authDomain: "todo-app-3564e.firebaseapp.com",
  projectId: "todo-app-3564e",
  storageBucket: "todo-app-3564e.firebasestorage.app",
  messagingSenderId: "245991007550",
  appId: "1:245991007550:web:6d8dcfdcf43b2d0c0af86f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
