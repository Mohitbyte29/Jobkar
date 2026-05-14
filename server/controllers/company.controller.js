import { PrismaClient } from "@prisma/client";
import { authenticateAdmin } from "../middlewares/middleware.js";
const prisma = new PrismaClient();

export const getCompanies = async(req, res) => {
    try{
        const companies = await prisma.company.findMany({
            where: {companyStatus: "ACTIVE"},
            select: {id: true, name: true, description: true, website: true, logo: true, createdAt: true}
        })
        
        res.json({companies, count: companies.length});
        
    } catch(error){ 
        console.log(error);
        res.status(500).json({ error: "Failed to fetch companies" });
    }
}

export const getCompanyById = async(req, res) => {
    try{
        const company = await prisma.company.findUnique({
            where: {id: Number(req.params.id)},
            select: {
                id: true, name: true, description: true, website: true, logo: true, createdAt: true,
                jobs: {select: {id: true, title: true, location: true, type: true, createdAt: true}}
            }
        })
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }
        res.json({company});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to fetch company details" });
    }
}

export const deleteCompany = async(req, res) => {
    try{
        const company = await prisma.company.findUnique({
            where: {id: Number(req.params.id)}
        })
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }
        await prisma.company.delete({ where: { id: company.id } });
        res.json({message: "Company deleted successfully"});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to delete company" });
    } 
}

export const createCompany = async(req, res) => {
    try{
        const {name, description, logo, website, location} = req.body;
        
        const company = await prisma.company.create({
            data: {
                name,
                description,
                logo,
                website,
                location,
                user: { connect: { id: req.user.id } }
            }
        });
        res.json({company});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to create company" });
    }
}

export const updateCompany = async(req, res) => {
    try{
        const {name, description, logoUrl, website, location} = req.body;
        const company = await prisma.company.findUnique({
            where: {id: Number(req.params.id)}
        })
        if (!company) {
            return res.status(404).json({ error: "Company not found" });
        }
        const updatedCompany = await prisma.company.update({
            where: {id: company.id},
            data: {
                name: name || company.name,
                description: description || company.description,
                logoUrl: logoUrl || company.logoUrl,
                website: website || company.website, 
                location: location || company.location,
            }
        })
        res.json({company: updatedCompany});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to update company" });
    }
}