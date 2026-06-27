//route => express

import express from "express";
import { createMenuItem, deleteMenuById, getAllMenu, getMenuItemById, updateMenuInfo, updateMenuItemStatus } from "../controller/menu.Controller.js";
import { protect } from "../middleware/protect.Middleware.js";
import { adminOnly } from "../middleware/adminOnly.Middleware.js";

const route = express.Router();

route.post("/create-menu", protect, adminOnly, createMenuItem);
route.get("/all-menu", getAllMenu);
route.get('/menu-item/:id', getMenuItemById)
route.put('/update-menu/:id', protect, adminOnly, updateMenuInfo)
route.delete('/delete-menu/:id', protect, adminOnly, deleteMenuById)
route.put('/update-status/:id', protect, adminOnly, updateMenuItemStatus)
export default route;
