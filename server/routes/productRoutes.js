const express = require("express");
const { createProduct } = require("../controller/productController");

const router = express.Router();

router.route("/new-product").post(createProduct);

module.exports = router;
