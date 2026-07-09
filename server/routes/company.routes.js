import { Router } from "express";
import { createCompany, deleteCompany, getCompanies, getCompanyById, searchCompanies, updateCompany } from "../controllers/company.controller.js";
import { authenticateEmployer, isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/companies', getCompanies);
router.get('/api/companies/search', searchCompanies);
router.get('/api/companies/:id', getCompanyById);
router.post('/api/companies', authenticateEmployer, createCompany);
router.delete('/api/companies/:id', authenticateEmployer, deleteCompany);
router.patch('/api/companies/:id', authenticateEmployer, updateCompany);

export const companyRoutes = router;

