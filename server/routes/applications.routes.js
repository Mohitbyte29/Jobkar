import { Router } from "express";
import { createApplication, deleteApplication, getApplicationById, getApplications } from "../controllers/application.controller.js";

const router = new Router();

router.get('/api/applications', getApplications);
router.get('/api/applications/:id', getApplicationById);
router.post('/api/applications', createApplication);
router.delete('/api/applications/:id', deleteApplication);

export const applicationRoutes = router;