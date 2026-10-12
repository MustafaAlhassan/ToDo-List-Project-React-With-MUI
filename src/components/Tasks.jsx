import { useContext } from "react";
import { Box, Divider, Grid, Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { TasksContext } from "../contexts/TasksContext";

export default function Tasks() {
  const { tasks } = useContext(TasksContext);

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
      <Divider />
      {tasks.map((task) => (
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
                  color: "success.main",
                  backgroundColor: "common.white",
                  "&:hover": {
                    backgroundColor: "success.light",
                  },
                }}
              >
                <CheckIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
