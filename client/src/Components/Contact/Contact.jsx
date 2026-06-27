import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Card
        sx={{
          m: "auto",
          justifyContent: "center",
          width: "70%",
          alignContent: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5">Contact Us</Typography>
          <Typography className="caption">Reach out</Typography>
          <Button variant="contained">Contact Us</Button>
        </CardContent>
      </Card>
    </>
  );
}
