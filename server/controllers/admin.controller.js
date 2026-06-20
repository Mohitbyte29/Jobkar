import { companyStatus, PrismaClient } from "@prisma/client"
import { authenticateAdmin } from "../middlewares/middleware.js";
const prisma = new PrismaClient();

export const getAllUsers = async(req, res) => {
    try{
        const users = await prisma.user.findMany();
        await authenticateAdmin(req, res, next);
        res.json({users});
        next();
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
}

export const getUserById = async(req, res) => {
    try{
        const user = await prisma.user.findMany({
            where: {id: Number(req.params.id)},
            select: {id: true, name: true, email: true, avatarUrl: true, isEmailValid: true, createdAt: true}
        })
        await authenticateAdmin(req, res, next);
        next();
        res.json({user});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to fetch user details" });
    }
}

export const deleteUser = async(req, res) => {
    try{
        const user = await prisma.user.findUnique({
            where: {id: Number(req.params.id)},
        })
        await prisma.user.delete({
            where: {id: user.id}
        });
        res.json({message: "User deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to delete user" });
    }
}

export const getJobsForAdmin = async(req, res) => {
    try{
        const jobs = await prisma.job.findMany();
        await authenticateAdmin(req, res, next);
        res.json({jobs});
        next();
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
}

export const getCompaniesForAdmin = async(req, res) => {
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const { status, search } = req.query;

        const where = {
            ...status && { companyStatus: status },
            ...search && { name: { contains: search } }
        };

        const [companies, total] = await Promise.all([
            prisma.company.findMany({
                where,
                select: {id: true, name: true, description: true, website: true, logoUrl: true, createdAt: true, companyStatus: true},
                skip,
                take: limit
            }),
            prisma.company.count({ where })
        ]);
        await authenticateAdmin(req, res, next);
        res.json({ companies, pagination: { total, page, totalPages: Math.ceil(total / limit) } });
        next();
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to fetch companies" });
    }
}

export const updateCompanyStatus = async(req, res) => {
    try{
        await authenticateAdmin(req, res, next);
        const { status } = req.body;
        if(!["ACTIVE", "INACTIVE"].includes(status)){
            return res.status(400).json({ error: "Invalid status value" });
        }
        const updatedCompany = await prisma.company.update({
            where: {id: Number(req.params.id)},
            data: { companyStatus: status },
            select: {id: true, name: true, description: true, website: true, logoUrl: true, createdAt: true, companyStatus: true}
        })
        res.json({company: updatedCompany});
        next();
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to update company status" });
    }
}

export const deleteCompany = async(req, res) => {
    try{
        const company = await prisma.company.findUnique({
            where: {id: Number(req.params.id)}
        })
        await prisma.company.delete({
            where: {id: company.id}
        })
        res.json({message: "Company deleted successfully"});
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to delete company" });
    }
}

