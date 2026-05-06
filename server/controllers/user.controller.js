import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUserProfile = async(req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {id: req.user.id},
            select: {id: true, name: true, email: true, avatarUrl: true, isEmailValid: true, createdAt: true}
        })
        res.json({user});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to fetch user profile" });
    }
}   

export const updateUserProfile = async(req, res) => {
    try{
        const {name, avatarUrl} = req.body;
        const updatedUser = await prisma.user.update({
            where: {id: req.user.id},
            data: {
                name,
                avatarUrl,
            },
            select: {id: true, name: true, email: true, avatarUrl: true, isEmailValid: true, createdAt: true}
        })
        res.json({user: updatedUser});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to update user profile" });
    }
}

export const deleteUserProfile = async(req, res) => {
    try{
        const deletedUser = await prisma.user.delete({
            where: {id: req.user.id},
            select: {id: true, name: true, email: true, avatarUrl: true, isEmailValid: true, createdAt: true}
        })
        res.json({user: deletedUser});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to delete user profile" });
    }
}
