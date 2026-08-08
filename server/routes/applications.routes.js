import { Router } from "express";
import { createApplicant, createApplication, deleteApplication, getApplicantById, getApplicationById, getApplications, updateApplicant, updateApplication, uploadResume } from "../controllers/application.controller.js";
import { isAuthenticated } from "../middlewares/middleware.js";
import upload from "../config/multer.js";

const router = new Router();

router.get('/api/applications/:userId', isAuthenticated, getApplications);
router.get('/api/application/:userId/:jobId', isAuthenticated, getApplicationById);
router.post('/api/applications', isAuthenticated, createApplication);
router.delete('/api/application/:id', isAuthenticated, deleteApplication);
router.patch('/api/application/:userId', isAuthenticated, updateApplication);
router.get('/api/applicant/:id', isAuthenticated, getApplicantById);
router.post('/api/applicant', isAuthenticated, createApplicant);
router.patch('/api/applicant/:id', isAuthenticated, updateApplicant);
router.patch('/api/applications/resume', isAuthenticated, upload.single('resume'), uploadResume);

export const applicationRoutes = router;