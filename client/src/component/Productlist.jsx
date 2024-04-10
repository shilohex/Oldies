import React from "react";
import Productscard from "./Productscard";

const productlist = ({ list }) => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="grid grid-cols-5">
        {list.map((product, index) => (
          <Productscard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default productlist;
