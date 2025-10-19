// models/UserModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // email: String,
  // contact: String,
    email: { type: String, required: true, unique: true },   // ✅ unique
  contact: { type: String, required: true, unique: true },
  designation: {type:String,required:true,unique:true},
  password: String,
  permissions: {
    User: Boolean,
    Category: Boolean,
    Subcategory: Boolean,
    Product: Boolean,
    Banner: Boolean,
    Customer: Boolean,
    Testimonial: Boolean,
     Order: Boolean,
    Setting: Boolean,
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
