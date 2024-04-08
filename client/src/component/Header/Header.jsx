import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
import icon from "../../assets/icon.png";
import logo from "../../assets/oldieslogo.png";

const Header = ({ bgcol, txtcol }) => {
  return (
    <div className="fixed top-0 w-screen z-10 bg-[rgba(255,255,255,0.1)]">
      <div className="head ">
        <div id="comp" style={{ backgroundColor: bgcol, color: txtcol }}>
          <div className="nav ">
            <p>Summer sales for all swim suit free express delivery</p>
            <p>Shop Now</p>
            <div>
              <p>English{">"} </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-evenly py-5 px-8 ">
          <img src={logo} className="w-[7rem]" alt="" />
          <div className="flex gap-8">
              <Link className="hover:text-pry text-white" >Contact</Link>            
              <Link className="hover:text-pry text-white" to={"/about"}>About</Link>
          </div>

          <div>
            <form
              className="flex gap-4 rounded-lg border focus-within:border-pry focus-within:border-2 px-2  bg-white"
            >
              <input
                type="text"
                placeholder="Enter item name..."
                className="p-1 rounded-lg w-[200px] outline-none"
              />
              <button type="submit">
                <img src={icon} className="w-5 cursor-pointer " alt="" />
              </button>
            </form>
          </div>
          <div className="group relative z-10">
            <p className="bg-pry px-2 py-1 rounded">Sign up</p>
            <div className="hidden shadow-md rounded group-hover:flex bg-white absolute text-black top-full -left-1/2 flex-col gap-2 p-4">
              <Link
                to={"/vendor/signup"}
                className="hover:bg-[#ffa20186] px-4 py-1 rounded-sm"
              >
                Vendor
              </Link>
              <Link
                to={"/signup"}
                className="hover:bg-[#ffa20186] px-4 py-1 rounded-sm"
              >
                Buyer
              </Link>
            </div>
          </div>
          <div className="group relative z-10">
            <p className="bg-pry px-2 py-1 rounded">Login</p>
            <div className="hidden shadow-md rounded group-hover:flex bg-white absolute text-black top-full -left-1/2 flex-col gap-2 p-4">
              <Link
                to={"/vendor/login"}
                className="hover:bg-[#ffa20186] px-4 py-1 rounded-sm"
              >
                Vendor
              </Link>
              <Link
                to={"/login"}
                className="hover:bg-[#ffa20186] px-4 py-1 rounded-sm"
              >
                Buyer
              </Link>
            </div>
          </div>

          <div className="flex  space-x-12">
            <img src={heart} className="w-7" alt="" />
            <img src={shop} className="w-7" alt="" />
          </div>

          <hr className="text-[#31525b] w-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
