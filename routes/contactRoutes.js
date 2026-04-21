const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");

router.get("/", getContacts);
router.get("/:id", getContactById);
router.post("/", createContact);
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);

module.exports = router;
