import { createContext, useEffect, useReducer, useContext } from "react";
import { tasksReducer, initialState } from "../reducers/tasksReducer";

export const TasksContext = createContext();

export default function TasksProvider({ children }) {
  const init = () => {
    const savedTasks = localStorage.getItem("Tasks");
    if (savedTasks) {
      return { ...initialState, tasks: JSON.parse(savedTasks) };
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleAddNewTask = (newTask) =>
    dispatch({ type: "ADD_TASK", payload: newTask });

  const handleTaskChecked = (taskId) =>
    dispatch({ type: "TOGGLE_TASK", payload: taskId });

  const handleDeleteTask = (taskId) =>
    dispatch({ type: "DELETE_TASK", payload: taskId });

  const handleUpdatedTask = (taskId, updatedTask) =>
    dispatch({ type: "UPDATE_TASK", payload: { id: taskId, updatedTask } });

  const setFilter = (filterValue) =>
    dispatch({ type: "SET_FILTER", payload: filterValue });

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        filter: state.filter,
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

export const useTasks = () => {
  return useContext(TasksContext);
};
