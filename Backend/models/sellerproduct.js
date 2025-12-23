const mongoose = require("mongoose");

const sellerProductSchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  sellerId: mongoose.Schema.Types.ObjectId,
  price: Number,
  stock: Number
});

module.exports = mongoose.model("SellerProduct", sellerProductSchema);
