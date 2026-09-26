import mongoose from "mongoose";
import dotenv from "dotenv";
import Problem from "./models/Problem.js";
import connectDB from "./config/db.js";

dotenv.config();

const problems = [
  {
    title: "ATM System Design",
    description:
      "Design an ATM system that allows users to perform common banking operations.",
    difficulty: "Medium",
    requirements: [
      "User can insert a card",
      "System validates the PIN",
      "User can check account balance",
      "User can withdraw money",
      "User can deposit money",
      "System handles insufficient account balance",
      "System handles insufficient ATM cash",
    ],
  },

  {
    title: "Parking Lot System Design",
    description:
      "Design a parking lot system that manages vehicles, parking spaces, tickets, and payments.",
    difficulty: "Medium",
    requirements: [
      "Vehicle can enter the parking lot",
      "System assigns an appropriate parking spot",
      "System supports different vehicle types",
      "System generates a parking ticket",
      "Vehicle can exit the parking lot",
      "System calculates the parking fee",
      "System processes payment",
      "System should track available parking spaces",
    ],
  },

  {
    title: "Library Management System",
    description:
      "Design a library management system for managing books, members, borrowing, and returns.",
    difficulty: "Easy",
    requirements: [
      "Library can maintain a collection of books",
      "Members can search for books",
      "Members can borrow available books",
      "Members can return books",
      "System tracks borrowed books",
      "System prevents borrowing unavailable books",
      "System can calculate overdue fines",
    ],
  },

  {
    title: "Vending Machine System",
    description:
      "Design a vending machine that allows users to select products and make purchases.",
    difficulty: "Medium",
    requirements: [
      "Machine displays available products",
      "User can select a product",
      "System checks product availability",
      "User can insert money",
      "System validates the inserted amount",
      "Machine dispenses the selected product",
      "Machine returns change",
      "Machine handles insufficient payment",
      "Machine handles unavailable products",
    ],
  },

  {
    title: "Elevator System Design",
    description:
      "Design an elevator system that handles requests from multiple floors.",
    difficulty: "Medium",
    requirements: [
      "Users can request an elevator from a floor",
      "Users can select a destination floor",
      "System tracks elevator direction",
      "System tracks elevator current floor",
      "System handles multiple elevator requests",
      "Elevator can move between floors",
      "Elevator doors can open and close",
      "System should manage multiple elevators",
    ],
  },

  {
    title: "Movie Ticket Booking System",
    description:
      "Design a movie ticket booking system that allows users to browse movies, select shows, reserve seats, and make payments.",
    difficulty: "Medium",
    requirements: [
      "Users can browse available movies",
      "Users can view available shows",
      "Users can view available seats",
      "Users can select seats",
      "Users can reserve seats",
      "System prevents double booking of seats",
      "Users can make payments",
      "Users receive booking confirmation",
      "Users can cancel a booking",
    ],
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Problem.deleteMany();

    await Problem.insertMany(problems);

    console.log("Problems seeded successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();