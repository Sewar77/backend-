import express from "express"
import { deleteUser, getAllUsers, updatePassword, updateUserInfo, updateUserRole } from "../controller/user.Controller.js"
import { protect } from "../middleware/protect.Middleware.js"
import { adminOnly } from "../middleware/adminOnly.Middleware.js"

const route = express.Router()

route.get('/all-users', protect, adminOnly, getAllUsers)
route.delete('/delete-user/:id', protect, deleteUser)
route.put('/update-user', protect, updateUserInfo)
route.put('/update-user-role/:id', protect, adminOnly, updateUserRole)
route.put('/update-password', protect, updatePassword)
export default route