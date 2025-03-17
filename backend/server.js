import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"

import connectToMongoDB from "./db/connectToMongoDB.js"
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

app.use(express.json()) // to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser())
app.use(cors())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
})