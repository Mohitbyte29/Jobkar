import express from "express"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { PrismaClient} from "@prisma/client";
import cors from "cors"
import { authRoutes } from "./routes/auth.routes.js";
import session from "express-session";
import { jobsRoutes } from "./routes/jobs.routes.js";
import { companyRoutes } from "./routes/company.routes.js";
import { applicationRoutes } from "./routes/applications.routes.js";
import { adminRoutes } from "./routes/admin.routes.js";

dotenv.config()

const app = express()
const prisma = new PrismaClient();
app.use(cors({origin : "http://localhost:5173"}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({secret: "secret-code", resave: true, saveUninitialized: false})
);
// ! saveUninitialized : false ---> if my session is empty then don't save the session

app.use(authRoutes);
app.use(jobsRoutes);
app.use(companyRoutes);
app.use(applicationRoutes);
app.use(adminRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


