import { PrismaClient } from "@prisma/client";
import cloudinary from "../config/cloudinary.js";
const prisma = new PrismaClient();

export const getApplications = async(req, res) => {
    try{
        console.log(Number(req.params.userId));
        const applications = await prisma.application.findMany({
            where: { userId: Number(req.params.userId) },
            select: {
                id: true, createdAt: true, coverletter: true, resume: true, portfolio: true, github: true, linkedIn: true, dribble: true, behance: true,
                job: {select: {id: true, title: true, type: true, location: true, salaryMax: true, salaryMin: true, company: {
                    select: {id: true, name: true}
                }}},
                applicant: {select: {id: true, name: true, email: true}}
            },
        })
        res.json(applications);
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to fetch application details" , message: err.message });
    }
}

export const getApplicationById = async(req, res) => {
    console.log(req.params)
    try{
        const application = await prisma.application.findUnique({
            where: {userId: Number(req.params.userId), jobId: Number(req.params.jobId)},
            select: {
                coverletter: true, resume: true, createdAt: true, portfolio: true, github: true, linkedIn: true, dribble: true, behance: true,
                job: {select: {id: true, title: true, type: true, location: true, salaryMax: true, salaryMin: true}},
                applicant: {select: {id: true, name: true, email: true}}
            },
        })
            res.json({application});
    } catch(err){
        console.log(err);
        res.status(500).json({ exrror: "Failed to fetch application details", message: err.message });
    }
}

export const createApplication = async(req, res) => {
    try{
        const { userId, jobId, applicantId, internshipId } = req.body;
        const where = jobId
  ? {
      userId_jobId: {
        userId: req.user.id,
        jobId
      }
    }
  : {
      userId_internshipId: {
        userId: req.user.id,
        internshipId
      }
    };
        const existingApplicant = await prisma.application.findFirst({
            where: { jobId: jobId },
        });
        // if(existingApplicant) {
        //     return res.status(400).json({ error: "Application already exists for this user" });
        // }
        const application = await prisma.application.upsert({
    where: where,

    update: {},

    create: {
        user: {
            connect: {
                email: req.user.email
            }
        },

        applicant: applicantId
            ? {
                connect: {
                    userProfileId: applicantId
                }
            }
            : undefined,

        job: jobId
            ? {
                connect: {
                    id: jobId
                }
            }
            : undefined,

        internship: internshipId
            ? {
                connect: {
                    id: internshipId
                }
            }
            : undefined,
    }
});
        res.json({application});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to create application" , message: err.message });
    }
}


export const updateApplication = async(req, res) => {
    try{
        const { coverletter, resume, github, linkedIn, dribble, behance, status, portfolio } = req.body;
        const application = await prisma.application.update({
            where: { userId: req.user.id, jobId: Number(req.params.jobId) },
            data: {
                coverletter,
                resume,
                github,
                linkedIn,
                behance,
                status,
                dribble,
                portfolio,
            },
            select: {
                id: true, jobId: true, coverletter: true, resume: true, createdAt: true,
                job: {select: {id: true, title: true}}, status: true, github: true, linkedIn: true, dribble: true, behance: true, portfolio: true,
                applicant: {select: {id: true, name: true, email: true, city: true, country: true, phoneNumber: true}}
            },
        });
        res.json({application});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to update application" , message: err.message 
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

export const getApplicantById = async(req, res) => {
    try{
        const applicant = await prisma.applicant.findUnique({
            where: {email: req.user.email},
            select: {
                id: true, userProfileId: true, name: true, email: true, city: true, country: true, phoneNumber: true,
                userprofile: {select: {id: true, fullName: true, profession: true, industry: true, coverImage: true, github: true, linkedIn: true, country: true, city: true, university: true, phoneNumber: true, portfolio: true}}
            }
        })
        res.json({applicant});
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to fetch applicant details", message: err.message });
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
        res.status(500).json({ error: "Failed to create applicant", message: err.message });
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
        const updatedUser = await prisma.user.update({
            where: { id: req.user.id },
            data: { resume: resumeUrl.original_filename },
        });
        res.json({ user: updatedUser, resume: resumeUrl.secure_url });
    } catch(err){
        console.log(err);
        res.status(500).json({ error: "Failed to upload resume", message: err.message });
    }
};
