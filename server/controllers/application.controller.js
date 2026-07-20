import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getApplications = async(req, res) => {
    try{
        const applications = await prisma.application.findUnique({
            where: {id: Number(req.params.id)},
            select: {
                id: true, coverLetter: true, resumeUrl: true, createdAt: true,
            }
        })
        res.json({applications});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to fetch application details" 
        })
    }
}

export const getApplicationById = async(req, res) => {
    try{
        const application = await prisma.application.findUnique({
            where: {id: Number(req.params.id)},
            select: {
                id: true, coverletter: true, resumeUrl: true, createdAt: true,
                job: {select: {id: true, title: true}},
                applicant: {select: {id: true, name: true, email: true}}
            },
        })
            res.json({application});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to fetch application details" });
    }
}

export const createApplication = async(req, res) => {
    try{
        const { name, email, city, resumeUrl} = req.body;
        const application = await prisma.application.create({
            data: {
                userId,
                jobId,
                coverLetter,
                resumeUrl,
                status
            },
            select: {
                id: true, coverLetter: true, resumeUrl: true, createdAt: true,
                job: {select: {id: true, title: true}},
                applicant: {select: {id: true, name: true, email: true}}
            }
        });
        res.json({application});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to create application"    
            });
    }
}

export const deleteApplication = async(req, res) => {
    try{
        const deleted = await prisma.application.delete({
            where: {id: Number(req.params.id)}
        })
        res.json({ deleted });
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to delete application" });
    }
}