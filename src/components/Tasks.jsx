import { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";
import { useSnackbar } from "../contexts/SnackbarContext";

export default function Tasks() {
  const { tasks, filter, handleDeleteTask, handleUpdatedTask } = useTasks();
  const { showSnackbar } = useSnackbar();

  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openDeleteTaskClick = (task) => {
    setTaskToDelete(task);
  };

  const handleDeleteClose = () => {
    setTaskToDelete(null);
  };

  const handleDeleteTaskConfirmation = () => {
    if (taskToDelete) {
      handleDeleteTask(taskToDelete.id);
      showSnackbar("Task Deleted Successfully!", "success");
      handleDeleteClose();
    }
  };

  const openEditTaskClick = (task) => {
    setTaskToEdit(task);
  };

  const handleEditClose = () => {
    setTaskToEdit(null);
  };

  const handleEditTaskConfirmation = () => {
    if (!taskToEdit) return;

    if (taskToEdit.title.trim() === "") {
      showSnackbar("The title can not be empty!", "error");
      return;
    }

    handleUpdatedTask(taskToEdit.id, taskToEdit);
    showSnackbar("Task Updated Successfully!", "success");
    handleEditClose();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.isCompleted;
    if (filter === "not-completed") return !task.isCompleted;
    return true;
  });

  return (
    <>
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
          filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              showDeleteDialog={() => openDeleteTaskClick(task)}
              showEditDialog={() => openEditTaskClick(task)}
            />
          ))
        )}
      </Box>

      <Dialog open={Boolean(taskToDelete)} onClose={handleDeleteClose}>
        <DialogTitle>Are you sure to delete task?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can't retrieval task after deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose} autoFocus>
            No
          </Button>
          <Button onClick={handleDeleteTaskConfirmation} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={Boolean(taskToEdit)} onClose={handleEditClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={taskToEdit?.title || ""}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={taskToEdit?.description || ""}
            onChange={(e) =>
              setTaskToEdit({ ...taskToEdit, description: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleEditTaskConfirmation} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
