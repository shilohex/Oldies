import React from "react";
import { useState } from "react";
import Filter from "./component/Filter.jsx";
import products from "./component/products.jsx";
import Productlist from "./component/Productlist.jsx";

function products() {
  const [product, setProduct] = useState(product);
  const [filterByTitle, SetfilterByTitle] = useState("");
  const [filterByPrice, setfilterByPrice] = useState(0);
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
          placeholder="Filter by price"
          value={filterByPrice}
          onChange={(e) => setfilterByPrice(e.target.value)}
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
              placeholder="url"
              value={newProduct.url}
              onChange={(e) =>
                setnewProduct({ ...newProduct, url: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="price"
              value={newProduct.price}
              onChange={(e) =>
                setnewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      {filterByRating || filterByTitle ? (
        <Filter list={product} price={filterByPrice} title={filterByTitle} />
      ) : (
        <Productlist list={product} />
      )}
    </>
  );
}

export default products;
