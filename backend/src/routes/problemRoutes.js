import express from "express";
import { getProblems, getProblem } from "../controllers/problemController.js";

const router = express.Router();

router.get("/", getProblems);

router.get("/:id", getProblem);

export default router;
