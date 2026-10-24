import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TasksContext = createContext();

const initialStatus = [
  {
    id: uuidv4(),
    title: "Learn React",
    description: "",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Learn Context",
    description: "ipsum ipsum ipsum ipsum",
    isCompleted: true,
  },
];

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(initialStatus);

  function AddNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <TasksContext.Provider value={{ tasks, AddNewTask }}>
      {children}
    </TasksContext.Provider>
  );
}
