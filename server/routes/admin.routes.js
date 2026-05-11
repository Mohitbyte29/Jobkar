import { Router } from "express";
import { deleteUser, getAllUsers, getCompaniesForAdmin, getJobsForAdmin, getUserById, updateCompanyStatus } from "../controllers/admin.controller.js";
import { deleteCompany } from "../controllers/company.controller.js";
const router = new Router();

router.get('/api/admin/users', getAllUsers);
router.get('/api/admin/users/:id', getUserById);
router.delete('/api/admin/users/:id', deleteUser);
router.get('/api/admin/jobs', getJobsForAdmin);
router.get('/api/admin/companies', getCompaniesForAdmin);
router.delete('/api/admin/companies/:id', deleteCompany);
router.patch('/api/admin/companies/:id/status', updateCompanyStatus);

export const adminRoutes = router;