const express = require("express");
const {
  createProduct,
  getAllProducts,
  getVendorOnlyProducts,
} = require("../controller/productController");

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);
router.get("/:vendorId", getVendorOnlyProducts);

module.exports = router;
