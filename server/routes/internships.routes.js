import { Router } from "express";
import { createInternship, deleteInternship, getInternshipById, getInternships, searchInternships, updateInternship } from "../controllers/internships.controller.js";
import { authenticateEmployer, isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/internships', getInternships);
router.get('/api/internships/search', searchInternships);
router.get('/api/internships/:id', getInternshipById);
router.post('/api/internships', isAuthenticated, authenticateEmployer, createInternship);
router.patch('/api/internships/:id', updateInternship);
router.delete('/api/internships/:id', deleteInternship);

export const internshipsRoutes = router;

