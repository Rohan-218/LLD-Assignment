import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ClassEditor from "../components/ClassEditor";
import RelationshipEditor from "../components/RelationshipEditor";
import DecisionEditor from "../components/DecisionEditor";

const DesignAttempt = () => {

  const navigate = useNavigate();

  const [classes, setClasses] = useState([]);
  const [relationships, setRelationships] = useState([]);
  const [decisions, setDecisions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const design = {
      classes,
      relationships,
      decisions,
    };

    console.log("Submitted Design:", design);

    navigate("/attempts/1/feedback");
  };

  return (
    <div className="page">

      <div className="design-header">

        <h1>ATM System Design</h1>

        <p>
          Create your own design based on the given
          requirements.
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <ClassEditor classes={classes} setClasses={setClasses} />

        <RelationshipEditor relationships={relationships} setRelationships={setRelationships} />

        <DecisionEditor decisions={decisions} setDecisions={setDecisions} />

        <div className="submit-container">

          <button type="submit" className="submit-button">
            Submit Design
          </button>

        </div>

      </form>

    </div>
  );
};

export default DesignAttempt;