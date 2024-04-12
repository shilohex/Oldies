import React from "react";
import logo from "../../assets/oldies3.png";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sec2 px-20 pt-[2%] text-white">
      <div className="flex justify-between mb-9">
        <div className="w-[30%]">
          <Link to={"/"}>
            <img src={logo} className="w-[10rem]" alt="" />
          </Link>
          <p className="text-[1rem] font-medium">
            "Oldies" stands out as a premier second-hand selling platform,
            offering a treasure trove of vintage finds and modern gems. With a
            commitment to sustainability and affordability, it's the perfect
            place to discover unique items while reducing your carbon footprint.
          </p>
          <div className="text-[2rem] flex gap-5 mt-4 items-center">
            <div className=" dark:md:hover:text-pry">
              <CiFacebook />
            </div>

            <div className=" dark:md:hover:text-pry">
              {" "}
              <CiInstagram />
            </div>
            <div className=" dark:md:hover:text-pry">
              {" "}
              <CiTwitter />
            </div>
          </div>

          <div>{/* for social media icons */}</div>
        </div>
        <div className="w-[30%]">
          <p className=" uppercase text-[0.75rem] mb-6">
            subscribe to our newsletter
          </p>
          <form className="flex flex-col gap-4 text-black">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 rounded outline-pry"
            />
            <button
              type="submit"
              className="bg-sec rounded-full w-2/5 py-2  dark:md:hover:bg-pry "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="py-6 border-t text-center">
        <p>@ Copyright 2024 All Rights Reserved by Oldies</p>
      </div>
    </div>
  );
};

export default Footer;
