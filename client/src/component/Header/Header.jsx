import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
import icon from "../../assets/icon.png";
import logo from "../../assets/logo3.png";

const Header = ({ bgcol, txtcol }) => {
  return (
    <div>
      <div className="head ">
        <div id="comp" style={{ backgroundColor: bgcol, color: txtcol }}>
          <div className="nav">
            <p>Summer sales for all swim suit free express delivery</p>
            <p>Shop Now</p>
            <div>
              <p>English{">"} </p>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-evenly py-5 px-8 border-b">
          <img src={logo} className="w-20" alt="" />
          <div className="abt">
            <p>Contact</p>
            <p>About</p>
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
          <div className="">
            <button className="button">
              {" "}
              <Link to={"./signup"}>Sign up</Link>
            </button>
          </div>
          <div>
            <button className="button">
              {" "}
              <Link to={"./signup"}>Login</Link>
            </button>
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
