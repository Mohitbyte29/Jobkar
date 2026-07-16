import { Router } from "express";
import { isAuthenticated } from "../middlewares/middleware.js";
import { completeOnboarding, createEducation, createUserProfile, deleteUserData, getUserData, getUserEducation, getUserProfile, updateAvatar, updateCover, updateUserData, updateUserProfile } from "../controllers/user.controller.js";
import upload from "../config/multer.js";

const router = new Router();

router.get('/api/me', isAuthenticated, getUserData);
router.patch('/api/me', isAuthenticated, updateUserData);
router.delete('/api/me', isAuthenticated, deleteUserData);
router.post('/api/me', isAuthenticated, createUserProfile);
router.patch('/api/me/onboarding', isAuthenticated, completeOnboarding);
router.patch('/api/me/profile', isAuthenticated, updateUserProfile);
router.get('/api/me/profile', isAuthenticated, getUserProfile);
router.patch('/api/me/education', isAuthenticated, createEducation);
router.get('/api/me/education', isAuthenticated, getUserEducation);
router.patch('/api/me/avatar', isAuthenticated, upload.single('avatar'), updateAvatar);
router.patch('/api/me/cover-image', isAuthenticated, upload.single('coverImage'), updateCover);

export const userRoutes = router;
