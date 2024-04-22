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
      return res.status(201).send("Product created successfully");
    }
  } catch (error) {
    console.error("Product error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (products) {
      return res.status(200).json(products);
    }
  } catch (error) {
    console.error("Product error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createProduct, getAllProducts };
