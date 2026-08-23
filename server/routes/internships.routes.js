import { Router } from "express";
import { createInternship, deleteInternship, getInternshipById, getInternships, getSavedInternships, removeSavedInternship, saveInternship, searchInternships, updateInternship } from "../controllers/internships.controller.js";
import { authenticateEmployer, authenticateJobSeeker, isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/internships/search', searchInternships);
router.get('/api/internships', getInternships);
router.post('/api/internships', isAuthenticated, authenticateEmployer, createInternship);
router.get('/api/internships/saved', isAuthenticated, authenticateJobSeeker, getSavedInternships);
router.get('/api/internships/:id', getInternshipById);
router.delete('/api/internships/:id', deleteInternship);
router.patch('/api/internships/:id', updateInternship);
router.post('/api/internships/:id/save', isAuthenticated, authenticateJobSeeker, saveInternship);
router.delete('/api/internships/:id/save', isAuthenticated, authenticateJobSeeker, removeSavedInternship);


export const internshipsRoutes = router;

