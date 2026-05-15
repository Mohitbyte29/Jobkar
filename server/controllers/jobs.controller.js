import { JobStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const jobs = [
    { id: 1, title: "App Developer", category: "Engineering", location: "Delhi" },
  { id: 2, title: "App Tester", category: "QA", location: "Mumbai" },
  { id: 3, title: "Frontend Developer", category: "Engineering", location: "Bangalore" },
  { id: 4, title: "Backend Developer", category: "Engineering", location: "Hyderabad" },
  { id: 5, title: "UI/UX Designer", category: "Design", location: "Pune" },
  { id: 6, title: "DevOps Engineer", category: "Engineering", location: "Chennai" },
  { id: 7, title: "Software Tester", category: "QA", location: "Noida" },
  { id: 8, title: "Data Analyst", category: "Analytics", location: "Gurgaon" },
  { id: 9, title: "Project Manager", category: "Management", location: "Kolkata" },
  { id: 10, title: "Mobile App Designer", category: "Design", location: "Ahmedabad" },
  { id: 11, title: "Cloud Engineer", category: "Engineering", location: "Jaipur" },
  { id: 12, title: "Cyber Security Analyst", category: "Security", location: "Lucknow" },
  { id: 13, title: "Machine Learning Engineer", category: "AI/ML", location: "Indore" },
  { id: 14, title: "HR Executive", category: "Human Resources", location: "Bhopal" },
  { id: 15, title: "Database Administrator", category: "Database", location: "Chandigarh" }
]
export const jobSearch = async(req, res) => {
    try{
        const q = (req.query.q || "").toLowerCase();
        const location = (req.query.locations || "").toLowerCase();
        if(!q && !location) return res.json([]);
        let results = jobs;
        if(q){
            results = results.filter(job => job.title.toLowerCase().includes(q) || job.category.toLowerCase().includes(q));
        }
        if(location){
            results = results.filter(job => job.location.toLowerCase().includes(location));
        }
        res.json(results.slice(0, 10));
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
            limit = 10,
        } = req.query;
        const where = {
            status: JobStatus.ACTIVE,
            ...(type && { type }),
            ...(location && { location: {contains: location, mode: "insensitive"}}),
            ...(search && {
                OR: [
                    { title: { contains: search, mode: "insensitive" } },
                    { location: { contains: search, mode: "insensitive" } },
                    { description: { contains: search, mode: "insensitive" } },
                    { company: { contains: search, mode: "insensitive" } },
                ]
            })
        };

        const [jobs, total] = await Promise.all([
            prisma.job.findMany({
                where,
                skip: (Number(page) - 1) * Number(limit),
                take: Number(limit),
                select: {
                    id: true, title: true, company: true, location: true, type: true, createdAt: true, _count: {select: {applications: true}},
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
                // tags: {select: { tag: {select: { name: true }} } },
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
        const { title, description, location, type, salaryMax, salaryMin, requirements, tags, remote, status } = req.body;
        const companyId = req.user.companyId;
        const userId = req.user.id;
        
        if(!companyId) {
            return res.status(400).json({error: "Company ID not found. User must be associated with a company"});
        }
        
        const company = await prisma.company.findFirst({
            where: {id: parseInt(companyId),
                UserId: req.user.id}
            })
            if(!company){
                return res.status(404).json({error: "Company not found for the employer"});
            }
            
        const job = await prisma.job.create({
            data: {
                ...req.body,
                company: { connect: { id: companyId } },
                employer: { connect: {id: userId}},
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
        prisma.job.update({
            where: job.id,
            data: {
                ...req.body,
                status: req.body.status || job.status,
                minSalary: req.body.minSalary || job.minSalary,
                maxSalary: req.body.maxSalary || job.maxSalary,
            },
        })
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
        await prisma.job.delete(job.id);
        res.json({message: "Job deleted successfully"});
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Failed to delete job"});
    }
}


