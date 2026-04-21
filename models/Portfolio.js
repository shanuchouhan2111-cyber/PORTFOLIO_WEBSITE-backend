const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      default: "",
    },

    projectLink: {
      type: String,
      default: "",
    },

    githubLink: {
      type: String,
      default: "",
    },

    technologies: {
      type: String,
      default: "",
    },

    // 🖼️ Image
    image: {
      type: String,
      default: "",
    },

    // 👤 Personal Info
    name: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      trim: true,
      default: "",
    },

    profession: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    // ✅ Skills & Languages
    skills: {
      type: [String],
      default: [],
    },

    languages: {
      type: [String],
      default: [],
    },

    // ================= NEW FIELDS =================

    // 🚀 Projects (BEST WAY)
    projects: [
      {
        title: { type: String, default: "" },
        description: { type: String, default: "" },
      },
    ],

    // 🎓 Education
    education: {
      degree: { type: String, default: "" },
      college: { type: String, default: "" },
      year: { type: String, default: "" },
    },

    // 🔗 Links
    links: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      website: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
