import { Router } from "express";
import { deleteUser, getAllUsers, getCompaniesForAdmin, getJobsForAdmin, getUserById, updateCompanyStatus } from "../controllers/admin.controller.js";
import { deleteCompany } from "../controllers/company.controller.js";
import { authenticateAdmin } from "../middlewares/middleware.js";
const router = new Router();

router.get('/api/admin/users', authenticateAdmin, getAllUsers);
router.get('/api/admin/users/:id', authenticateAdmin, getUserById);
router.delete('/api/admin/users/:id', authenticateAdmin, deleteUser);
router.get('/api/admin/jobs', authenticateAdmin, getJobsForAdmin);
router.get('/api/admin/companies', authenticateAdmin, getCompaniesForAdmin);
router.delete('/api/admin/companies/:id', authenticateAdmin, deleteCompany);
router.patch('/api/admin/companies/:id/status', authenticateAdmin, updateCompanyStatus);

export const adminRoutes = router;