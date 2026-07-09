import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const getMyProfile = async(req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {id: req.user.id},
            select: {id: true, name: true, email: true, avatar: true, isOnboarded: true, createdAt: true, updatedAt: true}
        })
        return res.json({user, success: true});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to fetch My profile" });
    }
}   

export const updateMyProfile = async(req, res) => {
    try{
        const {name, email, password, avatar, resume} = req.body;
        const updatedUser = await prisma.user.update({
            where: {id: req.user.id},
            data: {
                name,
                email,
                password,
                avatar,
                resume
            },
            select: {id: true, name: true, email: true, avatar: true, isOnboarded: true, createdAt: true, updatedAt: true}
        });
        return res.json({user: updatedUser});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to update My profile" });
    }
}

export const deleteMyProfile = async(req, res) => {
    try{
        const deletedUser = await prisma.user.delete({
            where: {id: req.user.id},
            select: {id: true, name: true, email: true, avatar: true, isOnboarded: true, createdAt: true, updatedAt: true}
        })
        return res.json({user: deletedUser});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to delete My profile" });
    }
}

export const completeOnboarding = async (req, res) => {
  try {
    await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        isOnboarded: true,
      },
    });

    res.json({
      success: true,
      message: "Onboarding completed",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};