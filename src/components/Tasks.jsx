import { useContext } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { TasksContext } from "../contexts/TasksContext";
import Task from "./Task";

export default function Tasks() {
  const { tasks, filter } = useContext(TasksContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "not-completed") return !task.isCompleted;
    return true;
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

      {filteredTasks.length === 0 ? (
        <Typography textAlign="center" color="text.secondary">
         there is no Task to display!
        </Typography>
      ) : (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </Box>
  );
}
