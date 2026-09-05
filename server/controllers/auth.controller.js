import argon from "argon2";
import { PrismaClient } from "@prisma/client";
import { 
    getUserByEmail, 
    getUserById, 
    hashedPassword, 
    verifyPassword, 
    generateVerificationToken, 
    verifyVerificationToken 
} from "../services/auth.services.js";
import { sendVerificationEmail } from "../services/mail.services.js";
import { loginSchema, registerSchema } from "../validators/auth.validators.js";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const getRegisterPage = (req, res) => {
    const redirectUrl = req.query.redirect || '/';
    res.render('register', { redirectAfter: redirectUrl });
};

export const registerUser = async (req, res, next) => {
    try {
        const result = registerSchema.safeParse(req.body);
    
        if(!result.success){
            const errors = result.error.issues.map(issue => ({
                field: issue.path.join('.'),
                message: issue.message
            }));
            return res.status(400).json({success: false, message: "Validation failed", errors});
        }
        
        const {name, email, password, role} = result.data;
        
        const existingUser = await getUserByEmail(email);
        
        if(existingUser) {
            return res.status(400).json({success: false, message: "Email already registered"});
        }
        
        const hashPassword = await hashedPassword(password);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                role,
                isLoggedIn: true,
                isVerified: false,
            },
        });

        if(user.role === "EMPLOYER"){
            await prisma.employer.create({
                data: {
                    userId: user.id
                }
            });
        }

        // Generate email verification token and send verification email via Gmail
        let verificationToken;
        try {
            verificationToken = generateVerificationToken(user);
            const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
            const verificationUrl = `${clientUrl}/verify-email?token=${verificationToken}`;
            // Send email in background (non-blocking for response speed)
            sendVerificationEmail(user.email, user.name, verificationUrl)
                .then(mailRes => {
                    if (mailRes.success) {
                        console.log(`[Auth] Verification email sent to ${user.email}`);
                        console.log(`verificationUrl: ${verificationUrl}`);
                    } else {
                        console.warn(`[Auth] Verification email could not be sent: ${mailRes.error || mailRes.message}`);
                    }
                })
                .catch(mailErr => {
                    console.error("[Auth] Unexpected error dispatching verification email:", mailErr);
                });
        } catch (tokenErr) {
            console.error("[Auth] Error generating verification token:", tokenErr);
        }

        let tokenPayload = {id: user.id, email: user.email, role: user.role};
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 
        });

        res.status(201).json({
            success: true, 
            message: "User Registered Successfully! Please check your Gmail to verify your account.", 
            user: {id: user.id, email: user.email, role: user.role, isVerified: false},
            verificationSent: true,
            verificationToken // Optional: Include for testing purposes, remove in production
        });

    } catch(error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during registration"});
    }
    next();
};

export const verifyEmail = async (req, res) => {
    try {
        const token = req.query.token || req.body.token;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Verification token is required."
            });
        }

        const verificationResult = verifyVerificationToken(token);

        if (!verificationResult.valid) {
            return res.status(400).json({
                success: false,
                message: verificationResult.error || "Invalid or expired verification token."
            });
        }

        const { id, email } = verificationResult.decoded;
        const user = (await getUserById(id)) || (await getUserByEmail(email));

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User associated with this token was not found."
            });
        }

        if (user.isVerified) {
            return res.status(200).json({
                success: true,
                message: "Your email is already verified!",
                alreadyVerified: true,
                user: {
                    id: user.id,
                    email: user.email,
                    isVerified: true
                }
            });
        }

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: { isVerified: true },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isVerified: true
            }
        });

        return res.status(200).json({
            success: true,
            message: "Email verified successfully! Welcome to JobKar.",
            user: updatedUser
        });
    } catch (error) {
        console.error("Error verifying email:", error);
        return res.status(500).json({
            success: false,
            message: "An internal server error occurred while verifying email."
        });
    }
};

export const resendVerificationEmail = async (req, res) => {
    try {
        let email = req.body.email;

        // If authenticated, allow fallback to current user's email
        if (!email && req.user && req.user.email) {
            email = req.user.email;
        }

        if (!email || !email.trim()) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address."
            });
        }

        const user = await getUserByEmail(email.trim().toLowerCase());

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "No account found with this email address."
            });
        }

        if (user.isVerified) {
            return res.status(400).json({
                success: false,
                message: "This email address is already verified."
            });
        }

        const verificationToken = generateVerificationToken(user);
        const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
        const verificationUrl = `${clientUrl}/verify-email?token=${verificationToken}`;

        const mailResult = await sendVerificationEmail(user.email, user.name, verificationUrl);

        if (!mailResult.success && mailResult.error) {
            console.warn(`[Auth] Resend email warning: ${mailResult.error}`);
        }

        return res.status(200).json({
            success: true,
            message: "Verification email sent successfully! Please check your Gmail inbox and spam folder."
        });
    } catch (error) {
        console.error("Error resending verification email:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to resend verification email. Please try again later."
        });
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const result = loginSchema.safeParse(req.body);
        if(!result.success){
            const errors = result.error.issues.map(issue => ({
                field: issue.path.join('.'),
                message: issue.message
            }));
            return res.status(400).json({success: false, message: "Validation failed", errors});
        }
        const {email, password} = result.data;
        const user = await getUserByEmail(email);
        if(user){
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    isLoggedIn: true,
                    isOnboarded: false
                }
            })
        }
        if(!user){
            return res.status(404).json({success: false, message: "Email or Password is Incorrect" });
        }
        const passwordMatch = await verifyPassword(user.password, password)
        if(!passwordMatch) {
            return res.status(400).json({success: false, message: "Email or Password is Incorrect"});
        }
        
        let tokenPayload = {id: user.id, email: user.email, role: user.role};
        
        if(user.role === "EMPLOYER") {
            const company = await prisma.company.findFirst({
                where: {UserId: user.id}
            });
            const employer = await prisma.employer.findFirst({
                where: {userId: user.id}
            });
            if(employer) {
                tokenPayload.employerId = employer.id;
            }
        }
        
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000 
        })
        res.status(200).json({
            success: true, 
            message: "Login successful", 
            user: {
                id: user.id, 
                email: user.email, 
                role: user.role, 
                isVerified: user.isVerified,
                companyId: tokenPayload.companyId
            }, 
            employerId: tokenPayload.employerId
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during login"});
    }
};

export const logOutUser = async (req, res) => {
    try {
        await prisma.user.update({
            where: {id: req.user.id},   
            data: {isLoggedIn: false}
        });
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        })
        res.status(200).json({success: true, message: "Logout successful"});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during logout"});
    }
};
