import Problem from "../models/Problem.js";

const problemService = {
  async getProblems() {
    return await Problem.find().sort({ createdAt: 1 });
  },

  async getProblem(id) {
    const problem = await Problem.findById(id);

    if (!problem) {
      throw new Error("Problem not found");
    }

    return problem;
  },
};

export default problemService;
