import express from "express";
import cors from "cors";

import problemRoutes from "./routes/problemRoutes.js";

import attemptRoutes from "./routes/attemptRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "LLD Practice Platform API",
    status: success
  });
});

app.use("/api/problems", problemRoutes);

app.use("/api", attemptRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
