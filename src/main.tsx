import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import { NotificationProvider } from "./contexts/NotificationContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { TodosProvider } from "./contexts/TodosContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <TodosProvider>
            <App />
          </TodosProvider>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  </StrictMode>
);
