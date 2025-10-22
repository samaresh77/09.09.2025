import express from "express";
import { registerUser, loginUser, logoutUser, getUserProfile } from "../controllers/User.js";
// import { authenticateToken } from "../middleware/authMiddleware.js";
const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login a user
router.post("/login", loginUser);

// Logout a user
router.post("/logout", logoutUser);

// Get user profile (protected route)
router.get("/profile", getUserProfile);



export default router;