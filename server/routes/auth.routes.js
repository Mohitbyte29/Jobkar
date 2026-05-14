import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.post('/api/auth/register', registerUser);
router.post('/api/auth/login', loginUser,  isAuthenticated);

export const authRoutes = router;

