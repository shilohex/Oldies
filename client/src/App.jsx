import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Pages/customer/signup/Signup";
import Login from "./Pages/customer/login/Login";
import VendorSignUp from "./Pages/vendor/signup/Signup";
import Landingpage from "./Pages/landingpage/Landingpage";
import VendorLogin from "./Pages/vendor/login/Login";
import Product from "./component/products.jsx";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout/Checkout";
import Carousel from "./component/carousel.jsx";
import Profile from "./Pages/Profile/profile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/vendor/signup" element={<VendorSignUp />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>

      <main className="App"></main>
    </>
  );
}

export default App;
