import React from "react";
import Header from "../../component/Header/Header";
import icon from "../../assets/icon.png";
import "./Landingpage.css";
import heart from "../../assets/heart.png";
import shop from "../../assets/shoppingcrt.png";
const Landingpage = () => {
  return (
    <div>
      <Header />
      {/* <p className="border p-10">i mutds</p> */}
      <div id="body" className="border-r">
        <p>Funiture</p>
        <p>Kichen utensil</p>
      </div>
      <div>
        <img src="" alt="" className=" border-l flex-col" />
      </div>
    </div>
  );
};

export default Landingpage;
