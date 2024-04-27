import React from "react";
import "./Checkout.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import logo from "../../assets/oldieslogo.png";
// import checkout from "../Checkout/checkout";
import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 50, quantity: 1 },
    { id: 2, name: "Product 2", price: 35, quantity: 1 },
  ]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between py-2 border-b border-gray-300"
      >
        <div className="flex items-center space-x-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover"
          />
          <div>
            <p className="text-lg">{item.name}</p>
            <p className="text-gray-600">${item.price}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleDecrement(item.id)}
            className="text-gray-500 hover:text-gray-700"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item.id)}
            className="text-gray-500 hover:text-gray-700"
          >
            +
          </button>
          <p className="text-gray-600">${item.price * item.quantity}</p>
        </div>
      </div>
    ));
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    // Handle checkout logic
  };

  return (
    <div>
      {/* Header */}
      <div className="main">
        <Link to={"/"}>
          <img
            src={logo}
            className="w-[6rem] shadow-lg bg-sec2 rounded-full"
            alt=""
          />
        </Link>
        <div
          id="text2"
          className="dark:md:hover:text-pry  text-sec2 flex justify-center text-center"
        >
          <Link to={"/signup"}>
            <p> Sign Up</p>
          </Link>
        </div>
      </div>

      {/* Cart Summary */}
      <section className="box text-sec2 ">
        <div id="innertxt">
          <p>Home</p>
          <p>{">"}</p>
          <div id="cart1">
            <p>Cart</p>
            <span id="Cart">{cartItems.length}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section>
        <div className="text text-sec2 ">
          <p>Product</p>
          <div>
            <p>Unit price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
      </section>

      {/* Cart Items */}
      {renderCartItems()}

      {/* Subtotal */}
      <section>
        <div className="subtotal text-sec2 ">
          <div>
            <p>Subtotal</p>
          </div>
          <div>
            <p className="subtotal-value">${subtotal}</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="checkout rounded-full text-sec2">
          <div>
            <button onClick={handleCheckout}>CHECKOUT</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Checkout;
