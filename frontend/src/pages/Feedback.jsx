import React from "react";
import { Link } from "react-router-dom";

import FeedbackCard from "../components/FeedbackCard";

const Feedback = () => {

  const feedback = {
    strengths: [
      "ATM responsibility is separated from Account responsibility.",
      "The design identifies Account as an important domain object.",
    ],

    issues: [
      "Cash handling responsibility is not clearly separated.",
      "PIN validation responsibility should be isolated.",
    ],

    suggestions: [
      "Consider introducing a CashDispenser component.",
      "Consider separating transaction-specific behavior.",
    ],

    tradeoffs: [
      "A separate transaction abstraction can make it easier to add new transaction types.",
      "More classes may increase complexity for a small system.",
    ],
  };

  return (
    <div className="page">

      <div className="feedback-header">

        <h1>Design Feedback</h1>

        <p>
          Review the feedback on your ATM system design.
        </p>

      </div>

      <div className="feedback-grid">

        <FeedbackCard title="Strengths" items={feedback.strengths} />

        <FeedbackCard title="Issues" items={feedback.issues} />

        <FeedbackCard title="Suggestions" items={feedback.suggestions} />

        <FeedbackCard title="Trade-offs" items={feedback.tradeoffs} />

      </div>

      <div className="feedback-actions">

        <Link to="/problems/1/design" className="button">
          Retry Design
        </Link>

        <Link to="/history" className="secondary-button">
          View History
        </Link>

      </div>

    </div>
  );
};

export default Feedback;