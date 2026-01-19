import express from "express";
import { getNearbyEvents } from "../controllers/events.controller.js";

const router = express.Router();

router.post("/nearby", getNearbyEvents);

export default router;
