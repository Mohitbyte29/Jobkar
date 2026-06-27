import { Router } from "express";
import { createInternship, deleteInternship, getInternshipById, getInternships, searchInternships, updateInternship } from "../controllers/internships.controller";
import { authenticateEmployer, isAuthenticated } from "../middlewares/middleware";

const router = new Router();

router.get('api/internships', getInternships);
router.get('api/interships/search', searchInternships);
router.get('api/internships/:id', getInternshipById);
router.post('api/internships', isAuthenticated, authenticateEmployer, createInternship);
router.update('api/internships/:id', updateInternship);
router.delete('api/internships/:id', deleteInternship);

export const internshipsRouter = router();