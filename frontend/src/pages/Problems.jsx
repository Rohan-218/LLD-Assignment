import React from "react";
import ProblemCard from "../components/ProblemCard";

const Problems = () => {

  const problems = [
    {
      id: 1,
      title: "ATM System Design",
      description: "Design an ATM system that supports card insertion, PIN validation, balance inquiry, withdrawal and deposit.",
      difficulty: "Medium",
    },
  ];

  return (
    <div className="page">

      <div className="page-header">
        <h1>LLD Practice Problems</h1>

        <p>
          Practice object-oriented design by creating your own solution before receiving feedback.
        </p>
      </div>

      <div className="problem-grid">

        {problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} />
        ))}

      </div>

    </div>
  );
};

export default Problems;