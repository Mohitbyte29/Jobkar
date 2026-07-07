import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/middleware.js";
import { googleAuth, googleAuthCallback } from "../config/passport.js";
import passport from "passport";

const router = new Router();

router.post('/api/auth/register', registerUser);
router.post('/api/auth/login', loginUser,  isAuthenticated);

//! Redirect to Google Login
router.get('/api/auth/google', googleAuth);

router.get("/api/auth/google/callback",
    passport.authenticate("google", {
        session: false
    }),
     googleAuthCallback);

router.get('/me', isAuthenticated, (req, res) => {
    res.json({success: true, user: req.user });
});

export const authRoutes = router;

