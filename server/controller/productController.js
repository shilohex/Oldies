const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  console.log(req.body);
};

module.exports = { createProduct };
