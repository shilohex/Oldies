const express = require("express");
const { verification } = require("../controller/verificationController");

const router = express.Router();

router.route("/verification").post(verification);

module.exports = router;
