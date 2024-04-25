import React from "react";
import { Link } from "react-router-dom";

const Productscard = ({
  productName,
  description,
  price,
  imageUrl,
  shopName,
  _id = "iuiugiu",
}) => {
  return (
    <>
      <Link to={`/products/${_id}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:bg-[#f8e5c4] mb-5 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{productName}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="text-gray-900 mt-2">N{price}</p>
            <p className="text-gray-900 mt-2">{shopName}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Productscard;
