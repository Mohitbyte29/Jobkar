import { Router } from "express";
import { createJob, deleteJob, getJobById, getJobs, jobSearch, updateJob } from "../controllers/jobs.controller.js";
import { authenticateEmployer, authenticateJobSeeker, isAuthenticated } from "../middlewares/middleware.js";

const router = new Router();

router.get('/api/jobs', getJobs);
router.get('/api/jobs/search', jobSearch);
router.get('/api/jobs/:id', getJobById);
router.post('/api/jobs', isAuthenticated, authenticateEmployer, createJob);
router.delete('/api/jobs/:id', deleteJob);
router.patch('/api/jobs/:id', updateJob);

export const jobsRoutes = router;

