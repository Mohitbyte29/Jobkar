import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export const getExperience = async ( req, res) => {
//     try {
//         const experience = await prisma.experience.findMany({
//             where: {
//                 userId: req.user.id,
//             },
//         });
//         return res.json({ experience });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// }

export const getExperienceById = async (req, res) => {
    console.log(req.params)
    try {
        const experience = await prisma.experience.findUnique({
            where: {
                userId: Number(req.params.userId),
            },
        });
        return res.json({ experience });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error', message: error.message });
    }   
}

export const createExperience = async (req, res) => {
    try {
        const { userId, jobTitle, company, startDate, endDate, city, country, roleDescription } = req.body;    
        const experience = await prisma.experience.upsert({
            where: {
                userId: Number(req.params.userId),
            },
            update: {
                jobTitle,
                companyName: company,
                startDate,
                endDate,
                city,
                country,
                description: roleDescription,
            },
            create: {
                jobTitle,
                companyName: company,
                startDate,
                endDate,
                city,
                country,
                description: roleDescription,
                userId: Number(req.params.userId)
            }
        });
        return res.json({ experience });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const updateExperience = async (req, res) => {
    try {
        const { jobTitle, company, startDate, endDate, city, country, roleDescription } = req.body;
        const experience = await prisma.experience.updateMany({
            where: {
                userId: req.user.id,
            },
            data: {
                jobTitle,
                company,
                startDate,
                endDate,
                city,
                country,
                roleDescription,
            }
        });
        return res.json({ experience });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }   
}
