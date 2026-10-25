import { useContext } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { TasksContext } from "../contexts/TasksContext";
import { SnackbarContext } from "../contexts/SnackbarContext";

export default function Tasks({ task }) {
  const { handleTaskChecked } = useContext(TasksContext);
  const { showSnackbar } = useContext(SnackbarContext);

  function handleTaskCheckedClick() {
    handleTaskChecked(task.id);
    if (task.isCompleted) showSnackbar("Task Back to uncompeleted", "info");
    else showSnackbar("Task Compeleted Successfully!", "success");
  }
  return (
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
          <IconButton
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
        </Grid>
      </Grid>
    </Box>
  );
}
