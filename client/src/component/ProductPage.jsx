import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { FaCartPlus } from "react-icons/fa";

const ProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);

  const getSingleProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5001/product/products/${productId}`
      );
      setSingleProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center p-10 mt-[180px] ">
        <h1 className="text-3xl text-sec2 font-bold mb-4">
          {singleProduct?.productName}
        </h1>
        <img
          className="w-64 h-auto mb-4"
          src={singleProduct?.imageUrl}
          alt={singleProduct?.productName}
        />
        <p className="text-gray-700">{singleProduct?.description}</p>
        <p className="text-gray-900 mt-4">Price: N{singleProduct?.price}</p>

        <Link to={"/checkout"}>
          <div>
            <button className=" flex gap-5 justify-center items-center border-5 border-pry rounded-full p-4 m-5  mt-8 bg-pry  hover:bg-[#f8e5c4] text-sec2">
              <FaCartPlus />
              Add to cart
            </button>
          </div>
        </Link>
      </div>

      <div className="flex justify-center items-center pr-10">
        <p className="text-2xl text-sec2 mb-4 "> Customers also viewed </p>
      </div>

      <div className=" gap-5 flex w-64 h-[50vh] mb-4 p-7 hover:bg-[#f8e5c4]">
        <img src={singleProduct?.imageUrl} alt="" />
        {/* <p className="felx justify-items-stretch mb-7">newly made top</p> */}

        <Link to={`/products/${_id}`}>
          <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="h-auto max-w-lg rounded-lg"
              src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
              alt=""
            />
          </div>
        </Link>
        <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
            alt=""
          />
        </div>
        <div className="max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
            alt=""
          />
        </div>
        <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
            alt=""
          />
        </div>
        <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
            alt=""
          />
        </div>
        <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
            alt=""
          />
        </div>
        <div className=" max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <img
            className="h-auto max-w-lg rounded-lg"
            src="https://www.nairaland.com/attachments/10644434_b7874361c956474ab5a87b5f6fb04196_jpeg_jpeg25be9089aac030c9ef9b62a42413a94a"
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
