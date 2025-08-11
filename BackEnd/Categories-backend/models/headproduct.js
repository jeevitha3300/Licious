const mongoose = require('mongoose');

// Define schema
const headproductschema = new mongoose.Schema({
  breadcrumb: [String],
  heading: String,
  carouselImages: [
    {
      src: String,
      alt: String,
    }
  ],
  categories: [
    {
      key: String,
      // path: String,
      image: String,
      alt: String,
      label: String,
    }
  ],
}, { collection: 'head' }); // Use collection name 'head'

module.exports = mongoose.model('HeadProduct', headproductschema);
