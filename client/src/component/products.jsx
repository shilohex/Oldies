import React from "react";
import { useState } from "react";
import Filter from "./Filter.jsx";
import Productlist from "./Productlist.jsx";
import products from "../product.js";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

function Products() {
  const [product, setProduct] = useState(products);
  const [filterByTitle, SetfilterByTitle] = useState("");
  const [filterByPrice, setfilterByPrice] = useState(Number);
  const [newProduct, setnewProduct] = useState({
    title: "",
    description: "",
    url: "",
    price: 0,
  });
  function handleSubmit(e) {
    e.preventDefault();
    setProduct([...product, newProduct]);
    setnewProduct({
      title: "",
      description: "",
      Url: "",
      price: 0,
    });
  }
  console.log(newProduct);

  return (
    <>
      {/* <Header /> */}
      <h1 className="text-3xl font-bold underline mt-50 p-10 flex justify-center text-center">
        PRODUCTS
      </h1>
      <div className="flex justify-center text-center mb-9">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterByTitle}
          onChange={(e) => SetfilterByTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by price"
          value={filterByPrice}
          onChange={(e) => setfilterByPrice(e.target.value)}
        />
      </div>
      {filterByPrice || filterByTitle ? (
        <Filter list={product} price={filterByPrice} title={filterByTitle} />
      ) : (
        <Productlist list={product} />
      )}
      <Footer />
    </>
  );
}

export default Products;
