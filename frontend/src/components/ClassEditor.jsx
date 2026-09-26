import React from "react";

const ClassEditor = ({ classes, setClasses }) => {
  const addClass = () => {
    setClasses([
      ...classes,
      {
        id: Date.now(),
        name: "",
        responsibilities: "",
      },
    ]);
  };

  const updateClass = (id, field, value) => {
    setClasses(
      classes.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const removeClass = (id) => {
    setClasses(classes.filter((item) => item.id !== id));
  };

  return (
    <div className="editor-section">
      <div className="section-header">
        <h2>Classes</h2>

        <button type="button" className="secondary-button" onClick={addClass}>
          + Add Class
        </button>
      </div>

      {classes.map((item, index) => (
        <div className="editor-card" key={item.id}>
          <div className="editor-card-header">
            <h3>Class {index + 1}</h3>

            <button type="button" className="delete-button" onClick={() => removeClass(item.id)}>
              Remove
            </button>
          </div>

          <label>Class Name</label>

          <input
            type="text"
            placeholder="e.g. ATM"
            value={item.name}
            onChange={(e) => updateClass(item.id, "name", e.target.value)}
          />

          <label>Responsibilities</label>

          <textarea
            placeholder="What is this class responsible for?"
            value={item.responsibilities}
            onChange={(e) =>
              updateClass(item.id, "responsibilities", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ClassEditor;
