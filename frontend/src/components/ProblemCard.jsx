import { Link } from "react-router-dom";

const ProblemCard = ({ problem }) => {
  return (
    <div className="problem-card">
      <div className="problem-card-content">
        <span className="difficulty">{problem.difficulty}</span>

        <h2>{problem.title}</h2>

        <p>{problem.description}</p>
      </div>

      <Link to={`/problems/${problem._id}`} className="button">
        View Problem
      </Link>
    </div>
  );
};

export default ProblemCard;
