import express from "express";

import {
  loginUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Auth route is working" });
});

export default router;