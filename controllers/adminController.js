// controllers/adminController.js
import User from "../models/User.js";
import Portfolio from "../models/Portfolio.js";

// All users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// All portfolios (admin)
export const getAllPortfolios = async (req, res) => {
  try {
    const data = await Portfolio.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
