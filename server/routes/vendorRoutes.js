const express = require("express");
const {
  registerVendor,
  authVendor,
} = require("../controller/vendorController");

const router = express.Router();

router.route("/register").post(registerVendor);

module.exports = router;
