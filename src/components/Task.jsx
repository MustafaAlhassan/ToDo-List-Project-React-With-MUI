import { useContext } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { TasksContext } from "../contexts/TasksContext";
import { SnackbarContext } from "../contexts/SnackbarContext";

export default function Task({ task, showDeleteDialog, showEditDialog }) {
  const { handleTaskChecked } = useContext(TasksContext);
  const { showSnackbar } = useContext(SnackbarContext);

  const handleTaskCheckedClick = () => {
    handleTaskChecked(task.id);
    if (task.isCompleted) {
      showSnackbar("Task Back to uncompleted", "info");
    } else {
      showSnackbar("Task Completed Successfully!", "success");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "5px",
        color: "common.white",
      }}
    >
      <Grid container spacing={2}>
        <Grid size={9}>
          <Typography
            variant="h6"
            sx={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
          >
            {task.title}
          </Typography>
          {task.description?.trim() && (
            <Typography
              sx={{
                fontSize: "12px",
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.description}
            </Typography>
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
            onClick={showDeleteDialog}
            sx={{
              width: 36,
              height: 36,
              border: "2px solid",
              borderColor: "error.main",
              color: "error.main",
              backgroundColor: "common.white",
              "&:hover": { backgroundColor: "error.light" },
            }}
          >
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={showEditDialog}
            sx={{
              width: 36,
              height: 36,
              border: "2px solid",
              borderColor: "primary.main",
              color: "primary.main",
              backgroundColor: "common.white",
              "&:hover": { backgroundColor: "primary.light" },
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
              backgroundColor: task.isCompleted ? "success.main" : "common.white",
              "&:hover": { backgroundColor: "success.light" },
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