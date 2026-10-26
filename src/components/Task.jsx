import { useContext, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { TasksContext } from "../contexts/TasksContext";
import { SnackbarContext } from "../contexts/SnackbarContext";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Tasks({ task }) {
  const { handleTaskChecked, handleDeleteTask } = useContext(TasksContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const [open, setOpen] = useState(false);

  // Start handles function
  function handleTaskCheckedClick() {
    handleTaskChecked(task.id);
    if (task.isCompleted) showSnackbar("Task Back to uncompeleted", "info");
    else showSnackbar("Task Compeleted Successfully!", "success");
  }

  const handleDeleteTaskClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteTaskConfirmation = () => {
    handleDeleteTask(task.id);
    showSnackbar("Task Deleted Successfully!", "success");
  };
  // End handles function

  return (
    <>
      <Box
        key={task.id}
        sx={{
          bgcolor: "info.main",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "5px",
          color: "common.white",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid size={9}>
            <Typography variant="h6">{task.title}</Typography>
            {task.description !== "" ? (
              <Typography sx={{ fontSize: "12px" }}>
                {task.description}
              </Typography>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            size={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Start Delete Button */}
            <IconButton
              onClick={handleDeleteTaskClick}
              sx={{
                width: 36,
                height: 36,
                border: "2px solid",
                borderColor: "error.main",
                color: "error.main",
                backgroundColor: "common.white",
                "&:hover": {
                  backgroundColor: "error.light",
                },
              }}
            >
              <DeleteOutlinedIcon fontSize="small" />
            </IconButton>
            {/* End Delete Button */}

            {/* Start Edit Button */}
            <IconButton
              sx={{
                width: 36,
                height: 36,
                border: "2px solid",
                borderColor: "primary.main",
                color: "primary.main",
                backgroundColor: "common.white",
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            {/* End Edit Button */}

            {/* Start Check Button */}
            <IconButton
              sx={{
                width: 36,
                height: 36,
                border: "2px solid",
                borderColor: "success.main",
                color: task.isCompleted ? "common.white" : "success.main",
                backgroundColor: task.isCompleted
                  ? "success.main"
                  : "common.white",
                "&:hover": {
                  backgroundColor: "success.light",
                },
              }}
              onClick={handleTaskCheckedClick}
            >
              <CheckIcon fontSize="small" />
            </IconButton>
            {/* End Check Button */}
          </Grid>
        </Grid>
      </Box>

      {/* Start Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can't retrieval task after deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
          <Button onClick={handleDeleteTaskConfirmation}>Yes</Button>
        </DialogActions>
      </Dialog>
      {/* End Dialog */}
    </>
  );
}
