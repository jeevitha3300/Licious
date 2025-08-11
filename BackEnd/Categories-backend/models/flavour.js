const mongoose = require('mongoose');

const flavourSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  desc: { type: String },
  weight: { type: String },
  price: { type: Number, required: true },
  offerPrice: { type: Number },
  discount: { type: String },
  time: { type: String },
  images: [String],
});

module.exports = mongoose.model('Flavour', flavourSchema); // Capital "F"
