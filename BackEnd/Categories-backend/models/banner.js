const mongoose = require('mongoose');

// Define schema and model
const bannerSchema = new mongoose.Schema({
  image: String,
}, { collection: 'banner' });

const Banner = mongoose.model('Banner', bannerSchema);
module.exports = Banner;