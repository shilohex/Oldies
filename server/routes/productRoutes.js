const express = require("express");
const {
  createProduct,
  getAllProducts,
} = require("../controller/productController");

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);

module.exports = router;
