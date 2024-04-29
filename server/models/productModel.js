const mongoose = require("mongoose");
const productschema = mongoose.Schema({
  productName: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  imageUrl: {
    type: String,
  },
  productOwnerId: {
    type: String,
    // mongoose.Types.ObjectId
    ref: "User",
  },
  shopName: {
    type: String,
  },
  category: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const product = mongoose.model("Product", productschema);

module.exports = product;
