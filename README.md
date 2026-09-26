# LLD Practice Platform

A full-stack low-level design (LLD) practice platform that lets users browse system design problems, submit designs, and receive evaluation feedback.

## Overview

This project includes:

- A React + Vite frontend for browsing problems and submitting attempts
- An Express + Node backend for APIs and evaluation logic
- MongoDB persistence for problems and attempt records
- AI-powered evaluation using OpenAI, with rule-based evaluation as a fallback

## Tech Stack

- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- AI: OpenAI API

## Project Structure

```text
LLD-Assignment/
├── backend/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

## Prerequisites

Before starting, make sure you have:

- Node.js 18+ installed
- npm installed
- MongoDB running locally or a MongoDB connection string
- An OpenAI API key

## Installation

1. Clone the repository.
2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Environment Variables

Create a `.env` file in the `backend` folder with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/lld-practice
OPENAI_API_KEY=your_openai_api_key_here
```

Notes:

- `MONGO_URI` should point to your MongoDB instance.
- `OPENAI_API_KEY` is required for AI-based evaluation.
- If your MongoDB runs elsewhere, update the connection string accordingly.

## Running the Application

### 1) Start the backend

```bash
cd backend
npm run dev
```

The API will start on:

- http://localhost:3000

### 2) Start the frontend

In a second terminal:

```bash
cd frontend
npm run dev
```

The frontend typically runs on:

- http://localhost:5173

## Seeding Sample Problems

This project includes a seed script for sample LLD problems.

Run:

```bash
cd backend
node src/seed.js
```

This inserts example design problems such as ATM, parking lot, library management, and ticket booking systems.

## Main Features

- Browse available LLD problems
- View detailed problem descriptions and requirements
- Design a solution in the browser
- Submit a design attempt for evaluation
- Review AI or rule-based feedback
- View previous attempts and history

## Notes

- The frontend API client is configured to call the backend at `http://localhost:3000/api` in `frontend/src/services/api.js`.
- If your backend runs on a different port, update that base URL to match your local configuration.
- The backend server file defaults to port `5000`, so keep the frontend and backend URLs aligned.

## Common Scripts

### Backend

```bash
npm run dev
npm start
```

### Frontend

```bash
npm run dev
npm run build
npm run lint
```

## License

This project is currently unlicensed unless a specific license is added later.
