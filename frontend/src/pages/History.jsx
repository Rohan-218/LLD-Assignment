import React from "react";
import { Link } from "react-router-dom";

const History = () => {

  const attempts = [
    {
      id: 1,
      problem: "ATM System Design",
      date: "Today",
      status: "Evaluated",
    },
  ];

  return (
    <div className="page">

      <div className="page-header">

        <h1>Attempt History</h1>

        <p>
          Review your previous LLD practice attempts.
        </p>

      </div>

      <div className="history-list">

        {attempts.map((attempt) => (
          <div className="history-card" key={attempt.id}>

            <div>
              <h2>{attempt.problem}</h2>

              <p>
                {attempt.date}
              </p>

              <span className="status">
                {attempt.status}
              </span>
            </div>

            <Link to={`/attempts/${attempt.id}/feedback`} className="button">
              View Feedback
            </Link>

          </div>
        ))}

      </div>

    </div>
  );
};

export default History;