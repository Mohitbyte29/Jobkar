import { Router } from "express";
import { createJob, deleteJob, getJobById, getJobs, updateJob } from "../controllers/jobs.controller";

const router = new Router();

router.get('/api/jobs', getJobs);
router.get('/api/jobs/:id', getJobById);
router.post('/api/jobs', createJob);
router.delete('/api/jobs/:id', deleteJob);
router.patch('/api/jobs/:id', updateJob);

export const jobsRoutes = router;

