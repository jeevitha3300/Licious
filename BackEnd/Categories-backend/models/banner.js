const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  enabled: { type: Boolean, default: true }
});

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;
