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
    try {
        const experience = await prisma.experience.findMany({
            where: {
                userId: req.user.id,
            },
        });
        return res.json({ experience });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }   
}

export const createExperience = async (req, res) => {
    try {
        const { userId, jobTitle, company, startDate, endDate, city, country, roleDescription } = req.body;    
        const experience = await prisma.experience.create({
            data: {
                jobTitle,
                companyName: company,
                startDate,
                endDate,
                city,
                country,
                description: roleDescription,
                userId
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
