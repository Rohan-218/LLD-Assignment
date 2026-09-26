import React from "react";

const FeedbackCard = ({
  title,
  items,
}) => {
  return (
    <div className="feedback-card">

      <h2>{title}</h2>

      {items.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default FeedbackCard;