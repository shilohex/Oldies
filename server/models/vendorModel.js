const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const vendorschema = mongoose.Schema(
  {
    shopname: {
      type: String,
      required: true,
    },
    shopaddress: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
      default: "+2345667",
    },
    password: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

vendorschema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
vendorschema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const Vendor = mongoose.model("Vendor", vendorschema);

module.exports = Vendor;
