const ClassEditor = ({ classes, setClasses }) => {
  const updateClass = (index, field, value) => {
    setClasses((current) =>
      current.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addClass = () => {
    setClasses((current) => [...current, { name: "", responsibilities: "" }]);
  };

  const removeClass = (index) => {
    setClasses((current) => current.filter((_, i) => i !== index));
  };

  return (
    <div>
      {classes.map((item, index) => (
        <div className="editor-card" key={index}>
          <label>Class name</label>
          <input
            value={item.name}
            onChange={(e) => updateClass(index, "name", e.target.value)}
            placeholder="e.g. Account"
          />

          <label>Responsibilities</label>
          <textarea
            value={item.responsibilities}
            onChange={(e) =>
              updateClass(index, "responsibilities", e.target.value)
            }
            placeholder={"One responsibility per line"}
            rows={4}
          />

          {classes.length > 1 && (
            <button
              type="button"
              className="secondary-button"
              onClick={() => removeClass(index)}
            >
              Remove Class
            </button>
          )}
        </div>
      ))}

      <button type="button" className="secondary-button" onClick={addClass}>
        + Add Class
      </button>
    </div>
  );
};

export default ClassEditor;
