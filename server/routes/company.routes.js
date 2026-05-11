import { Router } from "express";
import { createCompany, deleteCompany, getCompanies, getCompanyById, updateCompany } from "../controllers/company.controller.js";
import { authenticateEmployer, isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/companies', getCompanies);
router.get('/api/companies/:id', getCompanyById);
router.post('/api/companies',isAuthenticated, authenticateEmployer, createCompany);
router.delete('/api/companies/:id',isAuthenticated, authenticateEmployer, deleteCompany);
router.patch('/api/companies/:id',isAuthenticated, authenticateEmployer, updateCompany);

export const companyRoutes = router;

