import React from "react";
import logo from "../../assets/logo3.png";


const Footer = () => {
  return (
    <div className="bg-sec2 px-20 pt-20 text-white">
        <div className="flex justify-between mb-6">
        <div className="w-[30%]">
          <img src={logo} alt="" />
          <p className="text-[0.75rem] font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat autem dolore quisquam odit corporis iure, quos repellendus laborum recusandae sit quis suscipit ratione sint, libero minima ullam assumenda veniam consectetur.</p>
          
          <div>
            {/* for social media icons */}
          </div>
        </div>
        <div className="w-[30%]">
          <p className=" uppercase text-[0.75rem] mb-6">subscribe to our newsletter</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Enter your email" className="p-3 rounded outline" />
            <button type="submit" className="bg-sec rounded-full w-2/5 py-2 ">Subscribe</button>
          </form>
        </div>
        </div>
        <div className="py-6 border-t text-center">
            <p>@ Copyright 2024, All Rights Reserved by Oldies</p>
        </div>
    </div>
  );
};

export default Footer;
