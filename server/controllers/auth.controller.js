import argon from "argon2";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail, hashedPassword, verifyPassword } from "../services/auth.services.js";
const prisma = new PrismaClient();
import { loginSchema, registerSchema } from "../validators/auth.validators.js";
import jwt from "jsonwebtoken";
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
                role,
                isLoggedIn: true
            },
        });
        if(user.role === "EMPLOYER"){
            await prisma.employer.create({
                data: {
                    userId: user.id
                }
            });
        }
        let tokenPayload = {id: user.id, email: user.email, role: user.role};
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: "1h"});
        
        res.status(201).json({success: true, message: "User Registered Successfully!", user: {id: user.id, email: user.email}, token});
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
            if(company) {
                tokenPayload.companyId = company.id;
            }
            const employer = await prisma.employer.findFirst({
                where: {userId: user.id}
            });
            if(employer) {
                tokenPayload.employerId = employer.id;
            }
        }
        
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {expiresIn: "1h"});
        
        res.status(200).json({success: true, message: "Login successful", user: {id: user.id, email: user.email, role: user.role, companyId: tokenPayload.companyId}, employerId: tokenPayload.employerId, token});
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
        res.status(200).json({success: true, message: "Logout successful"});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during logout"});
    }
};
