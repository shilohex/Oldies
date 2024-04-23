import React from "react";
import { useState } from "react";
import Filter from "./Filter.jsx";
import Productlist from "./Productlist.jsx";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

function Products() {
  const [filterByProductName, SetfilterByProductName] = useState("");
  const [filterByPrice, setfilterByPrice] = useState();
  const [filterByCategory, setfilterByCategory] = useState();

  const [newProduct, setnewProduct] = useState({
    productName: "",
    description: "",
    imageurl: "",
    category: "",
    price: 0,
  });
  function handleSubmit(e) {
    e.preventDefault();
    setProduct([...product, newProduct]);
    setnewProduct({
      productName: "",
      description: "",
      imageurl: "",
      category: "",
      price: 0,
    });
  }
  console.log(newProduct);

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
      {filterByPrice || filterByProductName ? (
        <Filter
          list={product}
          price={filterByPrice}
          productName={filterByProductName}
          category={filterByCategory}
        />
      ) : (
        <Productlist />
      )}
      <Footer />
    </>
  );
}

export default Products;
