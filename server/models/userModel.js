const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userschema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    shopname: {
      type: String,
    },
    accountType: {
      type: String,
      required: true,
    },
    shopaddress: {
      type: String,
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
const User = mongoose.model("User", userschema);

module.exports = User;
