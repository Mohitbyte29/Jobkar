import { PrismaClient } from "@prisma/client";
import cloudinary from "../config/cloudinary.js";
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
        const { jobId } = req.body;
        const existingApplicant = await prisma.application.findFirst({
            where: { jobId: jobId },
        });
        // if(existingApplicant) {
        //     return res.status(400).json({ error: "Application already exists for this user" });
        // }
        const application = await prisma.application.create({
            data: {                    
                user: {
                    connect: {email: req.user.email}
                }, job: jobId ? { connect: { id: jobId } } : undefined,
            }
        });
        res.json({application});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to create application"    
            });
    }
}

export const updateApplication = async(req, res) => {
    try{
        const { name, email, city, country, phoneNumber, resume, github, linkedIn, dribble, behance, status, portfolio } = req.body;
        const application = await prisma.application.upsert({
            where: { id: Number(req.params.id) },
            update: {
                userId,
                jobId,
                coverLetter,
                resume,
                github,
                linkedin,
                behance,
                status,
                dribble,
                portfolio,
            },
            select: {
                id: true, coverLetter: true, resume: true, createdAt: true,
                job: {select: {id: true, title: true}},
                applicant: {select: {id: true, name: true, email: true, city: true, country: true, phoneNumber: true}}
            },
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

export const createApplicant = async(req, res) => {
    try{
        const { name, city, country, phoneNumber, userprofile } = req.body;
        console.log(req.user)
        const applicant = await prisma.applicant.upsert({
            where: { email: req.user.email },
            update: {
                name, city, country, phoneNumber, userprofile
            },
            create: {
                name, city, country, phoneNumber, user: {
                    connect: {email: req.user.email}
                 }, userprofile
            },
            select: {
                id: true, name: true, email: true, city: true, country: true, phoneNumber: true, user: {select: {id: true, email: true}}
            }
        })
        console.log(req.body)
        res.json({ applicant });
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to create applicant" });
    }
} 

export const updateApplicant = async(req, res) => {
    try{
        const { name, email, city, country, phoneNumber } = req.body;
        const applicant = await prisma.applicant.update({
            where: {id: Number(req.params.id)},
            data: {
                ...req.body
            }
        })
        res.json({ applicant });
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to update applicant" });
    }
}

export const uploadResume = async(req, res) => {
    try{
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const resumeUrl = await cloudinary.uploader.upload(req.file.path, {
            folder: "resume",
            resource_type: "raw",
        });
        const updatedApplication = await prisma.application.update({
            where: { userId: req.user.id },
            data: { resume: resumeUrl.secure_url },
        });
        res.json({ application: updatedApplication, resume: resumeUrl.secure_url });
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to upload resume", message: err.message });
    }
};
