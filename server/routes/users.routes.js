import { Router } from "express";
import { isAuthenticated } from "../middlewares/middleware.js";
import { completeOnboarding, createEducation, createUserProfile, deleteUserData, getUserData, getUserProfile, updateUserData, updateUserProfile } from "../controllers/user.controller.js";

const router = new Router();

router.get('/api/me', isAuthenticated, getUserData);
router.patch('/api/me', isAuthenticated, updateUserData);
router.delete('/api/me', isAuthenticated, deleteUserData);
router.post('/api/me', isAuthenticated, createUserProfile);
router.patch('/api/me/onboarding', isAuthenticated, completeOnboarding);
router.patch('/api/me/profile', isAuthenticated, updateUserProfile);
router.get('/api/me/profile', isAuthenticated, getUserProfile);
router.patch('/api/me/education', isAuthenticated, createEducation);

export const userRoutes = router;
