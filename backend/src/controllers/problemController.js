import problemService from "../services/problemService.js";

export const getProblems = async (req, res) => {
  try {
    const problems = await problemService.getProblems();

    res.status(200).json({
      success: true,
      data: problems,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch problems",
    });
  }
};

export const getProblem = async (req, res) => {
  try {
    const problem = await problemService.getProblem(req.params.id);

    res.status(200).json({
      success: true,
      data: problem,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
