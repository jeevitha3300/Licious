const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  // subcategory: { type: mongoose.Schema.Types.ObjectId, required: true },
    subcategory: { type: String, required: true },
  name: { type: String, required: true },
  desc: { type: String },
  weight: { type: String },
  price: { type: Number, required: true },
  offerPrice: { type: Number },
  discount: { type: Number, default: 0 },
  images: { type: [String], required: true },
  enabled: { type: Boolean, default: true },
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);
