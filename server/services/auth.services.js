import { PrismaClient } from "@prisma/client";
import argon from "argon2";
const prisma = new PrismaClient(); 

export const getUserByEmail = async (email) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;
    }catch(err){
        console.log(err);
    }
};

export const hashedPassword = async (password) => {
    try{
        const hashed = await argon.hash(password);
        return hashed;
    }catch(err){
        console.log(err);
    }
}   

export const verifyPassword = async (hashedPassword, password) => {
    try{
        const isMatch = await argon.verify(hashedPassword, password);
        return isMatch;
    }catch(err){
        console.log(err);
    }
}

export const getEmployerByEmail = async (email) => {
    try{
        const employer = await prisma.employer.findUnique({
            where: {
                email
            }
        });
        return employer;
    }   catch(err){ 
        console.log(err);
    }
}