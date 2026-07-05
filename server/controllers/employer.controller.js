import { PrismaClient } from "@prisma/client";
import { loginSchema } from "../validators/auth.validators";
import { getEmployerByEmail, verifyPassword } from "../services/auth.services";
const prisma = new PrismaClient();

export const getEmployerProfile = async (req, res) => {
    try{
        const employerId = req.user.id;
        const employer = await prisma.user.findUnique({
            where: { id: employerId },
        })
        res.json(employer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


