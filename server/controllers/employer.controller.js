import { PrismaClient } from "@prisma/client";
import { loginSchema } from "../validators/auth.validators";
import { getEmployerByEmail, verifyPassword } from "../services/auth.services";
const prisma = new PrismaClient();

export const createEmployer = async(req, res) => {
    try{
        const result = loginSchema.safeParse(req.body);
        if(!result.success){
            const errors = result.error.issues.map(issue => {
                return {
                    field: issue.path.join('.'),
                    message: issue.message
                }
            })
            return res.status(400).json({success: false, message: "Validation failed", errors});
        }
        else{
            if(result.data.role !== "EMPLOYER"){
                return res.status(400).json({success: false, message: "Role must be EMPLOYER"});
            }
            else{
                const employer = await prisma.employer.create({
                    data: {
                        userId: req.user.id
                    }
                })
            }
        }
    }
}

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


