const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userschema = mongoose.Schema(
  {
    fullName: {
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
    username: {
      type: String,
      required: true,
      default: "+2345667",
    },
    // address: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

userschema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userschema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const User = mongoose.model("Buyer", userschema);

module.exports = User;
