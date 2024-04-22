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
import BuyerProfile from "./Pages/Profiles/buyerprofile.jsx";
import VendorProfile from "./Pages/Profiles/vendorprofile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vendor/signup" element={<VendorSignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/vendor-profile" element={<VendorProfile />} />
          <Route path="/buyer-profile" element={<BuyerProfile />} />
        </Routes>
      </BrowserRouter>

      <main className="App"></main>
    </>
  );
}

export default App;
