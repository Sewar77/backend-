import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ flexShrink: 1 }}>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
//admin layout
//side bar
//fetch all users
//fetch all menu item

// task: fetch category
// edit-delete item
// catch =>
