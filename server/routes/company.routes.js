import { Router } from "express";
import { createCompany, deleteCompany, getCompanies, getCompanyById, searchCompanies, updateCompany } from "../controllers/company.controller.js";
import { authenticateEmployer, isAuthenticated } from "../middlewares/middleware.js";
import upload from "../config/multer.js";

const router = new Router();                    

router.get('/api/companies', getCompanies);
router.get('/api/companies/search', searchCompanies);
router.get('/api/companies/:id', getCompanyById);
router.post('/api/company', authenticateEmployer,upload.single("logo"), createCompany);
router.delete('/api/company/:id', authenticateEmployer, deleteCompany);
router.patch('/api/company/:id', authenticateEmployer, updateCompany);

export const companyRoutes = router;



