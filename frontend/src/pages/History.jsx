import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHistory } from "../services/api";

const History = () => {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getHistory();

        setAttempts(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load your practice history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <p className="page-message">Loading history...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <main className="page-container">
      <h1>Practice History</h1>

      <p className="page-description">
        Review your previous design attempts and revisit their feedback.
      </p>

      {attempts.length === 0 ? (
        <div className="empty-state">
          <h2>No attempts yet</h2>

          <p>Complete a problem to see your attempts here.</p>

          <Link to="/problems" className="primary-button">
            Browse Problems
          </Link>
        </div>
      ) : (
        <div className="history-list">
          {attempts.map((attempt) => (
            <article className="history-card" key={attempt._id}>
              <div>
                <h2>{attempt.problem?.title || "LLD Problem"}</h2>

                <p>Difficulty: {attempt.problem?.difficulty || "N/A"}</p>

                <p>Submitted: {new Date(attempt.createdAt).toLocaleString()}</p>

                <span className="status-badge">{attempt.status}</span>
              </div>

              <div className="history-actions">
                <Link
                  to={`/attempts/${attempt._id}/feedback`}
                  className="button"
                >
                  View Feedback
                </Link>

                {attempt.problem?._id && (
                  <Link
                    to={`/problems/${attempt.problem._id}/design`}
                    className="secondary-button"
                  >
                    Retry
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default History;
