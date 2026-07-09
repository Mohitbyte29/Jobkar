import { Router } from "express";
import { isAuthenticated } from "../middlewares/middleware.js";
import { completeOnboarding, deleteMyProfile, getMyProfile, updateMyProfile } from "../controllers/user.controller.js";

const router = new Router();

router.get('/api/me', isAuthenticated, getMyProfile);
router.patch('/api/me', isAuthenticated, updateMyProfile);
router.delete('/api/me', isAuthenticated, deleteMyProfile);
router.patch('/api/me/onboarding', isAuthenticated, completeOnboarding);

export const userRoutes = router;
