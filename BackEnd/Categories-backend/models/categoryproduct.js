;


// models/Category.js
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id: { 
      type: String, 
      unique: true }, // optional custom id

    title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
