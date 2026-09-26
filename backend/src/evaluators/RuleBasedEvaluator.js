import Evaluator from "./Evaluator.js";

class RuleBasedEvaluator extends Evaluator {
  async evaluate(problem, design) {
    const strengths = [];

    const issues = [];

    const suggestions = [];

    const tradeoffs = [];

    const classes = design.classes || [];

    const relationships = design.relationships || [];

    const decisions = design.decisions || [];

    if (classes.length === 0) {
      issues.push("No classes were defined.");
    } else {
      strengths.push("The design identifies domain classes.");
    }

    const classNames = classes.map((item) => item.name.trim().toLowerCase());

    if (classNames.includes("atm")) {
      strengths.push("The design includes an ATM class.");
    } else {
      issues.push(
        "Consider identifying an ATM class responsible for ATM-specific behavior.",
      );
    }

    if (classNames.includes("account")) {
      strengths.push("The design includes an Account class.");
    } else {
      issues.push(
        "Consider separating account-related responsibilities into an Account class.",
      );
    }

    if (relationships.length === 0) {
      issues.push("No relationships between classes were defined.");

      suggestions.push("Define how the main classes interact.");
    } else {
      strengths.push("The design defines relationships between classes.");
    }

    if (decisions.length === 0) {
      suggestions.push(
        "Document important design decisions and their reasoning.",
      );
    } else {
      strengths.push("The design documents explicit design decisions.");
    }

    suggestions.push("Check whether each class has a focused responsibility.");

    suggestions.push(
      "Consider how additional transaction types could be added.",
    );

    tradeoffs.push(
      "Additional abstractions can improve extensibility but may increase complexity.",
    );

    return {
      strengths,
      issues,
      suggestions,
      tradeoffs,
    };
  }
}

export default RuleBasedEvaluator;
