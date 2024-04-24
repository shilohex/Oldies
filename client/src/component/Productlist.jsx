import React, { useEffect, useState } from "react";
import Productscard from "./Productscard";
import axios from "axios";

const ProductList = ({ products }) => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-5">Product List</h1> */}
      <div className="grid  mt-15 gap-6 grid-cols-5">
        {products?.map((product, index) => (
          <Productscard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
