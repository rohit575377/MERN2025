const Contact = require("../models/contact-model");

const contactForm = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;
    await Contact.create({ username, email, message });
    res.status(201).json({ message: "message send successfully" });
  } catch (error) {
    next({
      status: error.status,
      message: "message not delivered",
      extraDetails: error.message
    })
  }
}

module.exports = { contactForm }