import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("Tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddNewTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function handleTaskChecked(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function handleDeleteTask(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  function handleUpdatedTask(taskId, updatedTask) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            title: updatedTask.title,
            description: updatedTask.description,
          };
        }
        return task;
      }),
    );
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        handleAddNewTask,
        handleTaskChecked,
        handleDeleteTask,
        handleUpdatedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
