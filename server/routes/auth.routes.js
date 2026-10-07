import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Auth route is working" });
});

// Auth routes
router.post("/register", registerUserController);
router.post("/verify-email", verifyEmailController);
router.post("/login", loginUserController);
router.post("/logout", auth, logoutUserController);

export default router;