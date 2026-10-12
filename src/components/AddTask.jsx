import { Grid, TextField, Button } from "@mui/material";

export default function AddTask() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 9 }}>
          <TextField
            id="outlined-basic"
            label="Task"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Button variant="contained" sx={{ width: "100%", height: "100%" }}>
            Add Task
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
