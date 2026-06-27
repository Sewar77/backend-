import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
          justifyContent: "space-evenly",
          alignItems: "center",
          my: 4,
        }}
      >
        <Typography variant="h4" sx={{ alignItems: "center" }}>
          Welcome
        </Typography>
        <Box
          component={"img"}
          src="/images.jpg"
          sx={{ borderRadius: 4, boxShadow: 3 }}
        />
      </Box>
    </>
  );
}
