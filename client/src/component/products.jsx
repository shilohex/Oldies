import React from "react";
import { useState } from "react";
import Product from "./product.js";
import Filter from "./component/Filter.jsx";
import products from "./component/products.jsx";
import Productlist from "./component/Productlist.jsx";
import Product from "./product.js";

function products() {
  const [product, setProduct] = useState(product);
  const [filterByTitle, SetfilterByTitle] = useState("");
  const [filterByRating, setfilterByRating] = useState(0);
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
      posterURL: "",
      rating: 0,
    });
  }
  console.log(newProduct);

  return (
    <>
      <h1 className="text-3xl font-bold underline">PRODUCTS</h1>
      <div>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterByTitle}
          onChange={(e) => SetfilterByTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by rating"
          value={filterByRating}
          onChange={(e) => setfilterByRating(e.target.value)}
        />
        <div>
          <p>Add Movie</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title"
              value={newProduct.title}
              onChange={(e) =>
                setnewProduct({ ...newProduct, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="description"
              value={newProduct.description}
              onChange={(e) =>
                setnewProduct({ ...newProduct, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="posterURL"
              value={newProduct.posterURL}
              onChange={(e) =>
                setnewProduct({ ...newProduct, posterURL: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="rating"
              value={newProduct.rating}
              onChange={(e) =>
                setnewProduct({ ...newProduct, rating: e.target.value })
              }
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      {filterByRating || filterByTitle ? (
        <Filter list={product} rating={filterByRating} title={filterByTitle} />
      ) : (
        <Productlist list={product} />
      )}
    </>
  );
}

export default products;
