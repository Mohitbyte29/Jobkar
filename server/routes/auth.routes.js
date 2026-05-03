import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const router = new Router();

router.post('/api/auth/register', registerUser);
router.post('/api/auth/login', loginUser);

export const authRoutes = router;

