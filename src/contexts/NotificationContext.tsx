import { createContext, useEffect, useState, type ReactNode } from "react";

import type { NotificationStateType } from "../types/NotificationStateType";

interface NotificationContextType {
  notification: NotificationStateType;
  triggerNotification: (arg: NotificationStateType) => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  notification: {
    notify: false,
    level: "INFO",
    message: "",
  },
  triggerNotification: () => {},
});

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notification, setNotification] = useState<NotificationStateType>({
    notify: false,
    level: "INFO",
    message: "",
  });

  useEffect(() => {
    if (!notification.notify) return;

    const timer = setTimeout(() => {
      setNotification({
        notify: false,
        level: "INFO",
        message: "",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [notification.notify]);

  const triggerNotification = (n: NotificationStateType) => {
    setNotification(n);
  };

  return (
    <NotificationContext value={{ notification, triggerNotification }}>
      {children}
    </NotificationContext>
  );
}
