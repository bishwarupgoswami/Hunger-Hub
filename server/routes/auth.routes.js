import express from "express";

import {
  registerUserController,
  verifyEmailController,
  loginUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Auth route is working" });
});

router.post("/register", registerUserController);
router.post("/verify-email", verifyEmailController);
router.post("/login", loginUserController);

export default router;