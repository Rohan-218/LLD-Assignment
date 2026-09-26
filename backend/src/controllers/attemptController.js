import attemptService from "../services/attemptService.js";
import evaluationService from "../services/evaluationService.js";

export const createAttempt = async (req, res) => {
  try {
    const { problemId } = req.params;

    const { design } = req.body;

    if (!design) {
      return res.status(400).json({
        success: false,
        message: "Design is required",
      });
    }

    const attempt = await attemptService.createAttempt(problemId, design);

    res.status(201).json({
      success: true,
      data: attempt,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create attempt",
    });
  }
};

export const getAttempt = async (req, res) => {
  try {
    const attempt = await attemptService.getAttempt(req.params.id);

    if (!attempt) {
      return res.status(404).json({
        success: false,
        message: "Attempt not found",
      });
    }

    res.status(200).json({
      success: true,
      data: attempt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch attempt",
    });
  }
};

export const getHistory = async (req, res) => {
  try {
    const attempts = await attemptService.getHistory();

    res.status(200).json({
      success: true,
      data: attempts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedback = await evaluationService.getFeedback(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch feedback",
    });
  }
};
