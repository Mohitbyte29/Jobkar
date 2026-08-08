import Router from "express";
import { createExperience, getExperienceById, updateExperience } from "../controllers/experience.controller.js";

const router = new Router();

router.get('/api/experience/:userId', getExperienceById);
router.post('/api/experience/:userId', createExperience);
router.patch('/api/experience/:userId', updateExperience);

export const experienceRoutes = router;