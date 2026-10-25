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
    isCompleted: false,
  },
];

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(initialStatus);

  function AddNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleTaskChecked(todoId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === todoId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  }

  return (
    <TasksContext.Provider value={{ tasks, AddNewTask, handleTaskChecked }}>
      {children}
    </TasksContext.Provider>
  );
}
