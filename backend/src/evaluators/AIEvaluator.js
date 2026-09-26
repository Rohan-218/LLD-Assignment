import OpenAI from "openai";
import Evaluator from "./Evaluator.js";
import buildEvaluationPrompt from "../utils/promptBuilder.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class AIEvaluator extends Evaluator {
  async evaluate(problem, design) {
    const prompt = buildEvaluationPrompt(problem, design);

    const response = await client.responses.create({
      model: "gpt-5.6",

      input: prompt,
    });

    const text = response.output_text;

    try {
      return JSON.parse(text);
    } catch (error) {
      throw new Error("AI returned invalid JSON");
    }
  }
}

export default AIEvaluator;
