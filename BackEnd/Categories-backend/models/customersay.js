const mongoose = require('mongoose');

// Define schema and model
const customersaySchema = new mongoose.Schema({
  image: String,
}, { collection: 'customersay' });

const CustomerSay = mongoose.model('CustomerSay', customersaySchema);

module.exports = CustomerSay;
