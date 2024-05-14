const express = require("express");
const cors = require("cors");
const connectdb = require("./db");
const dotenv = require("dotenv");
const app = express();
const port = 5001;
const userRoutes = require("./routes/userRoutes");
const VendorRoutes = require("./routes/vendorRoutes");
const ProductRoutes = require("./routes/productRoutes");
dotenv.config();

const allowedOrigins = [
  "https://oldies-murex.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];
// middleware
app.use(function (req, res, next) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

app.use("/user", userRoutes);
app.use("/vendor", VendorRoutes);
app.use("/product", ProductRoutes);

app.listen(port, async () => {
  try {
    await connectdb();
    console.log(`Server running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
