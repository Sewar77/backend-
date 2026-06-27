import { Container } from "@mui/material";
import About from "../../Components/About/About";
import Haeder from "../../Components/Layout/Haeder";
import Contact from "../../Components/Contact/Contact";

export default function LandingPage() {
  return (
    <>
      <Haeder />
      <Container sx={{ my: 3, alignContent: "center" }}>
        <About />
        <Contact />
      </Container>
    </>
  );
}
