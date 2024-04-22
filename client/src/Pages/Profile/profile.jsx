import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

const profile = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex justify-center text-center border">
        <h1>Account Overview</h1>
        <hr />
        <div className="gap-5">
          <h2>ACCOUNT DETAILS</h2>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default profile;
