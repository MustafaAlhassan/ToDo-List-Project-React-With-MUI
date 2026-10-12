import { Box, Button, ButtonGroup } from "@mui/material";

export default function TaskStatus() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>All</Button>
        <Button>Completed</Button>
        <Button>Incomplete</Button>
      </ButtonGroup>
    </Box>
  );
}
