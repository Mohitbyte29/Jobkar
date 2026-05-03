import express from "express"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { PrismaClient} from "@prisma/client";
import cors from "cors"

dotenv.config()

const app = express()
const prisma = new PrismaClient();

app.use(cors({origin : "http://localhost:5173"}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

