const Portfolio = require("../models/Portfolio");

// ================= GET ALL =================
const getPortfolios = async (req, res, next) => {
  try {
    const data = await Portfolio.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    next(error);
  }
};

// ================= GET BY ID =================
const getPortfolioById = async (req, res, next) => {
  try {
    const item = await Portfolio.findById(req.params.id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// ================= CREATE =================
const createPortfolio = async (req, res, next) => {
  try {
    let imagePath = "";

    if (req.file) {
      imagePath = req.file.path;
    }

    // ✅ parse JSON fields if needed
    const body = {
      ...req.body,
      image: imagePath,
    };

    if (req.body.skills) {
      body.skills = JSON.parse(req.body.skills);
    }

    if (req.body.languages) {
      body.languages = JSON.parse(req.body.languages);
    }

    if (req.body.projects) {
      body.projects = JSON.parse(req.body.projects);
    }

    if (req.body.education) {
      body.education = JSON.parse(req.body.education);
    }

    if (req.body.links) {
      body.links = JSON.parse(req.body.links);
    }

    const item = await Portfolio.create(body);

    res.status(201).json({
      success: true,
      message: "Portfolio created successfully",
      data: item,
    });
  } catch (error) {
    next(error);
  }
};

// ================= UPDATE =================
const updatePortfolio = async (req, res, next) => {
  try {
    let imagePath = "";

    if (req.file) {
      imagePath = req.file.path;
    }

    const body = {
      ...req.body,
    };

    // ✅ handle image update
    if (imagePath) {
      body.image = imagePath;
    }

    // ✅ parse JSON fields
    if (req.body.skills) {
      body.skills = JSON.parse(req.body.skills);
    }

    if (req.body.languages) {
      body.languages = JSON.parse(req.body.languages);
    }

    if (req.body.projects) {
      body.projects = JSON.parse(req.body.projects);
    }

    if (req.body.education) {
      body.education = JSON.parse(req.body.education);
    }

    if (req.body.links) {
      body.links = JSON.parse(req.body.links);
    }

    const updated = await Portfolio.findByIdAndUpdate(req.params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Portfolio updated successfully",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

// ================= DELETE =================
const deletePortfolio = async (req, res, next) => {
  try {
    const deleted = await Portfolio.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Portfolio deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
};
