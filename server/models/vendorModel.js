const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema(
  {
    shopname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      default: "+2345667",
    },
    shopaddress: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
