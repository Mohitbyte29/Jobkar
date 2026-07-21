import { Router } from "express";
import { createApplicant, createApplication, deleteApplication, getApplicationById, getApplications, updateApplicant, uploadResume } from "../controllers/application.controller.js";
import { isAuthenticated } from "../middlewares/middleware.js";
import upload from "../config/multer.js";

const router = new Router();

router.get('/api/applications', isAuthenticated, getApplications);
router.get('/api/applications/:id', isAuthenticated, getApplicationById);
router.post('/api/applications', isAuthenticated, createApplication);
router.delete('/api/applications/:id', isAuthenticated, deleteApplication);
router.post('/api/applicant', isAuthenticated, createApplicant);
router.patch('/api/applicant/:id', isAuthenticated, updateApplicant);
router.patch('/api/applications/resume', isAuthenticated, upload.single('resume'), uploadResume);

export const applicationRoutes = router;