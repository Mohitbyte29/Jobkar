import argon from "argon2";
import { PrismaClient } from "@prisma/client";
import { getUserByEmail } from "../services/auth.services.js";
const prisma = new PrismaClient();
import { loginSchema, registerSchema } from "../validators/auth.validators.js";

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
        
        const {name, email, password} = result.data;
        
        const existingUser = await getUserByEmail(email);
        
        if(existingUser) {
            return res.status(400).json({success: false, message: "Email already registered"});
        }
        
        const hashedPassword = await argon.hash(password);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
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
        const passwordMatch = await argon.verify(user.password, password);
        if(!passwordMatch) {
            return res.status(400).json({success: false, message: "Email or Password is Incorrect"});
        }
        
        res.status(200).json({success: true, message: "Login successful", user: {id: user.id, email: user.email, password: user.password}});
        next();
    } catch(error) {
        console.error(error);
        res.status(500).json({success: false, message: "Server error during login"});
    }
};

