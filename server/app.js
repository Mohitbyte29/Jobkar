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
import { internshipsRoutes } from "./routes/internships.routes.js";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./config/passport.js";
import { userRoutes } from "./routes/users.routes.js";
import { experienceRoutes } from "./routes/experience.routes.js";

dotenv.config()

const app = express()
const prisma = new PrismaClient();

app.use(cors({origin : "http://localhost:5173", credentials: true}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
  session({secret: "secret-code", resave: true, saveUninitialized: false})
);
app.use(passport.initialize());
app.use(passport.session());
// ! saveUninitialized : false ---> if my session is empty then don't save the session

app.use(userRoutes);
app.use(authRoutes);
app.use(internshipsRoutes);
app.use(companyRoutes);
app.use(jobsRoutes);
app.use(applicationRoutes);
app.use(adminRoutes);
app.use(experienceRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


