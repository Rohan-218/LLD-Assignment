import axios from "axios";

const API_URL = "http://backend:3000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all available LLD problems
export const getProblems = () => {
  return api.get("/problems");
};

// Get details of one problem
export const getProblem = (problemId) => {
  return api.get(`/problems/${problemId}`);
};

// Submit a learner's design
export const submitAttempt = (problemId, design) => {
  return api.post(`/problems/${problemId}/attempts`, {
    design,
  });
};

// Get one attempt
export const getAttempt = (attemptId) => {
  return api.get(`/attempts/${attemptId}`);
};

// Get evaluation feedback for an attempt
export const getFeedback = (attemptId) => {
  return api.get(`/attempts/${attemptId}/feedback`);
};

// Get all previous attempts
export const getHistory = () => {
  return api.get("/attempts");
};

export default api;
