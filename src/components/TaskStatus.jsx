import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useTasks } from "../contexts/TasksContext";

export default function TaskStatus() {
  const { filter, setFilter } = useTasks();

  const handleFilterChange = (e, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
      console.log(newFilter);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label="Task Filter"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="not-completed">Not Completed</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
