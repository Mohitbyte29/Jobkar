import { PrismaClient } from "@prisma/client";
import { authenticateAdmin } from "../middlewares/middleware.js";
import cloudinary from "../config/cloudinary.js";
const prisma = new PrismaClient();

export const searchCompanies = async (req, res) => {
  try {
    console.log(req.query);
    const c = (req.query.c || "").toLowerCase();
    const location = (req.query.location || "").toLowerCase();
const category = Array.isArray(req.query.category)
  ? req.query.category
  : req.query.category
    ? [req.query.category]
    : [];
        if (!c && !location && category.length === 0) {
      return res.json([]);
    }
    const companies = await prisma.company.findMany({
        where: {
          AND: [
            c
              ? {
                  OR: [{ name: { contains: c } }],
                }
              : {},
            location ? { location: { contains: location } } : {},
            category.length > 0 
            ? {
              category: {
                in: category,
              },
            }
            : {},
          ],
        },
      take: 15,
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        website: true,
        location: true,
        logo: true,
        companyStatus: true,
        createdAt: true,
        _count: { select: { jobs: true } },
      },
    });
    let results = companies;
    if (c) {
      results = results.filter(
        (companies) =>
          companies.name?.toLowerCase().includes(c) ||
          companies.category?.toLowerCase().includes(c),
      );
    }
    if (location) {
      results = results.filter((companies) =>
        companies.location?.toLowerCase().includes(location),
      );
    }
    
    const uniqueResults = Array.from(
      new Map(results.map((j) => [j.id, j])).values(),
    );

    res.json(uniqueResults);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to search companies" , message: err.message });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const companies = await prisma.company.findMany({
      where: { companyStatus: "ACTIVE" },
      select: {
        id: true,
        name: true,
        UserId: true,
        category: true | null,
        description: true,
        website: true,
        logo: true,
        location: true,
        createdAt: true,
        _count: { select: { jobs: true } },
      },
    });

    res.json({ companies, count: companies.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const company = await prisma.company.findUnique({
      where: { id: Number(req.params.id) },
      select: {
        id: true,
        name: true,
        description: true,
        website: true,
        logo: true,
        createdAt: true,
        jobs: {
          select: {
            id: true,
            title: true,
            location: true,
            type: true,
            createdAt: true,
          },
        },
      },
    });
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.json({ company });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch company details" });
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const company = await prisma.company.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    await prisma.company.delete({ where: { id: company.id } });
    res.json({ message: "Company deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete company" });
  }
};

export const createCompany = async (req, res) => {
  console.log(req.file);
  try { 
    const { name, description, website, category, country, city, companyStatus } = req.body;
    let logoUrl = null;
    if(req.file){
      const uploadedLogo = await cloudinary.uploader.upload(req.file.path, {
        folder: "logo",
        resource_type: "raw",
      });
      logoUrl = uploadedLogo.original_filename;
    }
    const company = await prisma.company.create({
      data: {
        name,
                description,
                website,
                category,
                companyStatus,
                logo: logoUrl,
                location: `${city}, ${country}`,
        user: { connect: { id: req.user.id } },
      },
    });
    console.log(req.user);
    const employer = await prisma.employer.update({
      data: {
        companyId: company.id,
      },
      where: {
        userId: req.user.id,
      },
    });
    res.json({ company });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create company" });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, logoUrl, website, location } = req.body;
    const company = await prisma.company.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }
    const updatedCompany = await prisma.company.update({
      where: { id: company.id },
      data: {
        name: name || company.name,
        description: description || company.description,
        logoUrl: logoUrl || company.logoUrl,
        website: website || company.website,
        location: location || company.location,
      },
    });
    res.json({ company: updatedCompany });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update company" });
  }
};

export const uploadLogo = async (req, res) => {
  
      try{
              if (!req.file) {
                  return res.status(400).json({ error: "No file uploaded" });
              }
              const logoUrl = await cloudinary.uploader.upload(req.file.path, {
                  folder: "logo",
                  resource_type: "raw",
              });
              const updatedCompany = await prisma.company.create({
                  
                    data: {
                      logo: logoUrl.original_filename,
                    }
                  
              });
              res.json({ company: updatedCompany });
          } catch(err){
              console.log(err);
              res.status(500).json({ error: "Failed to upload logo", message: err.message });
          }
        }

export const updateLogo = async (req, res) => {
  
      try{
              if (!req.file) {
                  return res.status(400).json({ error: "No file uploaded" });
              }
              const logoUrl = await cloudinary.uploader.upload(req.file.path, {
                  folder: "logo",
                  resource_type: "raw",
              });
              const updatedCompany = await prisma.company.update({
                  where: { id: Number(req.params.id) },
                  data: {
                      logo: logoUrl.original_filename,
                  }
              });
              res.json({ company: updatedCompany });
          } catch(err){
              console.log(err);
              res.status(500).json({ error: "Failed to update logo", message: err.message });
                }
              }
