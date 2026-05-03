import { PrismaClient } from "@prisma/client";
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

