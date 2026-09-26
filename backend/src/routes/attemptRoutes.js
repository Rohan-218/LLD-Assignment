import express from "express";
import {createAttempt, getAttempt, getHistory, getFeedback} from "../controllers/attemptController.js";

const router = express.Router();

router.post("/problems/:problemId/attempts", createAttempt);

router.get("/attempts", getHistory);

router.get("/attempts/:id", getAttempt);

router.get("/attempts/:id/feedback", getFeedback);

export default router;
