import React from "react";
import { Link } from "react-router-dom";

const ProblemDetails = () => {
  return (
    <div className="page">

      <div className="problem-details">

        <span className="difficulty">
          Medium
        </span>

        <h1>ATM System Design</h1>

        <p className="description">
          Design an ATM system that allows users to perform
          common banking operations.
        </p>

        <h2>Requirements</h2>

        <ul className="requirements">

          <li>
            The user should be able to insert a card.
          </li>

          <li>
            The system should validate the PIN.
          </li>

          <li>
            The user should be able to check their balance.
          </li>

          <li>
            The user should be able to withdraw money.
          </li>

          <li>
            The user should be able to deposit money.
          </li>

          <li>
            The system should handle insufficient account balance.
          </li>

          <li>
            The ATM should handle insufficient cash.
          </li>

        </ul>

        <h2>What you need to design</h2>

        <p>
          Identify the important classes, their responsibilities,
          relationships and important design decisions.
        </p>

        <Link to="/problems/1/design" className="button">
          Start Designing
        </Link>

      </div>

    </div>
  );
};

export default ProblemDetails;