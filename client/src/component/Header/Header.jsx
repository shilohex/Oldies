import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
import icon from "../../assets/icon.png";
import logo from "../../assets/oldieslogo.png";

const Header = ({ bgcol, txtcol }) => {
  return (
    <div>
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

        <div className="flex items-center justify-evenly py-5 px-8 border-b">
          <img src={logo} className="w-[7rem]" alt="" />
          <div className="abt">
            <p className="dark:md:hover:text-pry">
              {" "}
              <Link>Contact</Link>
            </p>
            <p className="dark:md:hover:text-pry">
              {" "}
              <Link to={"/about"}>About</Link>
            </p>
          </div>

          <div>
            <form
              id="search"
              className="flex gap-4 rounded-lg border focus-within:border-black focus-within:border-2 px-2 "
            >
              <input
                type="text"
                id="search-input"
                placeholder="Enter item name..."
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

          <hr className="hr" />
        </div>
      </div>
    </div>
  );
};

export default Header;
