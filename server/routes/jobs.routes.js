import { Router } from "express";
import { createJob, deleteJob, getJobById, getJobs, getSavedJobs, jobSearch, saveJob, updateJob, removeSavedJob } from "../controllers/jobs.controller.js";
import { authenticateEmployer, authenticateJobSeeker, isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/jobs', getJobs);
router.get('/api/jobs/search', jobSearch);
router.post('/api/jobs', isAuthenticated, authenticateEmployer, createJob);
router.get('/api/jobs/saved', isAuthenticated, authenticateJobSeeker, getSavedJobs);
router.get('/api/jobs/:id', getJobById);
router.delete('/api/jobs/:id', isAuthenticated, authenticateEmployer, deleteJob);
router.patch('/api/jobs/:id', updateJob);
router.post('/api/jobs/:id/save', isAuthenticated, authenticateJobSeeker, saveJob);
router.delete('/api/jobs/:id/save', isAuthenticated, authenticateJobSeeker, removeSavedJob);

export const jobsRoutes = router;

