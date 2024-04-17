const express = require("express");
const { registerUser, authUser } = require("../controller/userController");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
// router.route("/login", authUser);

module.exports = router;
