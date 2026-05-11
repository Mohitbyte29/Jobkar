import { Router } from "express";
import { createCompany, deleteCompany, getCompanies, getCompanyById, updateCompany } from "../controllers/company.controller.js";
import { authenticateEmployer } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/companies', getCompanies);
router.get('/api/companies/:id', getCompanyById);
router.post('/api/companies', authenticateEmployer, createCompany);
router.delete('/api/companies/:id', deleteCompany);
router.patch('/api/companies/:id', updateCompany);

export const companyRoutes = router;

