const express = require("express");
const cors = require("cors");
const connectdb = require("./db");
const dotenv = require("dotenv");
const app = express();
const port = 5001;
const userRoutes = require("./routes/userRoutes");
const VendorRoutes = require("./routes/vendorRoutes");
dotenv.config();
connectdb();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/user", userRoutes);
app.use("/vendor", VendorRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
