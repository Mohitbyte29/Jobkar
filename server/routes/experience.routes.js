import Router from "express";
import { createExperience, getExperienceById, updateExperience } from "../controllers/experience.controller.js";

const router = new Router();

router.get('/api/jobs/experience/:userId', getExperienceById);
router.post('/api/jobs/experience/:userId', createExperience);
router.patch('/api/jobs/experience/:userId', updateExperience);

export const experienceRoutes = router;