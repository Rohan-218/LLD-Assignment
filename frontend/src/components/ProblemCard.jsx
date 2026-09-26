import React from "react";
import { Link } from "react-router-dom";

const ProblemCard = ({ problem }) => {
  return (
    <div className="problem-card">

      <div>
        <span className="difficulty">
          {problem.difficulty}
        </span>

        <h2>{problem.title}</h2>

        <p>{problem.description}</p>
      </div>

      <Link to={`/problems/${problem.id}`} className="button">
        Practice
      </Link>

    </div>
  );
};

export default ProblemCard;