import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hunger-Hub server is running" });
});

app.get("/api/auth/test", (req, res) => {
  res.json({ message: "Auth route is working" });
});

export default app;