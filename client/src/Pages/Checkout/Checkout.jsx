import React from "react";
import "./Checkout.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import logo from "../../assets/oldieslogo.png";
// import checkout from "../Checkout/checkout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { formatToCurrency } from "../../utils/helpers";

function Checkout() {
  let { user } = React.useContext(AuthContext);
  let { cartItems, setCartItems } = React.useContext(CartContext);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div
        key={item._id}
        className="flex items-center justify-between py-2 border-b border-gray-300"
      >
        <div className="flex items-center justify-center space-x-2 ml-[11px] mr-11">
          <img
            src={item.imageUrl}
            alt={item.ProductName}
            className="w-16 h-16 object-cover"
          />
          <div className=" justify-center flex text-center">
            <p className="text-lg">{item.ProductName}</p>
            <p className="text-gray-600">{formatToCurrency(item.price)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => handleDecrement(item._id)}
            className="bg-pry text-black hover:bg-[#f8e5c4] p-1 rounded-full"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item._id)}
            className="bg-pry text-black hover:bg-[#f8e5c4] p-1 rounded-full"
          >
            +
          </button>
          <p className="text-gray-600">
            {formatToCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
    ));
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    // Handle checkout logic

    if (!user.id) {
      navigate("/login");
      return;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="main text-sec2">
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
          <Link to={"/product"}>
            <p className="font-bold"> Product</p>
          </Link>
        </div>
      </div>

      <section className="max-w-[700px] mx-auto">
        {" "}
        {/* Cart Summary */}
        <section className="box text-sec2 ">
          <div id="innertxt">
            <div>
              <span id="Cart">{cartItems.length}</span>
            </div>
          </div>
        </section>
        {/* Product Details */}
        <section>
          <div className="text flex justify-between items-center m-auto mt-[1v] w-[100%] text-sec2 ">
            <p>Product</p>
            <p>Unit price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </section>
        <div className=" ">{renderCartItems()}</div>
        {/* Cart Items */}
        {/* Subtotal */}
        <section>
          <div className="subtotal text-sec2 ">
            <div>
              <p>Subtotal</p>
            </div>
            <div>
              <p className="subtotal-value">{formatToCurrency(subtotal)}</p>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="checkout cursor-pointer rounded-full w-[25%] text-sec2">
            {" "}
            <div>
              <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Checkout;
