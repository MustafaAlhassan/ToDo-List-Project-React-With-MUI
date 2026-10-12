import AddTask from "./AddTask";
import Tasks from "./Tasks";
import TaskStatus from "./TaskStatus";

function ToDoList() {
  return (
    <>
      <AddTask />
      <TaskStatus />
      <Tasks/>
    </>
  );
}

export default ToDoList;
