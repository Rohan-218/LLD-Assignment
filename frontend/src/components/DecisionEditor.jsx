const DecisionEditor = ({ decisions, setDecisions }) => {
  const updateDecision = (index, field, value) => {
    setDecisions((current) =>
      current.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addDecision = () => {
    setDecisions((current) => [...current, { decision: "", reason: "" }]);
  };

  const removeDecision = (index) => {
    setDecisions((current) => current.filter((_, i) => i !== index));
  };

  return (
    <div>
      {decisions.map((item, index) => (
        <div className="editor-card" key={index}>
          <label>Design decision</label>
          <input
            value={item.decision}
            onChange={(e) => updateDecision(index, "decision", e.target.value)}
            placeholder="e.g. Separate transaction types"
          />

          <label>Reason</label>
          <textarea
            value={item.reason}
            onChange={(e) => updateDecision(index, "reason", e.target.value)}
            placeholder="Why did you make this choice?"
            rows={3}
          />

          {decisions.length > 1 && (
            <button
              type="button"
              className="secondary-button"
              onClick={() => removeDecision(index)}
            >
              Remove Decision
            </button>
          )}
        </div>
      ))}

      <button type="button" className="secondary-button" onClick={addDecision}>
        + Add Decision
      </button>
    </div>
  );
};

export default DecisionEditor;
