import {
  AppBar,
  Box,
  Button,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useAuth } from "../../Hooks/useAuth";
export default function Haeder() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(currentUser);
  const { logout } = useAuth();

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 2,
            m: 2,
            alignItems: "center",
            flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
          }}
        >
          <Box>
            <Typography variant="h2">Logo</Typography>
          </Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
              flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
            }}
          >
            <ListItemButton onClick={() => navigate("/")}>Home</ListItemButton>
            <ListItemButton>About</ListItemButton>
            <ListItemButton>Contact</ListItemButton>
            {!currentUser || Object.keys(currentUser).length === 0 ? (
              <>
                <ListItemButton onClick={() => navigate("/login")}>
                  Login
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/create-account")}>
                  Register
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton onClick={() => logout()}>Logout</ListItemButton>
              </>
            )}
          </List>
        </Toolbar>
      </AppBar>
    </>
  );
}
