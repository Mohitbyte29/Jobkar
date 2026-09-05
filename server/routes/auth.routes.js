import { Router } from "express";
import { 
    getRegisterPage, 
    loginUser, 
    logOutUser, 
    registerUser, 
    verifyEmail, 
    resendVerificationEmail 
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/middleware.js";
import { googleAuth, googleAuthCallback } from "../config/passport.js";
import passport from "passport";

const router = new Router();

router.get('/api/auth/register', getRegisterPage);
router.post('/api/auth/register', registerUser);
router.post('/api/auth/login', loginUser);
router.post('/api/auth/logout', isAuthenticated, logOutUser);

//! Email Verification Endpoints
router.get('/api/auth/verify-email', verifyEmail);
router.post('/api/auth/verify-email', verifyEmail);
router.post('/api/auth/resend-verification', resendVerificationEmail);

//! Redirect to Google Login
router.get('/api/auth/google', googleAuth);

router.get("/api/auth/google/callback",
    passport.authenticate("google", {
        session: false
    }),
    googleAuthCallback
);

router.get('/me', isAuthenticated, (req, res) => {
    res.json({success: true, user: req.user });
});

export const authRoutes = router;
