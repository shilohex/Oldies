import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Pages/customer/signup/Signup";
import Login from "./Pages/customer/login/Login";
import VendorSignUp from "./Pages/vendor/signup/Signup";
import Landingpage from "./Pages/landingpage/Landingpage";
import VendorLogin from "./Pages/vendor/login/Login";
import Productlist from "./component/Productlist.jsx";
import Filter from "./component/Filter.jsx";
import { useState } from "react";
import product from "./product.js";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  const [product, setProduct] = useState(product);
  const [filterByTitle, SetfilterByTitle] = useState("");
  const [filterByRating, setfilterByRating] = useState(0);
  const [newProduct, setnewProduct] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/vendor/signup" element={<VendorSignUp />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
