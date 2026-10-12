import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "common.white",
        height: "70px", 
        marginBottom: "20px"
      }}
    >
      Header
    </Box>
  );
}
