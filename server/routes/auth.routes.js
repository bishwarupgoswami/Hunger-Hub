import express from "express";

import {
  registerUserController,
  verifyEmailController,
  loginUserController,
  logoutUserController,
} from "../controllers/user.controller.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/verify-email", verifyEmailController);
router.post("/login", loginUserController);

// Keep logout disabled for now
// router.post("/logout", auth, logoutUserController);

export default router;