import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter.jsx";
import Productlist from "./Productlist.jsx";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import axios from "axios";
import { Select, Input } from "antd";
const { Search } = Input;
function Products() {
  const [filterByProductName, SetfilterByProductName] = useState("");
  const [filterByCategory, setfilterByCategory] = useState("");

  const [allProducts, setAllProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5001/product?category=${filterByCategory}&productName=${filterByProductName}`
      );
      console.log(data);
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value) => {
    setfilterByCategory(value);
  };
  useEffect(() => {
    getProducts();
  }, [filterByProductName, filterByCategory]);

  return (
    <>
      <Header />
      {/* <h1 className="text-3xl font-bold underline mt-50 p-10 flex justify-center text-center">
        PRODUCTS
      </h1> */}

      <div className="flex justify-center items-center mb-9 mt-[220px] gap-5  focus:ring-pry">
        <Input
          size="large"
          className="max-w-[250px]"
          placeholder="What are you looking for..."
          type="text"
          value={filterByProductName}
          onChange={(e) => SetfilterByProductName(e.target.value)}
        />

        <Select
          placeholder="Filter by Category"
          size="large"
          style={{
            width: 200,
          }}
          onChange={handleChange}
          options={[
            {
              value: "Furniture",
              label: "Furniture",
            },
            {
              value: "thrift-shops",
              label: "thrift-shops",
            },
            {
              value: "Electronics",
              label: "Electronics",
            },
            {
              value: "Antiques",
              label: "Antiques",
            },
          ]}
        />
      </div>

      {allProducts?.length <= 0 ? (
        <div className="grid place-items-center h-[calc(100vh-200px)]">
          <h1 className="text-3xl text-gray-600 capitalize">
            Sorry no product found. 🥲
          </h1>
        </div>
      ) : (
        <Productlist products={allProducts} />
      )}

      <Footer />
    </>
  );
}

export default Products;
