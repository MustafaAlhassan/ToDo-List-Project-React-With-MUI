import { useContext } from "react";
import { Box, Divider } from "@mui/material";
import { TasksContext } from "../contexts/TasksContext";
import Task from "./Task";

export default function Tasks() {
  const { tasks } = useContext(TasksContext);

  const allTasks = tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });

  return (
    <Box sx={{ marginTop: "20px" }}>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Tasks</h2>
      </Box>
      <Divider sx={{ marginBottom: "20px" }} />
      {allTasks}
    </Box>
  );
}
