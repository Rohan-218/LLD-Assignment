import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/db.js";
import Problem from "./models/Problem.js";

const seed = async () => {
  await connectDB();

  await Problem.deleteMany({});

  await Problem.create({
    title: "ATM System Design",

    description:
      "Design an ATM system that allows users to perform common banking operations.",

    difficulty: "Medium",

    requirements: [
      "The user should be able to insert a card.",

      "The system should validate the PIN.",

      "The user should be able to check their balance.",

      "The user should be able to withdraw money.",

      "The user should be able to deposit money.",

      "The system should handle insufficient account balance.",

      "The ATM should handle insufficient cash.",
    ],
  });

  console.log("Problems seeded successfully");

  process.exit(0);
};

seed();
