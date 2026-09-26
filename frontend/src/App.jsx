import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import DesignAttempt from "./pages/DesignAttempt";
import Feedback from "./pages/Feedback";
import History from "./pages/History";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/problems" replace />} />

        <Route path="/problems" element={<Problems />} />

        <Route path="/problems/:problemId" element={<ProblemDetails />} />

        <Route path="/problems/:problemId/design" element={<DesignAttempt />} />

        <Route path="/attempts/:attemptId/feedback" element={<Feedback />} />

        <Route path="/history" element={<History />} />

        <Route path="*" element={<Navigate to="/problems" replace />} />
      </Routes>
    </>
  );
}

export default App;
