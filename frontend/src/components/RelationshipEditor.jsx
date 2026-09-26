const RelationshipEditor = ({ relationships, setRelationships }) => {
  const updateRelationship = (index, field, value) => {
    setRelationships((current) =>
      current.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addRelationship = () => {
    setRelationships((current) => [
      ...current,
      { from: "", to: "", type: "association" },
    ]);
  };

  const removeRelationship = (index) => {
    setRelationships((current) => current.filter((_, i) => i !== index));
  };

  return (
    <div>
      {relationships.map((item, index) => (
        <div className="editor-card" key={index}>
          <label>From class</label>
          <input
            value={item.from}
            onChange={(e) => updateRelationship(index, "from", e.target.value)}
            placeholder="e.g. ATM"
          />

          <label>To class</label>
          <input
            value={item.to}
            onChange={(e) => updateRelationship(index, "to", e.target.value)}
            placeholder="e.g. Account"
          />

          <label>Relationship type</label>
          <select
            value={item.type}
            onChange={(e) => updateRelationship(index, "type", e.target.value)}
          >
            <option value="association">Association</option>
            <option value="inheritance">Inheritance</option>
            <option value="composition">Composition</option>
            <option value="aggregation">Aggregation</option>
            <option value="dependency">Dependency</option>
          </select>

          {relationships.length > 1 && (
            <button
              type="button"
              className="secondary-button"
              onClick={() => removeRelationship(index)}
            >
              Remove Relationship
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        className="secondary-button"
        onClick={addRelationship}
      >
        + Add Relationship
      </button>
    </div>
  );
};

export default RelationshipEditor;
