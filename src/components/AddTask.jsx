import { useContext, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { TasksContext } from "../contexts/TasksContext";
import { SnackbarContext } from "../contexts/SnackbarContext";
import { v4 as uuidv4 } from "uuid";

export default function AddTask() {
  const [titleInput, setTitleInput] = useState("");
  const { handleAddNewTask } = useContext(TasksContext);
  const { showSnackbar } = useContext(SnackbarContext);

  function handleAddClick() {
    if (titleInput.trim() === "") {
      showSnackbar("Task field can not be empty!", "warning");
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: titleInput,
      description: "",
      isCompleted: false,
    };

    handleAddNewTask(newTask);
    setTitleInput("");
    showSnackbar("Task Add Successfully!", "success");
  }

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 9 }}>
        <TextField
          label="Task"
          variant="outlined"
          sx={{ width: "100%" }}
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 3 }}>
        <Button
          variant="contained"
          sx={{ width: "100%", height: "100%" }}
          onClick={handleAddClick}
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
}
