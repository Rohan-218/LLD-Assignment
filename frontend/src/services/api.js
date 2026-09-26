const API_URL = "http://localhost:5000/api";

export const getProblems = async () => {
  const response = await fetch(`${API_URL}/problems`);

  if (!response.ok) {
    throw new Error("Failed to fetch problems");
  }

  return response.json();
};

export const getProblem = async (id) => {
  const response = await fetch(`${API_URL}/problems/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch problem");
  }

  return response.json();
};

export const submitAttempt = async (problemId, design) => {
  const response = await fetch(`${API_URL}/problems/${problemId}/attempts`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      design,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit attempt");
  }

  return response.json();
};

export const getFeedback = async (attemptId) => {
  const response = await fetch(`${API_URL}/attempts/${attemptId}/feedback`);

  if (!response.ok) {
    throw new Error("Failed to fetch feedback");
  }

  return response.json();
};

export const getHistory = async () => {
  const response = await fetch(`${API_URL}/attempts`);

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return response.json();
};
