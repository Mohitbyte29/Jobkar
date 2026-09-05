import express from "express";
import Router from "express";
import { getMonthlyStats } from "../controllers/analytics.controller.js";

const router = new Router();

router.get("/api/monthly-stats", getMonthlyStats);

export const analyticsRouter = router;