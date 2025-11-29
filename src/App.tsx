import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { NotificationContext } from "./contexts/NotificationContext.tsx";
import Header from "./components/Header/Header.tsx";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import Notification from "./components/Notification/Notification.tsx";

export default function App() {
  const { notificationQueue } = useContext(NotificationContext);

  return (
    <div id="app" className="w-xl mx-auto">
      <Header />
      <main>
        <TodoInput />
        <TodoList />
      </main>
      <aside className="fixed right-0 bottom-0 z-100 flex flex-col items-end gap-3 max-w-md pr-4 pb-4">
        {notificationQueue.map((notification) => (
          <Notification
            key={uuidv4()}
            level={notification.level}
            message={notification.message}
          />
        ))}
      </aside>
    </div>
  );
}
