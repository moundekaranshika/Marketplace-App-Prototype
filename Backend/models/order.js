const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: mongoose.Schema.Types.ObjectId,
  sellerId: mongoose.Schema.Types.ObjectId,
  status: { type: String, default: "Order Placed" },
  timeline: [
    {
      status: String,
      date: Date
    }
  ]
});

module.exports = mongoose.model("Order", orderSchema);
