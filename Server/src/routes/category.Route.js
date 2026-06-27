import express from "express"
import { createCategory, deleteCategory, getAllCategories, updateCategory } from "../controller/category.Controller.js"
import { protect } from "../middleware/protect.Middleware.js"
import { adminOnly } from "../middleware/adminOnly.Middleware.js"

const route = express.Router()

route.post('/create-category', protect, adminOnly, createCategory)
route.get('/all-categories', getAllCategories)
route.put('/update-category/:id', protect, adminOnly, updateCategory)
route.delete('/delete-category/:id', protect, adminOnly, deleteCategory)

export default route