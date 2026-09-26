import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProblem } from "../services/api";

const ProblemDetails = () => {
  const { problemId } = useParams();

  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getProblem(problemId);
        setProblem(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load this problem.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [problemId]);

  if (loading) {
    return <p className="page-message">Loading problem...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!problem) {
    return <p>Problem not found.</p>;
  }

  return (
    <main className="page-container">
      <span className="difficulty">{problem.difficulty}</span>

      <h1>{problem.title}</h1>

      <p className="page-description">{problem.description}</p>

      <section className="content-section">
        <h2>Requirements</h2>

        <ul className="requirements-list">
          {problem.requirements?.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>

      <Link to={`/problems/${problem._id}/design`} className="primary-button">
        Start Designing
      </Link>
    </main>
  );
};

export default ProblemDetails;
