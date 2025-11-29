import { createContext, useState, type ReactNode } from "react";

import type { NotificationStateType } from "../types/NotificationStateType";

interface NotificationContextType {
  notificationQueue: NotificationStateType[];
  triggerNotification: (arg: NotificationStateType) => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  notificationQueue: [],
  triggerNotification: () => {},
});

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notificationQueue, setNotificationQueue] = useState<
    NotificationStateType[]
  >([]);

  const triggerNotification = (n: NotificationStateType) => {
    setNotificationQueue((prev) => [...prev, n]);
    setTimeout(() => {
      killNotification(n.id);
    }, 5000);
  };

  const killNotification = (notificationId: string) => {
    setNotificationQueue((prev) => prev.filter((n) => n.id !== notificationId));
  };

  return (
    <NotificationContext value={{ notificationQueue, triggerNotification }}>
      {children}
    </NotificationContext>
  );
}
