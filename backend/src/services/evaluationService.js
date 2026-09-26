import Attempt from "../models/Attempt.js";
import Evaluation from "../models/Evaluation.js";
import RuleBasedEvaluator from "../evaluators/RuleBasedEvaluator.js";
import AIEvaluator from "../evaluators/AIEvaluator.js";

const ruleBasedEvaluator = new RuleBasedEvaluator();

const aiEvaluator = new AIEvaluator();

const evaluationService = {
  async evaluateAttempt(attemptId) {
    const attempt = await Attempt.findById(attemptId).populate("problem");

    if (!attempt) {
      throw new Error("Attempt not found");
    }

    let feedback;

    let evaluatorType;

    /*
     * Try AI first.
     */

    try {
      feedback = await aiEvaluator.evaluate(attempt.problem, attempt.design);

      evaluatorType = "ai";
    } catch (error) {
      console.error("AI evaluation failed:", error.message);

      /*
       * Fallback
       */

      feedback = await ruleBasedEvaluator.evaluate(
        attempt.problem,
        attempt.design,
      );

      evaluatorType = "rule_based";
    }

    const evaluation = await Evaluation.create({
      attempt: attempt._id,

      strengths: feedback.strengths || [],

      issues: feedback.issues || [],

      suggestions: feedback.suggestions || [],

      tradeoffs: feedback.tradeoffs || [],

      evaluatorType,
    });

    return evaluation;
  },

  async getFeedback(attemptId) {
    return await Evaluation.findOne({
      attempt: attemptId,
    }).sort({
      createdAt: -1,
    });
  },
};

export default evaluationService;
