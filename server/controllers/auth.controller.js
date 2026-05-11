import argon from "argon2";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail, hashedPassword, verifyPassword } from "../services/auth.services.js";
const prisma = new PrismaClient();
import { loginSchema, registerSchema } from "../validators/auth.validators.js";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../middlewares/middleware.js";
import { includes } from "zod";

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
                role
            }
        });
        res.status(201).json({success: true, message: "User Registered Successfully!", user: {id: user.id, email: user.email}});
        next();
    } catch(error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during registration"});
    }
}

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
        if(!user){
            return res.status(404).json({success: false, message: "Email or Password is Incorrect" });
        }
        const passwordMatch = await verifyPassword(user.password, password)
        if(!passwordMatch) {
            return res.status(400).json({success: false, message: "Email or Password is Incorrect"});
        }
        
        const token = jwt.sign({id: user.id, email: user.email, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.status(200).json({success: true, message: "Login successful", user: {id: user.id, email: user.email, role: user.role}, token});
        await isAuthenticated(req, res, next);
        next();
    } catch(error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during login"});
    }
};

