import React from "react";

const Footer = ({ bgcol, txtcol }) => {
  return (
    <div className="head">
      <div id="comp" style={{ backgroundColor: bgcol, color: txtcol }}>
        <div className="nav">
          <p>footer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
