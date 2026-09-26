const buildEvaluationPrompt = (problem, design) => {
  return `
You are evaluating an
Object-Oriented Design / Low-Level Design
practice submission.

PROBLEM

Title:
${problem.title}

Description:
${problem.description}

Requirements:
${JSON.stringify(problem.requirements, null, 2)}


LEARNER DESIGN

Classes:
${JSON.stringify(design.classes, null, 2)}

Relationships:
${JSON.stringify(design.relationships, null, 2)}

Design Decisions:
${JSON.stringify(design.decisions, null, 2)}


Evaluate the design based on:

- Separation of responsibilities
- Missing responsibilities
- Coupling
- Abstraction
- Extensibility
- Trade-offs
- Whether abstractions match requirements

Do not require one exact class diagram.

Return ONLY valid JSON:

{
    "strengths": [],
    "issues": [],
    "suggestions": [],
    "tradeoffs": []
}
`;
};

export default buildEvaluationPrompt;
