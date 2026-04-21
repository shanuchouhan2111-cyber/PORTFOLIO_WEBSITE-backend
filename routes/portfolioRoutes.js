const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

router.post("/", upload.single("image"), createPortfolio);
router.get("/", getPortfolios);
router.get("/:id", getPortfolioById);
//router.post("/", createPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

module.exports = router;
