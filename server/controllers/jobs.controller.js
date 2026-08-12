import { companyStatus, JobStatus, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const jobSearch = async (req, res) => {
  console.log("search query: ", req.query.q);
  try {
    const q = req.query.q || "".toLowerCase();
    console.log("query: ", q);
    const location = req.query.location || "".toLowerCase();
    const categories = Array.isArray(req.query.category)
      ? req.query.category
      : req.query.category
        ? [req.query.category]
        : [];

    const modes = Array.isArray(req.query.mode)
      ? req.query.mode
      : req.query.mode
        ? [req.query.mode]
        : [];

    const types = Array.isArray(req.query.type)
      ? req.query.type
      : req.query.type
        ? [req.query.type]
        : [];

    // Convert selected values to lowercase
      
    const lowerCategories = categories.map((c) => String(c).toLowerCase());

    const lowerModes = modes.map((m) => String(m).toLowerCase());

    const lowerTypes = types.map((t) => String(t).toLowerCase());

    // If no filter/search exists
    if (
      !q &&
      !location &&
      categories.length === 0 &&
      modes.length === 0 &&
      types.length === 0
    ) {
      return res.json([]);
    }

    const jobs = await prisma.job.findMany({
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
        mode: true,
        tags: true,
      },
      take: 15,
    });

    let results = jobs;
    // Search
    console.log(q);
    if (q) {
      results = results.filter(
        (job) =>
          job.title?.includes(q) ||
          job.category?.toLowerCase().includes(q),
      );
    }
    // Location
    if (location) {
      results = results.filter((job) =>
        job.location?.toLowerCase().includes(location),
      );
    }
    console.log(results)
    // Category
    if (categories.length > 0) {
      results = results.filter((job) => categories.includes(job.category));
    }

    // Mode
    if (modes.length > 0) {
      results = results.filter((job) => modes.includes(job.mode));
    }

    // Job type
    if (types.length > 0) {
      results = results.filter((job) => types.includes(job.type));
    }

    // Remove duplicate jobs
    const uniqueResults = Array.from(
      new Map(results.map((job) => [job.id, job])).values(),
    );

    res.json(uniqueResults);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Failed to search jobs",
    });
  }
};

