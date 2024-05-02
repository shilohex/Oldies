import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { message } from "antd";
import { formatToCurrency } from "../utils/helpers";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  let { cartItems, setCartItems } = React.useContext(CartContext);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://oldies.onrender.com/product/products/${productId}`
      );
      setSingleProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addProductToCart = () => {
    const checkIfItemInCartAlready = cartItems.find(
      (item) => item._id === productId
    );

    if (checkIfItemInCartAlready) {
      messageApi.error("Item already in cart");
    } else {
      const newCartItems = [...cartItems, singleProduct];
      setCartItems(newCartItems);
      messageApi.success("Product added to cart");
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(cartItems);

  return (
    <div>
      {contextHolder}
      <Header />
      <div className="flex flex-col items-center justify-center p-10 mt-[180px] ">
        <h1 className="text-3xl text-sec2 font-bold mb-4">
          {singleProduct?.productName}
        </h1>
        <img
          className="w-64 h-auto mb-4 rounded-lg"
          src={singleProduct?.imageUrl}
          alt={singleProduct?.productName}
        />
        <p className="text-gray-700">{singleProduct?.description}</p>
        <p className="text-gray-900 mt-4">
          Price: {formatToCurrency(singleProduct?.price)}
        </p>

        <div>
          <button
            onClick={addProductToCart}
            className=" flex gap-5 justify-center items-center text-center border-5 border-pry rounded-full p-4 font-semi-bold   mt-8 bg-pry  hover:bg-[#f8e5c4] text-sec2"
          >
            <FaCartPlus />
            Add to cart
          </button>
        </div>

        <hr />
      </div>

      <div className="flex   pr-10">
        <p className="text-2xl text-sec2  hover:text-pry mt-10  p-3 ">
          {" "}
          Customers also viewed{" "}
        </p>
      </div>
      <Link to={"/product"}>
        <div className=" gap-5 flex  h-[50vh] mb-4 p-2 ">
          {/* <img src={singleProduct?.imageUrl} alt="" /> */}
          {/* <p className="felx justify-items-stretch mb-7">newly made top</p> */}

          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className=" w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>

          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
          <div className="max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 overflow-hidden">
            <img
              className="w-64 h-auto mb-4 max-w-[200px] rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
        </div>
      </Link>

      <Footer />
    </div>
  );
};

export default ProductPage;
