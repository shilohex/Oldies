const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  const {
    productName,
    description,
    price,
    imageUrl,
    productOwnerId,
    shopName,
    category,
  } = req.body;

  if (
    !productName ||
    !description ||
    !price ||
    !imageUrl ||
    !productOwnerId ||
    !shopName ||
    !category
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newProduct = await Product.create({
      productName: productName,
      description: description,
      price: price,
      imageUrl: imageUrl,
      productOwnerId: productOwnerId,
      shopName: shopName,
      category: category,
    });

    if (newProduct) {
      return res.status(201).json({ message: "Product created successfully" });
    }
  } catch (error) {
    console.error("Product error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllProducts = async (req, res) => {
  const { category, productName } = req.query;
  const queryObject = {};

  if (category) {
    queryObject.category = category;
  }
  if (productName) {
    queryObject.productName = { $regex: productName };
  }

  try {
    const products = await Product.find(queryObject);
    if (products) {
      return res.status(200).json(products);
    }
  } catch (error) {
    console.error("Product error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getVendorOnlyProducts = async (req, res) => {
  const vendorId = req.params.vendorId;
  try {
    const products = await Product.find({ productOwnerId: vendorId });
    if (products) {
      return res.status(200).json(products);
    }
  } catch (error) {
    console.error("Product error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.productId;
  console.log(productId);
  try {
    const products = await Product.findOne({ _id: productId });
    if (products) {
      return res.status(200).json(products);
    } else {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Product error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  createProduct,
  getAllProducts,
  getVendorOnlyProducts,
  getProductById,
};
