import React from "react";

const RelationshipEditor = ({relationships, setRelationships}) => {

  const addRelationship = () => {
    setRelationships([
      ...relationships,
      {
        id: Date.now(),
        from: "",
        to: "",
        type: "association",
      },
    ]);
  };

  const updateRelationship = (id, field, value) => {
    setRelationships(
      relationships.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item
      )
    );
  };

  const removeRelationship = (id) => {
    setRelationships(
      relationships.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div className="editor-section">

      <div className="section-header">

        <h2>Relationships</h2>

        <button type="button" className="secondary-button" onClick={addRelationship}>
          + Add Relationship
        </button>

      </div>

      {relationships.map((item, index) => (
        <div
          className="editor-card"
          key={item.id}
        >

          <h3>Relationship {index + 1}</h3>

          <div className="form-row">

            <div>
              <label>From</label>

              <input
                type="text"
                placeholder="ATM"
                value={item.from}
                onChange={(e) =>
                  updateRelationship(
                    item.id,
                    "from",
                    e.target.value
                  )
                }
              />
            </div>

            <div>
              <label>Relationship</label>

              <select
                value={item.type}
                onChange={(e) =>
                  updateRelationship(
                    item.id,
                    "type",
                    e.target.value
                  )
                }
              >
                <option value="association">
                  Association
                </option>

                <option value="aggregation">
                  Aggregation
                </option>

                <option value="composition">
                  Composition
                </option>

                <option value="inheritance">
                  Inheritance
                </option>
              </select>
            </div>

            <div>
              <label>To</label>

              <input
                type="text"
                placeholder="Account"
                value={item.to}
                onChange={(e) =>
                  updateRelationship(
                    item.id,
                    "to",
                    e.target.value
                  )
                }
              />
            </div>

          </div>

          <button type="button" className="delete-button" onClick={() => removeRelationship(item.id)}>
            Remove
          </button>

        </div>
      ))}

    </div>
  );
};

export default RelationshipEditor;