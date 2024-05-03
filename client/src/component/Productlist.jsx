import React, { useEffect, useState } from "react";
import Productscard from "./Productscard";
import axios from "axios";

const ProductList = ({ products }) => {
  // console.log(products);
  const _Id = 1;
  const handleDelete = (productId) => {
    products(products.filter((product) => product.id !== _Id));
  };
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-5">Product List</h1> */}
      <div className="grid  mt-15 gap-6 grid-cols-5">
        {products?.map((product, index) => (
          <Productscard
            key={index}
            {...product}
            onDelete={handleDelete}
            isVendor={product.vendorId === _Id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
