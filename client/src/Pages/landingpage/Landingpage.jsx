import React, { useEffect } from "react";
import Header from "../../component/Header/Header";
import icon from "../../assets/icon.png";
import "./Landingpage.css";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
import Footer from "../../component/Footer/Footer";
import tops from "../../assets/thrifttop.jpeg";
import { Link } from "react-router-dom";
import couch from "../../assets/couch-solid.svg";
import { FaCouch } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { LuRefrigerator } from "react-icons/lu";
import { LuLampCeiling } from "react-icons/lu";

const Landingpage = () => {
  useEffect(() => {
    fetch("http://localhost:5001/countries")
      .then((response) => response.json())
      .then((responseObject) => console.log(responseObject));
  }, []);

  return (
    <div className="w-[100%] " id="landing">
      <Header />
      {/* <p className="border p-10">i mutds</p> */}
      <div className="flex  w-full h-screen relative">
        <img className="w-full  m-0 p-0 flex" src={tops} alt="" />
        <div className="w-full h-full text-center absolute text-white justify-around items-center text-[2rem]  bg-[rgba(0,0,0,0.3)] top-0 flex ">
          <Link
            to={"/products/furnitures"}
            className="w-1/5 flex flex-col items-center "
          >
            <FaCouch />
            <span className="hover:underline hover:ease-in-out duration-300">
              Funitures
            </span>
          </Link>
          <Link
            to={"/products/antiques"}
            className="w-1/5 flex flex-col items-center"
          >
            <LuLampCeiling />
            <span className="hover:underline">Antiques</span>
          </Link>

          <Link
            to={"/products/thrift"}
            className="w-1/5 flex flex-col items-center"
          >
            <GiClothes />
            <span className="hover:underline">Thrift shops</span>
          </Link>

          <Link
            to={"/products/electronics"}
            className="w-1/5 flex flex-col items-center"
          >
            <LuRefrigerator />
            <span className="hover:underline">Electronics</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landingpage;
