const express = require("express");
const router = express.Router();
const { submitContactForm } = require("../controllers/ContactController");

router.post("/contacts", submitContactForm);

module.exports = router;