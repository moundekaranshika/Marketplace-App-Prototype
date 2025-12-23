const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model("Product", productSchema);
