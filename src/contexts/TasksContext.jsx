import { createContext, useState } from "react";

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Learn Context",
      description: "ipsum ipsum ipsum ipsum",
      isCompleted: true,
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
