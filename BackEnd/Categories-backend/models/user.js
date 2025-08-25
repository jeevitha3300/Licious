// models/UserModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  contact: String,
  designation: String,
  password: String,
  permissions: {
    User: Boolean,
    Category: Boolean,
    Product: Boolean,
    Banner: Boolean,
    Customer: Boolean,
    Testimonial: Boolean,
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
