import { companyStatus, JobStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const jobSearch = async(req, res) => {
    try{
        const q = (req.query.q || "").toLowerCase();
        const location = (req.query.location || "").toLowerCase();
        const category = (req.query.category || "").toLowerCase();
        if(!q && !location && !category) return res.json([]);
                 const jobs = await prisma.job.findMany({
                    
            where: {
                AND: [
                    q ? {
                        OR: [
                            { title: { contains: q } }
                        ],
                    } : {},
                    location
                        ? { location: { contains: location } }
                        : {},
                    category
                        ? { category: { contains: category } }
                        : {},
                ],
            },
            take: 15,
            select: {
                id: true,
                title: true,
                company: {
                    select: {
                        name: true,
                        description: true,
                        location: true,
                        website: true,
                        companyStatus: true,
                        logo: true,
                    },
                },
                category: true,
                location: true,
                salaryMin: true,
                salaryMax: true,
                updatedAt: true,
                type: true,
                tags: true,
            },
        });
        let results = jobs;
        if(q){
            results = results.filter(job => (job.title?.toLowerCase().includes(q) || job.category?.toLowerCase().includes(q)));
        }   
        if(location){
            results = results.filter(job => job.location?.toLowerCase().includes(location));
        }
        if(category){
            results = results.filter(job => job.category?.toLowerCase().includes(category));
        }
        const uniqueResults = Array.from(new Map(results.map(j => [j.id, j])).values());
        
        res.json(uniqueResults);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to search jobs"});
    }
}


export const getJobs = async(req, res) => {
    try{
        const {
            search, 
            type,
            location,
            page = 1,
            limit = 15,
        } = req.query;
        const where = {
            status: JobStatus.ACTIVE,
            ...(type && { type }),
            ...(location && { location: {contains: location}}),
            ...(search && {
                OR: [
                    { title: { contains: search } },
                    { location: { contains: search } },
                    { description: { contains: search } },
                    { company: { contains: search } },
                ]
            })
        };

        const [jobs, total] = await Promise.all([
            prisma.job.findMany({
                where,
                skip: (Number(page) - 1) * Number(limit),
                take: Number(limit),
                select: {
                    id: true, 
                    title: true, 
                    company: {select: {name: true, description: true, location: true, website: true, companyStatus: true, logo: true}}, 
                    location: true, 
                    type: true, 
                    salaryMin: true,
                    salaryMax: true,
                    createdAt: true,
                    updatedAt: true, 
                    category: true,
                    _count: {select: {applications: true}},
                    tags: {select: { tag: {select: { name: true }} }}
                }
            }),
            prisma.job.count({ where })
        ])

        res.json({
            jobs,
            pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / Number(limit)),
      },
        })
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getJobById = async(req, res) => {
    try{
        const job = await prisma.job.findUnique({
            where: {id: Number(req.params.id)},
            include: {
                employer: {select: {name: true, email: true}},
                _count: {select: {applications: true}},
            }
        })
        if(!job || job.status === JobStatus.DRAFT){
            return res.status(404).json({error: "Job not found"});
        }
        res.json(job);
    } catch(error){
        console.log(error);
        res.status(500).json({ error: "Failed to fetch job" });
    }
}

export const createJob = async(req, res) => {
    try{
        const { title, description, location, type, salaryMax, salaryMin, requirements, tags, remote, status, category, companyId} = req.body;
        const employerId = req.user.employerId;
        if(!companyId) {
            return res.status(400).json({error: "Company ID not found. User must be associated with a company"});
        }
        if(!employerId) {
            return res.status(400).json({error: "Employer ID not found. User must be an employer"});
        }
        
        const company = await prisma.company.findUnique({
            where: {id: parseInt(companyId),
                UserId: req.user.id}
            })
            if(!company){
                return res.status(404).json({error: "Company not found for the employer"});
            }
            
        const job = await prisma.job.create({
            data: {
                title,
                description,
                location,
                type,
                salaryMax,
                salaryMin,
                requirements,
                tags,
                remote,
                status,
                category,
                company: { connect: { id: companyId } },
                employer: { connect: {id: employerId}},
            },
            include: { company: true },
        });
        res.status(201).json(job);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
}

export const updateJob = async(req, res) => {
    try{
        const { status, minSalary, maxSalary,  } = req.body;
        const job = await prisma.job.findUnique({
            where: {id: Number(req.params.id)}
        })
        const updated = await prisma.job.update({
            where: {id: job.id},
            data: {
                ...req.body,
                status: req.body.status || job.status,
                minSalary: req.body.minSalary || job.minSalary,
                maxSalary: req.body.maxSalary || job.maxSalary,
            },
        });
        res.json(updated);
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Failed to update job"});
    }
}

export const deleteJob = async(req, res) => {
    try{
        const job = await prisma.job.findUnique({
            where: {id: Number(req.params.id)}
        })
        await prisma.job.delete({where: {id: job.id}});
        res.json({message: "Job deleted successfully"});
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Failed to delete job"});
    }
}

export const saveJob = async(req, res) => {
    const jobId = parseInt(req.params.id);
    const userId = req.user.id;
    try{
        const alreadySaved = await prisma.savedJobs.findUnique({
            where: {
                userId_jobId: {
                    userId,
                    jobId
                }
            }
        });

        if (alreadySaved) {
            return res.status(400).json({ error: "Job already saved" });
        }

        const savedJobs = await prisma.savedJobs.create({
            data:{
                userId,
                jobId,
            },
        });

        res.json(savedJobs);
    }
    catch(error){
        res.status(500).json({error: "Failed to save job", message: error.message});
    }
} 

export const getSavedJobs = async(req, res) => {
    try{
        const savedJobs = await prisma.savedJobs.findMany({
            where: {userId: req.user.id},
            include: {
                job: {
                    include: {
                        company: true,
                    }
                }
            }
        }),
        } catch(error){
            res.status(500).json({error: "Failed to fetch saved jobs", message: error.message});
        }
}

export const removeSavedJob = async(req, res) => {
    const jobId = parseInt(req.params.id);
    const userId = req.user.id;
    try{
        const savedJob = await prisma.savedJobs.findUnique({
            where: {
                userId_jobId: {
                    userId,
                    jobId
                }
            }
        });

        if (!savedJob) {
            return res.status(404).json({ error: "Saved job not found" });
        }

        await prisma.savedJobs.delete({
            where: {
                userId_jobId: {
                    userId,
                    jobId
                }
            }
        });
        res.json({ message: "Job removed from saved list" });
    }
    catch(error){
        res.status(500).json({error: "Failed to remove saved job", message: error.message});
    }
}



