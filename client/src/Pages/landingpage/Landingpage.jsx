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
  useEffect(() => {
    fetch("http://localhost:5001/countries")
      .then((response) => response.json())
      .then((responseObject) => console.log(responseObject));
  }, []);
  const slides = [
    "https://digital-bucket.prod.bfi.co.id/assets/Blog/Blog%20New/Bisnis%20Thrift%20Shop/23%20Maret%202022.jpeg",
    "https://www.sunset.com/wp-content/uploads/thrift-store-getty-0220-1-1200x900.jpg",
    "https://i.insider.com/59976ba64dcf3532008b49d7",
    "https://kiwanissale.com/wp-content/uploads/2020/02/IMG_0697.jpg",
    "https://www.avintagesplendor.com/wp-content/uploads/2022/09/best-thrift-stores-in-la-scaled.jpg",
    "https://cdn.shopify.com/s/files/1/0269/9644/1191/files/Secondhand_Shopping_2048x2048.jpg?v=1628535295",
  ];
  return (
    <div className="w-[100%] " id="landing">
      <Header />
      {/* <p className="border p-10">i mutds</p> */}
      <div className="flex  w-full h-screen relative">
        {/* <img className="w-full  m-0 p-0 flex" src={tops} alt="" /> */}
        <Carousel autoslide={true} autoslideinterval={1000}>
          {slides.map((s) => (
            <img src={s} className="w-screen" />
          ))}
        </Carousel>
        <div className="w-full h-full text-center absolute text-white justify-around items-center text-[2rem]  bg-[rgba(0,0,0,0.3)] top-0 flex ">
          <Link
            to={"/products/furnitures"}
            className="w-[15%] flex flex-col items-center hover:text-[2.5rem]"
          >
            <FaCouch />
            <span className="hover:underline hover:ease-in-out duration-300">
              Funitures
            </span>
          </Link>
          <Link
            to={"/products/antiques"}
            className="w-[15%] flex flex-col items-center hover:text-[2.5rem]"
          >
            <LuLampCeiling />
            <span className="hover:underline">Antiques</span>
          </Link>

          <Link
            to={"/products/thrift"}
            className="w-[15%] flex flex-col items-center hover:text-[2.5rem]"
          >
            <GiClothes />
            <span className="hover:underline">Thrift shops</span>
          </Link>

          <Link
            to={"/products/electronics"}
            className="w-[15%] flex flex-col items-center hover:text-[2.5rem]"
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
