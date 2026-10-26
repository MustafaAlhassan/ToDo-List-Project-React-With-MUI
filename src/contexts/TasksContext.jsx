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

  function handleAddNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleTaskChecked(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(
      tasks.filter((task) => {
        return task.id != taskId;
      }),
    );
  }

  return (
    <TasksContext.Provider value={{ tasks, handleAddNewTask, handleTaskChecked, handleDeleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}
