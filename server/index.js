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
connectdb();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://oldies-murex.vercel.app",
    ],
  })
);
app.use(express.json());

app.use("/user", userRoutes);
app.use("/vendor", VendorRoutes);
app.use("/product", ProductRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
