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

dotenv.config()

const app = express()
const prisma = new PrismaClient();
app.use(cors({origin : "http://localhost:5173"}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(
  session({secret: "secret-code", resave: true, saveUninitialized: false})
);
// ! saveUninitialized : false ---> if my session is empty then don't save the session

app.use(authRoutes);
app.use(internshipsRoutes);
app.use(companyRoutes);
app.use(jobsRoutes);
app.use(applicationRoutes);
app.use(adminRoutes);

// app.get("/api/job", async(req, res) => {
//   const { what, where, page = 1 } = req.query;
//   const url = new URL(`https://api.adzuna.com/v1/api/jobs/in/search/${page}`);
//   url.searchParams.set('app_id', process.env.ADZUNA_APP_ID);
//   url.searchParams.set('app_key', process.env.ADZUNA_APP_KEY);
//   url.searchParams.set('results_per_page', 20);
//   url.searchParams.set('content-type', 'application/json');
//   if (what) url.searchParams.set('what', what);
//   if (where) url.searchParams.set('where', where);

//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   res.json(data);
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


