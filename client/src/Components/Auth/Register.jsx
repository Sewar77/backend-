import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import { useState } from "react";
export default function Register() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegister = () => {
    console.log(formData);
    register(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <>
      <Container sx={{ m: "auto" }}>
        <Paper
          elevation={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            p: 4,
            my: "auto",
          }}
        >
          <Typography variant="h3">Create new Account</Typography>
          <Typography variant="caption">Stay connected with us!</Typography>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={() => handleRegister()}
          >
            Register
          </Button>
        </Paper>
      </Container>
    </>
  );
}
