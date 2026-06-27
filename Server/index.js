import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/config/db.js"
import categoryRoutes from "./src/routes/category.Route.js"
import bodyParser from "body-parser"
import authRoutes from "./src/routes/auth.Routes.js"
import usersRoutes from "./src/routes/users.Routes.js"
import menuRoutes from "./src/routes/menu.Routes.js"
import cors from "cors"
dotenv.config()
// to allow server folders to access .env file
const app = express()
const port = process.env.PORT
connectDB()
app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:5173",
    // the front end link
    credentials: true,
    methods: ['PUT', 'POST', 'GET', 'DELETE']
}))
//health
app.get('/health', (req, res) => {
    res.send("server is healthy")
})
app.use('/api', categoryRoutes)
app.use('/api', authRoutes)
app.use('/api', usersRoutes)
app.use('/api', menuRoutes)

//listen to turn server on
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

//http://localhost:3000/api/XXX

// tokens => json web tokens => intro, code, , login
// tokens
// security , frontend => link.
// components react ,
// req, res in real life 