export const getJobs = async (req, res) => {
  try {
    const {
      search,
      type,
      location,
      jobType,
      category,
      salaryMin,
      salaryMax,
      mode,
      page = 1,
      limit = 15,
    } = req.query;
    // console.log("QUERY:", req.query);
    const where = {
      status: JobStatus.ACTIVE,
      ...(type && { type }),
      ...(location && { location: { contains: location } }),
      ...(category && { category }),
      ...(salaryMin && { salaryMin: { gte: Number(salaryMin) } }),
      ...(salaryMax && { salaryMax: { lte: Number(salaryMax) } }),
      ...(mode && { mode }),
      ...(search && {
        OR: [
          { title: { contains: search } },
          { location: { contains: search } },
          { description: { contains: search } },
          { company: { contains: search } },
          { type: { contains: search } },
          { category: { contains: search } },
          { mode: { contains: search } },
          { salaryMin: { gte: Number(search) } },
          { salaryMax: { lte: Number(search) } },
        ],
      }),
    };

    const jobTypes = Array.isArray(jobType)
      ? jobType
      : jobType
        ? [jobType]
        : [];

    const categories = Array.isArray(category)
      ? category
      : category
        ? [category]
        : [];

    const modes = Array.isArray(mode) ? mode : mode ? [mode] : [];

    if (jobTypes.length) {
      where.jobType = {
        in: jobTypes,
      };
    }

    if (categories.length) {
      where.category = {
        in: categories,
      };
    }

    if (modes.length) {
      where.mode = {
        in: modes,
      };
    }

    const [jobs, total] = await Promise.all([
      prisma.job.findMany({
        where,
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
          location: true,
          type: true,
          mode: true,
          salaryMin: true,
          salaryMax: true,
          createdAt: true,
          updatedAt: true,
          category: true,
          _count: { select: { applications: true } },
          tags: { select: { tag: { select: { name: true } } } },
        },
      }),
      prisma.job.count({ where }),
    ]);

    res.json({
      jobs,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await prisma.job.findUnique({
      where: { id: Number(req.params.id) },
      // include: {
      //     employer: {select: {companyId: true, userId: true}},
      //     _count: {select: {applications: true}},
      // },
      select: {
        id: true,
        title: true,
        description: true,
        location: true,
        type: true,
        salaryMax: true,
        salaryMin: true,
        requirements: true,
        tags: { select: { tag: { select: { name: true } } } },
        remote: true,
        status: true,
        category: true,
        CompanyId: true,
        employerId: true,
        createdAt: true,
        updatedAt: true,
        company: {
          select: {
            name: true,
            description: true,
            location: true,
            logo: true,
            website: true,
            companyStatus: true,
            logo: true,
          },
        },
      },
    });
    if (!job || job.status === JobStatus.DRAFT) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to fetch job", message: error.message });
  }
};

export const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      city,
      country,
      type,
      salaryMax,
      salaryMin,
      requirements,
      tags,
      remote,
      status,
      category,
      companyId,
    } = req.body;
    const employerId = req.user.employerId;
    if (!companyId) {
      return res.status(400).json({
        error: "Company ID not found. User must be associated with a company",
      });
    }
    if (!employerId) {
      return res
        .status(400)
        .json({ error: "Employer ID not found. User must be an employer" });
    }

    const company = await prisma.company.findUnique({
      where: { id: parseInt(companyId), UserId: req.user.id },
    });
    if (!company) {
      return res
        .status(404)
        .json({ error: "Company not found for the employer" });
    }

    const job = await prisma.job.create({
      data: {
        title,
        description,
        location: `${city}, ${country}`,
        type,
        salaryMax: Number(salaryMax),
        salaryMin: Number(salaryMin),
        requirements,
        tags,
        remote,
        status,
        category,
        company: { connect: { id: companyId } },
        employer: { connect: { id: employerId } },
      },
      include: { company: true },
    });
    res.status(201).json(job);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

export const updateJob = async (req, res) => {
  try {
    const { status, minSalary, maxSalary } = req.body;
    const job = await prisma.job.findUnique({
      where: { id: Number(req.params.id) },
    });
    const updated = await prisma.job.update({
      where: { id: job.id },
      data: {
        ...req.body,
        status: req.body.status || job.status,
        minSalary: req.body.minSalary || job.minSalary,
        maxSalary: req.body.maxSalary || job.maxSalary,
      },
    });
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update job" });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const job = await prisma.job.findUnique({
      where: { id: Number(req.params.id) },
    });
    await prisma.job.delete({ where: { id: job.id } });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};

export const saveJob = async (req, res) => {
  const jobId = parseInt(req.params.id);
  const userId = req.user.id;
  try {
    const alreadySaved = await prisma.savedJobs.findUnique({
      where: {
        userId_jobId: {
          userId,
          jobId,
        },
      },
    });

    if (alreadySaved) {
      return res.status(400).json({ error: "Job already saved" });
    }

    const savedJobs = await prisma.savedJobs.create({
      data: {
        userId,
        jobId,
      },
    });

    res.json(savedJobs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to save job", message: error.message });
  }
};
export const getSavedJobs = async (req, res) => {
  try {
    const savedJobs = await prisma.savedJobs.findMany({
      where: { userId: req.user.id },
      include: {
        job: {
          include: {
            company: true,
          },
        },
      },
    });

    res.json(savedJobs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch saved jobs", message: error.message });
  }
};

export const removeSavedJob = async (req, res) => {
  const jobId = parseInt(req.params.id);
  const userId = req.user.id;
  try {
    const savedJob = await prisma.savedJobs.findUnique({
      where: {
        userId_jobId: {
          userId,
          jobId,
        },
      },
    });

    if (!savedJob) {
      return res.status(404).json({ error: "Saved job not found" });
    }

    await prisma.savedJobs.delete({
      where: {
        userId_jobId: {
          userId,
          jobId,
        },
      },
    });
    res.json({ message: "Job removed from saved list" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to remove saved job", message: error.message });
  }
};
