import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import DesignAttempt from "./pages/DesignAttempt";
import Feedback from "./pages/Feedback";
import History from "./pages/History";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Problems />} />

        <Route path="/problems" element={<Problems />} />

        <Route path="/problems/:problemId" element={<ProblemDetails />} />

        <Route path="/problems/:problemId/design" element={<DesignAttempt />} />

        <Route path="/attempts/:attemptId/feedback" element={<Feedback />} />

        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default App;