const Contact = require("../models/Contact");
const validator = require("validator");

exports.submitContactForm = async (req, res) => {
  try {
    //fetch data from req body
    const { name, email, message } = req.body;

    //validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    //validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Check if the email already exists in the database
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({
        success: false,
        message:
          "This email is already registered. Please use a different email.",
      });
    }

    //Save the contact form data to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
      data: newContact,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Failed to send message. Please try again later.",
    });
  }
};
