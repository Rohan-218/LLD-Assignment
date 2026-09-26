const FeedbackCard = ({ title, items, className = "" }) => {
  return (
    <section className={`feedback-card ${className}`}>
      <h2>{title}</h2>

      {items?.length ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items in this category.</p>
      )}
    </section>
  );
};

export default FeedbackCard;
