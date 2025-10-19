const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    date: String,
    timeSlot: String,
    address: {
      label: String,
      fullAddress: String,
      city: String,
      mobile: String,
    },
    items: [
      {
        id: String,
        name: String,
        image: String,
        quantity: Number,
        offerPrice: Number,
        price: Number,
        weight: String,
      },
    ],
    subtotal: Number,
    deliveryCharge: Number,
    total: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
