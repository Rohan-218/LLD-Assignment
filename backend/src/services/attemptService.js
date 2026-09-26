import Attempt from "../models/Attempt.js";
import evaluationService from "./evaluationService.js";

const attemptService = {
  async createAttempt(problemId, design) {
    const attempt = await Attempt.create({
      problem: problemId,

      design: design,
    });

    try {
      attempt.status = "evaluating";

      await attempt.save();

      await evaluationService.evaluateAttempt(attempt._id);

      attempt.status = "evaluated";

      await attempt.save();
    } catch (error) {
      console.error("Evaluation failed:", error);

      attempt.status = "evaluation_failed";

      await attempt.save();
    }

    return await Attempt.findById(attempt._id).populate("problem");
  },

  async getAttempt(id) {
    return await Attempt.findById(id).populate("problem");
  },

  async getHistory() {
    return await Attempt.find().populate("problem", "title difficulty").sort({
      createdAt: -1,
    });
  },
};

export default attemptService;
