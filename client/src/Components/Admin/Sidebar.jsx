import { Box, List, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ minHeight: "100vh", bgcolor: "beige" }}>
        <List>
          <ListItemButton onClick={() => navigate("/admin/dashboard")}>
            Dashboard
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/manage-users")}>
            Manage users
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/manage-menu")}>
            Manage menu
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/manage-categories")}>
            Manage categories
          </ListItemButton>
          <ListItemButton>Manage profile</ListItemButton>
          <ListItemButton>Manage messages</ListItemButton>
          <ListItemButton>logout</ListItemButton>
        </List>
      </Box>
    </>
  );
}
