import { useEffect, useState } from "react";
import ProblemCard from "../components/ProblemCard";
import { getProblems } from "../services/api";

const Problems = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await getProblems();
        setProblems(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load problems. Check your backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  if (loading) {
    return <p className="page-message">Loading problems...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <main className="page-container">
      <h1>LLD Practice Problems</h1>

      <p className="page-description">
        Choose a problem, design your solution, and receive structured feedback.
      </p>

      {problems.length === 0 ? (
        <p>No problems are available yet.</p>
      ) : (
        <div className="problem-grid">
          {problems.map((problem) => (
            <ProblemCard key={problem._id} problem={problem} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Problems;
