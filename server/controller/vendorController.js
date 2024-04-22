const User = require("../models/userModel");
const { generateToken } = require("../utils/generateToken");

const registerVendor = async (req, res) => {
  const { shopname, shopaddress, number, email, password } = req.body;

  if (!email || !password || !shopname || !shopaddress || !number) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const existingVendor = await User.findOne({ email });
    // console.log(User);

    if (existingVendor) {
      return res.status(401).json({ error: "Email already in use" });
    }

    const newVendor = await User.create({
      shopname: shopname,
      shopaddress: shopaddress,
      number: number,
      password: password,
      email: email,
      accountType: "vendor",
    });

    if (newVendor) {
      return res.status(201).json({ ...newVendor, password: undefined });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const authVendor = async (req, res) => {
  const { shopname, password } = req.body;
  if (!shopname || !password) {
    return res.status(400).send({ error: "All fields are required" });
  }
  const vendor = await User.findOne({ username });
  if (!vendor) {
    return res.status(401).send({ error: "Invalid username" });
  }

  const isMatch = await vendor.matchPassword(password);
  if (!isMatch) {
    return res.status(401).send({ error: "Invalid password" });
  }
  res.status(200).send({
    message: "User authenticated sucessfully",
    token: generateToken({
      id: vendor._id,
      email: vendor.email,
      username: vendor.username,
    }),
  });
};

module.exports = { registerVendor, authVendor };
