const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const CategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  subcategories: [SubcategorySchema], 
  enabled: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
