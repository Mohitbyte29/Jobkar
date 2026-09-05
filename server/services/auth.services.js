import { PrismaClient } from "@prisma/client";
import argon from "argon2";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient(); 

export const getUserByEmail = async (email) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;
    } catch (err) {
        console.error("Error in getUserByEmail:", err);
        return null;
    }
};

export const getUserById = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        return user;
    } catch (err) {
        console.error("Error in getUserById:", err);
        return null;
    }
};

export const hashedPassword = async (password) => {
    try {
        const hashed = await argon.hash(password);
        return hashed;
    } catch (err) {
        console.error("Error hashing password:", err);
        throw err;
    }
};

export const verifyPassword = async (hashedPassword, password) => {
    try {
        const isMatch = await argon.verify(hashedPassword, password);
        return isMatch;
    } catch (err) {
        console.error("Error verifying password:", err);
        return false;
    }
};

export const getEmployerByEmail = async (email) => {
    try {
        const employer = await prisma.employer.findUnique({
            where: {
                email
            }
        });
        return employer;
    } catch (err) { 
        console.error("Error in getEmployerByEmail:", err);
        return null;
    }
};

/**
 * Generate a signed JWT token for email verification (valid for 24h)
 */
export const generateVerificationToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        purpose: "email_verification"
    };

    const secret = process.env.JWT_SECRET || "default_jwt_secret";
    return jwt.sign(payload, secret, { expiresIn: "24h" });
};

/**
 * Verify and decode an email verification token
 */
export const verifyVerificationToken = (token) => {
    try {
        const secret = process.env.JWT_SECRET || "default_jwt_secret";
        const decoded = jwt.verify(token, secret);
        if (decoded.purpose !== "email_verification") {
            return { valid: false, error: "Invalid token purpose." };
        }
        return { valid: true, decoded };
    } catch (err) {
        return { 
            valid: false, 
            error: err.name === "TokenExpiredError" ? "Verification link has expired." : "Invalid verification link." 
        };
    }
};