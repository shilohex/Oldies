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
import Carousel from "../../component/carousel";

const Landingpage = () => {
  const slides = [
    "https://www.avintagesplendor.com/wp-content/uploads/2022/09/best-thrift-stores-in-la-scaled.jpg",
    "https://images.squarespace-cdn.com/content/v1/5511f9bee4b068878ae651fb/1530653308676-KRW7ALWO6UF7V6DGXXQ9/image-asset.jpeg",

    "https://www.avintagesplendor.com/wp-content/uploads/2022/09/best-thrift-stores-in-la-scaled.jpg",
    "https://images.squarespace-cdn.com/content/v1/5511f9bee4b068878ae651fb/1530653308676-KRW7ALWO6UF7V6DGXXQ9/image-asset.jpeg",
  ];
  return (
    <>
      <div className="home">
        <div className="w-[100%] " id="landing">
          <Header />
          {/* <p className="border p-10">i mutds</p> */}
          <div className="flex  w-full h-screen overflow-hidden object-cover relative">
            {/* <img className="w-full  m-0 p-0 flex" src={tops} alt="" /> */}
            <div className="w-full  m-0 p-0 flex h-auto ">
              <Carousel autoslide={true} autoslideinterval={7000}>
                {slides.map((s) => (
                  <img src={s} className="w-screen h-full " />
                ))}
              </Carousel>
            </div>

            <div className="w-full h-full text-center absolute text-[#f3f3f3] justify-around items-center text-[2rem]  bg-[rgba(0,0,0,0.3)] top-0 flex ">
              <Link
                to={"/product/furniture"}
                className="w-[15%] flex flex-col items-center hover:text-[2rem]"
              >
                <FaCouch />
                <span className="hover:underline hover:ease-in-out duration-300">
                  Funitures
                </span>
              </Link>
              <Link
                to={"/product/antiques"}
                className="w-[15%] flex flex-col items-center hover:text-[2rem]"
              >
                <LuLampCeiling />
                <span className="hover:underline">Antiques</span>
              </Link>

              <Link
                to={"/product/thrift-shops"}
                className="w-[15%] flex flex-col items-center hover:text-[2rem]"
              >
                <GiClothes />
                <span className="hover:underline">Thrift shops</span>
              </Link>

              <Link
                to={"/product/electronics"}
                className="w-[15%] flex flex-col items-center hover:text-[2rem]"
              >
                <LuRefrigerator />
                <span className="hover:underline">Electronics</span>
              </Link>
              <div className=" text-center absolute top-[70%] text-[#f3f3f3] justify-around items-center text-[2rem] flex">
                <Link to={"/product"}>
                  {/* <button className="flex border-pry rounded-xl justify-center item-center flex-col p-2 text-[1.5rem] hover:text-[2rem] text-sec2 bg-pry ">
                  Shop Now
                </button> */}
                  <button class="bg-pry hover:bg-[#f8e5c4] text-sec2 text-center text-[1.5rem]  flex justify-center item-center flex-col font-bold py-2 px-5 rounded-full animate-pulse">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landingpage;
