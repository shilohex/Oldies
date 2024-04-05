import React, { useEffect } from "react";
import Header from "../../component/Header/Header";
import icon from "../../assets/icon.png";
import "./Landingpage.css";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
import Footer from "../../component/Footer/Footer";
import tops from "../../assets/thrifttop.jpeg";
import { Link } from "react-router-dom";
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
        <div className="w-full h-full text-center absolute text-white justify-around items-center text-[3rem]  bg-[rgba(0,0,0,0.3)] top-0 flex ">
          <Link to={"/products/furnitures"} className="w-1/5">
            <img src="" className="w-4/5" alt="" />
            <p className="hover:underline">Funitures</p>
          </Link>
          <Link to={"/products/antiques"} className="w-1/5">
            <img src="" alt="" />
            <p>Antiques</p>
          </Link>
          <Link to={"/products/thrift"} className="w-1/5">
            <img src="" alt="" />
            <p>Thrift shops</p>
          </Link>
          <Link to={"/products/electronics"} className="w-1/5">
            <img src="" alt="" />
            <p>Electronics</p>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landingpage;
