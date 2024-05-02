import React from "react";
import BuyerProfileInfo from "./BuyerProfileInfo";
import Footer from "../../component/Footer/Footer";
import axios from "axios";
import { FaBasketShopping } from "react-icons/fa6";
import { GiOfficeChair } from "react-icons/gi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Popup from "./Popupwindow";
import { Link } from "react-router-dom";

const BuyerProfile = () => {
  return (
    <div>
      <BuyerProfileInfo />
      <div className=" mt-10 p-10 flex justify-around items-center">
        <Link to={"/product"}>
          {" "}
          <div className="border flex  flex-col justify-center items-center  p-10 font-bold text-sec2 hover:text-pry">
            <GiOfficeChair />
            <p>Products </p>
          </div>
        </Link>

        <div className="border flex flex-col justify-center items-center font-bold p-10 text-sec2 hover:text-pry">
          <FaBasketShopping />
          <p>My Orders</p>
        </div>
        <Link to={"/checkout"}>
          {" "}
          <div className="border flex flex-col justify-center items-center font-bold p-10 text-sec2 hover:text-pry">
            <MdOutlineShoppingCartCheckout />
            <p>Checkout</p>
          </div>
        </Link>
      </div>
      {/* <Popup /> */}
      <Footer />
    </div>
  );
};

export default BuyerProfile;
