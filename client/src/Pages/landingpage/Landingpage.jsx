import React, { useEffect } from "react";
import Header from "../../component/Header/Header";
import icon from "../../assets/icon.png";
import "./Landingpage.css";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
import Footer from "../../component/Footer/Footer";
const Landingpage = () => {
  useEffect(() => {
    fetch("http://localhost:5001/countries")
      .then((response) => response.json())
      .then((responseObject) => console.log(responseObject));
  }, []);

  return (
    <div>
      <Header />
      {/* <p className="border p-10">i mutds</p> */}
      <div className="flex  w-[100%]">
        <div
          id="body"
          className="border-r w-[100]  mb-[59%] flex justify-evenly gap-0 "
        >
          <div>
            <img
              className="w-full m-0 p-0 absolute flex"
              src="https://digital-bucket.prod.bfi.co.id/assets/Blog/Blog%20New/Bisnis%20Thrift%20Shop/23%20Maret%202022.jpeg"
              alt=""
            />
          </div>

          <div className="relative flex justify-center mt-[10%] text-center gap-5 text-white">
            <p>Funitures</p>
            <p>Antiques</p>
            <p>Thrift shops</p>
            <p>Electronics</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
