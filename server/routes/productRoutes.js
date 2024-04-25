const express = require("express");
const {
  createProduct,
  getAllProducts,
  getVendorOnlyProducts,
  getProductById,
} = require("../controller/productController");

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);
router.get("/:vendorId", getVendorOnlyProducts);
router.get("/products/:productId", getProductById);

module.exports = router;
