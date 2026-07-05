import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";

export const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({success: false, message: 'Unauthorized, JWT token is require'});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(err){
        console.log(err);
        return res.status(403).json({message: 'Unauthorized, JWT token is wrong or expired'})
    }
}

export const authenticateAdmin = (req, res, next) => {
    try{
        const role = prisma.user.findUnique({
        where: {role: "ADMIN"},
        select: {role: true}
        })
        if(role !== "ADMIN"){
            return res.status(403).json({message: "Access denied. Admins only."});
        }
        next();
    } catch(error) {
        console.log(error);
        return res.status(500).json({message: "Server error during admin authentication"});
    }
}

export const authenticateEmployer = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Unauthorized, JWT token is required"
            });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        const role = req.user.role;
        if(role !== "EMPLOYER"){
            return res.status(403).json({message: "Access denied. Employers only."});
        }
        next();
    } catch(error) {
        console.log(error);
        return res.status(500).json({message: "Server error during employer authentication"});
    }
}

export const authenticateJobSeeker = (req, res, next) => {
    try{
        const role = prisma.user.findUnique({
            where: {role: "SEEKER"},
            select: {role: true}
        })
        if(role !== "SEEKER"){
            return res.status(403).json({message: "Access denied. Job Seekers only."});
        }
        next();
    } catch(error){
        console.log(error);
        return res.status(500).json({message: "Server error during job seeker authentication"});
    }
}




