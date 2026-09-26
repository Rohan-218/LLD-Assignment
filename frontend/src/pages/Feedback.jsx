import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FeedbackCard from "../components/FeedbackCard";
import { getFeedback } from "../services/api";

const Feedback = () => {
  const { attemptId } = useParams();

  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await getFeedback(attemptId);
        setFeedback(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load feedback for this attempt.");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [attemptId]);

  if (loading) {
    return <p className="page-message">Evaluating your design...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!feedback) {
    return <p>No feedback found.</p>;
  }

  // Get the problem ID from the feedback response
  const problemId = feedback.attempt?.problem?._id || feedback.problem?._id;

  return (
    <main className="page-container">
      <h1>Design Feedback</h1>

      <p className="page-description">
        Review the strengths, issues, suggestions, and trade-offs identified in
        your design.
      </p>

      <div className="feedback-grid">
        <FeedbackCard title="Strengths" items={feedback.strengths} />

        <FeedbackCard title="Issues" items={feedback.issues} />

        <FeedbackCard title="Suggestions" items={feedback.suggestions} />

        <FeedbackCard title="Trade-offs" items={feedback.tradeoffs} />
      </div>

      <div className="action-row">
        {problemId && (
          <Link
            to={`/problems/${problemId}/design`}
            className="secondary-button"
          >
            Retry Design
          </Link>
        )}

        <Link to="/history" className="button">
          View History
        </Link>
      </div>
    </main>
  );
};

export default Feedback;
