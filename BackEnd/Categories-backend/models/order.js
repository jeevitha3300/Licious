const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
userEmail: { type: String, required: true },
  items: [
    {
      id: String,
      name: String,
      price: Number,
      offerPrice: Number,
      quantity: Number,
      image: String,
      weight: { type: String, default: "Not specified" }, // ✅ fix added
    },
  ],
  subtotal: Number,
  deliveryCharge: Number,
  totalAmount: Number,
  address: {
    label: String,
    fullAddress: String,
    city: String,
    mobile: String,
  },
  timeSlot: String,
    status: {
    type: String,
    enum: ["Pending", "Processing", "Delivered", "Cancelled"],
    default: "Pending", 
  },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Order", orderSchema);






