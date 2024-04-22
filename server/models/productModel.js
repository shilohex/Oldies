const mongoose = require("mongoose");
const productschema = mongoose.Schema(
  {
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
    imageUrl: {
      type: String,
    },
    productOwnerId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    shopName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", productschema);

module.exports = product;
