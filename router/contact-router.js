const express = require("express");
const validate = require("../middlewares/validate-middleware");
const contactController = require("../controllers/contact-controller");

const router = express.Router();

router.route("/contact").post(contactController.contactForm);

module.exports = router;