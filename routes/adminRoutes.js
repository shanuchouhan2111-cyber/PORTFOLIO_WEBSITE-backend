// routes/adminRoutes.js
import express from "express";
import {
  getAllUsers,
  deleteUser,
  getAllPortfolios,
} from "../controllers/adminController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users", protect, isAdmin, getAllUsers);
router.delete("/users/:id", protect, isAdmin, deleteUser);
router.get("/portfolios", protect, isAdmin, getAllPortfolios);

export default router;
