import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

// CORS
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// Connect to MongoDB before API requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);

    return res.status(500).json({
      message: "Database connection failed",
      success: false,
      error: true,
    });
  }
});

// Test routes
app.get("/", (req, res) => {
  res.json({
    message: "Hunger-Hub server is running",
  });
});

app.get("/api/auth/test", (req, res) => {
  res.json({
    message: "Auth route is working",
  });
});

// API routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

export default app;

// Local development
if (!process.env.VERCEL) {
  const server = app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });

  // Keep local development process alive
  setInterval(() => {}, 10000);
}