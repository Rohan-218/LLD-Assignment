import React from "react";

const DecisionEditor = ({ decisions, setDecisions}) => {

  const addDecision = () => {
    setDecisions([
      ...decisions,
      {
        id: Date.now(),
        decision: "",
        reason: "",
      },
    ]);
  };

  const updateDecision = (id, field, value) => {
    setDecisions(
      decisions.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item
      )
    );
  };

  const removeDecision = (id) => {
    setDecisions(
      decisions.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="editor-section">

      <div className="section-header">

        <h2>Design Decisions</h2>

        <button type="button" className="secondary-button" onClick={addDecision}>
          + Add Decision
        </button>

      </div>

      {decisions.map((item, index) => (
        <div
          className="editor-card"
          key={item.id}
        >

          <h3>Decision {index + 1}</h3>

          <label>Decision</label>

          <input
            type="text"
            placeholder="e.g. Use Transaction as an abstract concept"
            value={item.decision}
            onChange={(e) =>
              updateDecision(
                item.id,
                "decision",
                e.target.value
              )
            }
          />

          <label>Reason</label>

          <textarea
            placeholder="Why did you make this decision?"
            value={item.reason}
            onChange={(e) =>
              updateDecision(
                item.id,
                "reason",
                e.target.value
              )
            }
          />

          <button type="button" className="delete-button" onClick={() => removeDecision(item.id)}>
            Remove
          </button>

        </div>
      ))}

    </div>
  );
};

export default DecisionEditor;