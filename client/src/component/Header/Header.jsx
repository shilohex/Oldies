import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import logo from "../../assets/oldieslogo.png";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

const Header = ({ bgcol = "rgba(0,0,0,0.3)", txtcol = "#000" }) => {
  let { cartItems, setCartItems } = React.useContext(CartContext);
  return (
    <div className={`fixed top-0 w-screen z-10 bg-[${bgcol}] text-[${txtcol}]`}>
      <div className="head ">
        <div
          id="comp"
          className="flex bg-sec2  p-2 mx-auto justify-center text-pry"
        >
          {/* style={{ backgroundColor: bgcol, color: txtcol }} */}
          <div className="nav w-[58%] flex justify-between  ">
            <p className=" hover:text-[#f3f3f3]">
              50% OFF EVERY SHOES AND BOOTS
            </p>
            <Link to={"/product"}>
              <p className=" hover:text-[#f3f3f3] ">SHOP NOW </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-evenly py-5 px-8 ">
          <Link to={"/"}>
            <img
              src={logo}
              className="w-[7rem] shadow-lg bg-sec2 rounded-full"
              alt=""
            />
          </Link>
          <div className="flex gap-8 text-white">
            <Link className="hover:text-pry  " to={"/contact"}>
              Contact
            </Link>
            <Link className="hover:text-pry" to={"/about"}>
              About
            </Link>
          </div>

          <div>
            {/* <form className="flex gap-4 rounded-lg border focus-within:border-pry focus-within:border-2 px-2  bg-white">
              <input
                type="text"
                placeholder="Enter item name..."
                className="p-1 rounded-lg w-[200px] outline-none"
              />
              <button type="submit">
                <img src={icon} className="w-5 cursor-pointer " alt="" />
              </button>
            </form> */}
          </div>
          <div className="group relative z-10">
            <p className="bg-pry px-3 py-1 border-pry rounded-xl text-sec2">
              Sign Up
            </p>
            <div className="hidden shadow-md rounded group-hover:flex bg-[#f3f3f3] absolute text-black top-full -left-1/2 flex-col-reverse gap-2 p-4">
              <Link
                to={"/vendor/signup"}
                className="hover:bg-[#ffa20186] px-4 py-1 rounded-sm text-sec2"
              >
                Vendor
              </Link>
              <Link
                to={"/customer/signup"}
                className="hover:bg-[#ffa20186] px-4 py-1 rounded-sm text-sec2"
              >
                Buyer
              </Link>
            </div>
          </div>
          <div className="group relative z-10">
            <Link to={"/login"} className=" py-1 rounded-sm">
              <p className="bg-pry px-3 py-1 border-pry rounded-xl text-sec2">
                Login
              </p>
            </Link>
          </div>

          <div className="flex text-[#f3f3f3]  space-x-12 hover:ease-in-out duration-300">
            <Link className="hover:text-[2.5rem relative" to={"/checkout"}>
              {" "}
              <p className="bg-red-500 p-1 rounded-full h-7 w-7 font-bold grid place-items-center absolute -top-4 -right-4">
                {cartItems.length}
              </p>
              <FaShoppingBag size={25} />{" "}
            </Link>
          </div>

          {/* <hr className="text-[#31525b] w-3" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
