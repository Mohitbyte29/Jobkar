import { internshipStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const searchInternships = async (req, res) => {
    console.log(req.query)
  try {
    const q = String(req.query.q || "").toLowerCase();
    const location = String(req.query.location || "").toLowerCase();

    const categories = Array.isArray(req.query.category)
      ? req.query.category
      : req.query.category
        ? [req.query.category]
        : [];

    const types = Array.isArray(req.query.type)
      ? req.query.type
      : req.query.type
        ? [req.query.type]
        : [];

    // Convert selected values to lowercase
    const lowerCategories = categories.map((c) =>
      String(c).toLowerCase()
    );

    const lowerTypes = types.map((t) =>
      String(t).toLowerCase()
    );

    // If no filter/search exists
    if (
      !q &&
      !location &&
      lowerCategories.length === 0 &&
      lowerTypes.length === 0
    ) {
      return res.json([]);
    }

    const internships = await prisma.internship.findMany({
      select: {
        id: true,
        title: true,
        companies: {
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
        internshipStatus: true,
        salaryMin: true,
        salaryMax: true,
        updatedAt: true,
        type: true,
        tags: true,
      },
    });

    let results = internships;

    // Search
    if (q) {
      results = results.filter((internship) =>
        internship.title?.toLowerCase().includes(q) ||
        internship.category?.toLowerCase().includes(q)
      );
    }

    // Location
    if (location) {
      results = results.filter((internship) =>
        internship.location?.toLowerCase().includes(location)
      );
    }

    // Category
    if (lowerCategories.length > 0) {
      results = results.filter((internship) =>
        lowerCategories.includes(internship.category?.toLowerCase())
      );
    }

    // Internship type
    if (lowerTypes.length > 0) {
      results = results.filter((internship) =>
        lowerTypes.includes(internship.type?.toLowerCase())
      );
    }

    // Return maximum 15 results
    results = results.slice(0, 15);

    console.log("Search:", q);
    console.log("Location:", location);
    console.log("Results:", results.length);

    return res.json(results);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      error: "Failed to search internships",
    });
  }
};

export const getInternships = async(req, res) => {
    try{
        const {
            search, 
            type,
            location,
            page = 1,
            limit = 15,
        } = req.query;
        const where = {
            internshipStatus: internshipStatus.ACTIVE,
            ...(type && {type}),
            ...(location && {location : {contains: search}}),
            ...(search && {
                OR: [
                    {title: { contains: search}},
                    {location: { contains: search}},
                    {description: { contains: search}},
                    {companies: { name: { contains: search }}},
                ]
            })
        };

        const [internships, total] = await Promise.all([
             prisma.internship.findMany({
        where,
        select: {
                    id: true, 
                    title: true, 
                    companies: {select: {name: true, description: true, location: true, website: true, companyStatus: true, logo: true}}, 
                    location: true, 
                    type: true, 
                    salaryMin: true,
                    salaryMax: true,
                    internshipStatus: true,
                    createdAt: true,
                    updatedAt: true, 
                    category: true,
                    _count: {select: {applications: true}},
                    tags: {select: { tag: {select: { name: true }} }}
                }
    }), prisma.internship.count({ 
        where
     })
        ])
        res.json({
            internships, total
        })
    }
    catch(err){
        console.log(err);
    }
}

export const getInternshipById = async(req, res) => {
    console.log(req.params)
    try{
            const internship = await prisma.internship.findUnique({
                where: {id: Number(req.params.id)},
                select: {
                id: true, title: true, description: true, location: true, salaryMax: true, salaryMin: true, requirements: true, tags: {select: {tag: {select: {name: true}}}}, remote: true, internshipStatus: true, workType: true, type: true, category: true,
                CompanyId: true,
                employerId: true,
                createdAt: true,
                updatedAt: true,
                companies: {
                    select: {
                        name: true,
                        description: true,
                        location: true,
                        logo: true,
                        website: true,
                        companyStatus: true,
                        logo: true,
                    }
                }
            }
            })
            if(!internship || internship.internshipStatus === internshipStatus.DRAFT){
                return res.status(404).json({error: "Internship not found"});
            }            
            res.json(internship);
        } catch(error){
            console.log(error);
            res.status(500).json({ error: "Failed to fetch internship" });
        }
}


export const createInternship = async(req, res) => {
    try{
        const { title, description, city, country, duration, type, workType, salaryMax, salaryMin, requirements, tags, remote, internshipstatus, category, companyId} = req.body;
        const employerId = req.user.employerId;
        
        if(!companyId) {
            return res.status(400).json({error: "Company ID not found. User must be associated with a company"});
        }
        if(!employerId) {
            return res.status(400).json({error: "Employer ID not found. User must be an employer"});
        }
        
        const company = await prisma.company.findFirst({
            where: {id: parseInt(companyId),
                UserId: req.user.id}
            })
            if(!company){
                return res.status(404).json({error: "Company not found for the employer"});
            }
            
        const internship = await prisma.internship.create({
            data: {
                title,
                description,
                category,
                location: `${city}, ${country}`,
                duration: Number(duration),
                workType,
                salaryMax,
                salaryMin,
                requirements,
                tags,
                remote,
                type,
                internshipStatus: internshipStatus.DRAFT,
                companies: { connect: { id: Number(companyId) } },
                employers: { connect: {id: employerId}},
            },
            include: { companies: true },
        });
        res.status(201).json(internship);
    }
    catch(error){
        res.status(400).json({ message: error.message });
        console.log(error);
    }
}

export const updateInternship = async(req, res) => {
    try{
        const { status, minSalary, maxSalary,  } = req.body;
        const internship = await prisma.internship.findUnique({
            where: {id: Number(req.params.id)}
        })
        const updated = await prisma.internship.update({
            where: {id: internship.id},
            data: {
                ...req.body,
                status: req.body.status || internship.internshipStatus,
                minSalary: req.body.minSalary || internship.minSalary,
                maxSalary: req.body.maxSalary || internship.maxSalary,
            },
        });
        res.json(updated);
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Failed to update internship"});
    }
}

export const deleteInternship = async(req, res) => {
    try{
        const internship = await prisma.internship.findUnique({
            where: {id: Number(req.params.id)}
        })
        await prisma.internship.delete({where: {id: internship.id}});
        res.json({message: "Internship deleted successfully"});
    } catch (error){
        console.log(error);
        res.status(500).json({error: "Failed to delete internship"});
    }
}

    