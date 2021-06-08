const mongoose = require("mongoose");

var Product = mongoose.model("Product", {
  productName: String,
  price: Number,
  pcs: Number,
  imgPath: String,
});

module.exports = { Product };
