import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("Tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  function saveTasks(tasks) {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }

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

  function handleUpdatedTask(taskId, updatedTask) {
    setTasks(
      tasks.map((task) => {
        if (task.id == taskId) {
          return {
            ...task,
            title: updatedTask.title,
            description: updatedTask.description,
          };
        } else {
          return task;
        }
      }),
    );
    saveTasks(tasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
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
