import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClassEditor from "../components/ClassEditor";
import RelationshipEditor from "../components/RelationshipEditor";
import DecisionEditor from "../components/DecisionEditor";
import { getProblem, submitAttempt } from "../services/api";

const DesignAttempt = () => {
  const { problemId } = useParams();
  const navigate = useNavigate();

  const [problem, setProblem] = useState(null);
  const [classes, setClasses] = useState([{ name: "", responsibilities: "" }]);
  const [relationships, setRelationships] = useState([
    { from: "", to: "", type: "association" },
  ]);
  const [decisions, setDecisions] = useState([{ decision: "", reason: "" }]);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await getProblem(problemId);
        setProblem(response.data.data);
      } catch (err) {
        console.error(err);
        setError("Unable to load the problem.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [problemId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const design = {
      classes: classes
        .filter((item) => item.name.trim())
        .map((item) => ({
          name: item.name.trim(),
          responsibilities: item.responsibilities
            .split("\n")
            .map((responsibility) => responsibility.trim())
            .filter(Boolean),
        })),

      relationships: relationships.filter(
        (item) => item.from.trim() && item.to.trim(),
      ),

      decisions: decisions.filter((item) => item.decision.trim()),
    };

    if (design.classes.length === 0) {
      setError("Add at least one class before submitting.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await submitAttempt(problemId, design);
      const attempt = response.data.data;

      navigate(`/attempts/${attempt._id}/feedback`);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Unable to submit your design. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p className="page-message">Loading...</p>;
  }

  if (!problem) {
    return <p className="error-message">{error || "Problem not found."}</p>;
  }

  return (
    <main className="page-container">
      <Link to={`/problems/${problemId}`} className="back-link">
        ← Back to problem
      </Link>

      <h1>Design: {problem.title}</h1>

      <p className="page-description">
        Describe your design before viewing the feedback.
      </p>

      <form onSubmit={handleSubmit}>
        <section className="content-section">
          <h2>Classes</h2>
          <p>
            Add the classes in your design and describe each class's
            responsibilities.
          </p>

          <ClassEditor classes={classes} setClasses={setClasses} />
        </section>

        <section className="content-section">
          <h2>Relationships</h2>
          <p>Describe how your classes interact with one another.</p>

          <RelationshipEditor
            relationships={relationships}
            setRelationships={setRelationships}
          />
        </section>

        <section className="content-section">
          <h2>Design Decisions</h2>
          <p>Explain important design choices and why you made them.</p>

          <DecisionEditor decisions={decisions} setDecisions={setDecisions} />
        </section>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="primary-button" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Design"}
        </button>
      </form>
    </main>
  );
};

export default DesignAttempt;
