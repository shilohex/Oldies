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
    // "https://q-furniture.com/wp-content/uploads/2023/06/used-furniture-stores-07-scaled.jpg",
    // "https://images.squarespace-cdn.com/content/v1/5726544ef85082b93e0f14c1/1667833872825-1K3LRTE05458F1UL9U9W/Long+Island+Furniture+Thrift+Stores.jpg?format=2500w",
    "https://www.avintagesplendor.com/wp-content/uploads/2022/09/best-thrift-stores-in-la-scaled.jpg",
    "https://images.squarespace-cdn.com/content/v1/5511f9bee4b068878ae651fb/1530653308676-KRW7ALWO6UF7V6DGXXQ9/image-asset.jpeg",
    "https://digital-bucket.prod.bfi.co.id/assets/Blog/Blog%20New/Bisnis%20Thrift%20Shop/23%20Maret%202022.jpeg",
    // "https://images.pexels.com/photos/2460457/pexels-photo-2460457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <>
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
            <div className=" text-center absolute top-[70%] text-[#f3f3f3] justify-around items-center text-[2rem] flex">
              <Link to={"/product"}>
                <button className="flex border-pry rounded-xl justify-center item-center flex-col p-2 text-[1.5rem] hover:text-[2rem] text-sec2 bg-pry ">
                  <b> Shop Now </b>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
