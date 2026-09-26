# AI Usage Guide

This project uses AI to evaluate a learner's low-level design submission and generate structured feedback.

## How AI Evaluation Works

When a user submits a design attempt:

1. The backend fetches the relevant problem and stored design data.
2. It builds a prompt using the problem description, requirements, and the submitted classes/relationships/decisions.
3. It sends that prompt to OpenAI.
4. The model returns a JSON object with feedback sections.
5. The backend stores the evaluation in MongoDB.
6. If the AI call fails, the system falls back to a rule-based evaluator.

## Key Files

- [backend/src/evaluators/AIEvaluator.js](backend/src/evaluators/AIEvaluator.js)
- [backend/src/utils/promptBuilder.js](backend/src/utils/promptBuilder.js)
- [backend/src/services/evaluationService.js](backend/src/services/evaluationService.js)

## Required Environment Variable

Add the following to your backend `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

The API key is used by the OpenAI client in the AI evaluator.

## Prompt Structure

The generated prompt includes:

- problem title
- problem description
- requirement list
- learner design classes
- relationships between classes
- design decisions and rationale

The model is instructed to evaluate based on:

- separation of responsibilities
- missing responsibilities
- coupling
- abstraction
- extensibility
- trade-offs
- alignment with requirements

## Expected AI Response Format

The model is expected to return valid JSON like this:

```json
{
  "strengths": ["Good separation of concerns", "Clear class responsibilities"],
  "issues": ["Missing payment validation flow"],
  "suggestions": ["Add a validation layer before processing transactions"],
  "tradeoffs": ["Simplified interfaces reduce flexibility for future extensions"]
}
```

## Fallback Behavior

If AI evaluation fails for any reason, such as:

- missing API key
- OpenAI request error
- invalid JSON response
- network issues

then the app automatically uses the rule-based evaluator instead.

This is handled in [backend/src/services/evaluationService.js](backend/src/services/evaluationService.js).

## Important Notes

- The AI model is not required to match one exact class diagram.
- The system expects structured feedback, not free-form text.
- The response must be valid JSON for the backend to save it successfully.
- The AI output is stored under the evaluation record and shown to the user in the feedback flow.

## Troubleshooting

### AI evaluation is failing

Check:

- whether `OPENAI_API_KEY` is present in the backend environment
- whether the OpenAI request is being blocked by network or quota limits
- whether the model response is valid JSON

### Feedback is missing

Look at backend logs; the service logs AI failures before falling back to the rules-based evaluator.

## Related Files

- [backend/src/evaluators/RuleBasedEvaluator.js](backend/src/evaluators/RuleBasedEvaluator.js)
- [backend/src/models/Evaluation.js](backend/src/models/Evaluation.js)
- [backend/src/controllers/attemptController.js](backend/src/controllers/attemptController.js)
