import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Landingpage from "./Pages/landingpage/Landingpage";
import Product from "./component/products.jsx";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout/Checkout";
import Carousel from "./component/carousel.jsx";
import BuyerProfile from "./Pages/buyer/Buyerprofile.jsx";
import VendorProfile from "./Pages/Profiles/vendor/VendorProfile.jsx";
import VendorSignup from "./Pages/auth/vendor-signup/VendorSignup.jsx";
import CustomerSignup from "./Pages/auth/customer-signup/CustomerSignup.jsx";
import Login from "./Pages/auth/login/Login.jsx";
import ProductCategory from "./component/ProductCategory.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/customer/signup" element={<CustomerSignup />} />
          <Route path="/vendor/signup" element={<VendorSignup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:category" element={<ProductCategory />} />
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
