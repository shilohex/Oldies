import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center p-[15%]">
        <div className="text-[7rem] flex gap-5 mt-4 items-center">
          <Link to={"https://www.facebook.com/excel.oladipupo.1"}>
            <div className=" text-sec2 dark:md:hover:text-pry">
              <CiFacebook />
            </div>
          </Link>
          <Link to={"https://www.instagram.com/datgurl_exi/"}>
            <div className=" text-sec2 dark:md:hover:text-pry">
              {" "}
              <CiInstagram />
            </div>
          </Link>
          <Link to={"https://twitter.com/teslyym_"}>
            <div className=" text-sec2 dark:md:hover:text-pry">
              {" "}
              <CiTwitter />
            </div>
          </Link>
        </div>
      </div>
      <div className=" justify-center items-center text-center  flex flex-col text-[2rem]">
        <p>Email: Oldies4all@gmail.com</p>
        <p>Contact: +2340836591337</p>
      </div>

      <Footer />
    </>
  );
};

export default contact;
