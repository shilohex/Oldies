import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import VendorProfileInfo from "./VendorProfileInfo";
import Footer from "../../../component/Footer/Footer";
import axios from "axios";
import { GiHyenaHead } from "react-icons/gi";
import VendorsProducts from "./VendorsProducts";

const VendorProfile = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://oldies.onrender.com/product");
        setProducts(response.data); // Assuming response.data is an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <VendorProfileInfo />
        <AddProduct />
        <VendorsProducts />
      </div>

      <Footer />
    </div>
  );
};

export default VendorProfile;
