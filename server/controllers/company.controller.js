import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getCompanies = async(req, res) => {
    try{
        const companies = await prisma.company.findMany({
            select: {id: true, name: true, description: true, website: true, logoUrl: true, createdAt: true}
        })
        res.json({companies});
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
                id: true, name: true, description: true, website: true, logoUrl: true, createdAt: true,
                jobs: {select: {id: true, title: true, location: true, type: true, createdAt: true}}
            }
        })
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
        await prisma.company.delete(company.id);
        res.json({message: "Company deleted successfully"});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to delete company" });
    } 
}

export const createCompany = async(req, res) => {
    try{
        const {id, name, description, logoUrl, website, location} = req.body;
        const company = await prisma.company.create({
            data: {
                id,
                name,
                description,
                logoUrl,
                website,
                location
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