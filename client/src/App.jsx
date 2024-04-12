import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Pages/customer/signup/Signup";
import Login from "./Pages/customer/login/Login";
import VendorSignUp from "./Pages/vendor/signup/Signup";
import Landingpage from "./Pages/landingpage/Landingpage";
import VendorLogin from "./Pages/vendor/login/Login";
import Product from "./product.js";
import About from "./Pages/About";
import Checkout from "./Pages/Checkout/Checkout";
import Carousel from "./component/carousel.jsx";

function App() {
  const slides = [
    "https://digital-bucket.prod.bfi.co.id/assets/Blog/Blog%20New/Bisnis%20Thrift%20Shop/23%20Maret%202022.jpeg",
    "https://www.sunset.com/wp-content/uploads/thrift-store-getty-0220-1-1200x900.jpg",
    "https://i.insider.com/59976ba64dcf3532008b49d7?width=700",
    "https://kiwanissale.com/wp-content/uploads/2020/02/IMG_0697.jpg",
    "https://www.avintagesplendor.com/wp-content/uploads/2022/09/best-thrift-stores-in-la-scaled.jpg",
    "https://cdn.shopify.com/s/files/1/0269/9644/1191/files/Secondhand_Shopping_2048x2048.jpg?v=1628535295",
  ];

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
        </Routes>
      </BrowserRouter>

      <main className="App">
        <div className="max-w-lg">
          <Carousel autoslide={true} autoslideinterval={1000}>
            {slides.map((s) => (
              <img src={s} />
            ))}
          </Carousel>
        </div>
      </main>
    </>
  );
}

export default App;
