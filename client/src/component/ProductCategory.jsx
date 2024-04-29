import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter.jsx";
import Productlist from "./Productlist.jsx";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ProductCategory() {
  const [filterByProductName, SetfilterByProductName] = useState("");
  const [filterByPrice, setfilterByPrice] = useState();
  const [filterByCategory, setfilterByCategory] = useState();
  const location = useLocation();
  const productCategoryToFilter = location.pathname.split("/")[2];
  const [allProducts, setAllProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5001/product?category=${productCategoryToFilter}&productName=${filterByProductName}`
      );
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [filterByProductName]);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header />
      {/* <h1 className="text-3xl font-bold underline mt-50 p-10 flex justify-center text-center">
        PRODUCTS
      </h1> */}

      <div className="flex justify-center text-center mb-9 mt-[220px] gap-5  focus:ring-pry">
        <input
          type="text"
          placeholder="Filter by productName"
          value={filterByProductName}
          onChange={(e) => SetfilterByProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by price"
          value={filterByPrice}
          onChange={(e) => setfilterByPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by category"
          value={filterByCategory}
          onChange={(e) => setfilterByCategory(e.target.value)}
        />
      </div>

      <Productlist products={allProducts} />

      <Footer />
    </>
  );
}

export default ProductCategory;
