import React from "react";
import { Link } from "react-router-dom";
import { formatToCurrency } from "../utils/helpers";

const Productscard = ({
  productName,
  description,
  price,
  imageUrl,
  shopName,
  _id,
  onDelete,
  isVendor,
}) => {
  const handleDelete = () => {
    onDelete(_id);
  };
  return (
    <>
      <Link to={`/products/${_id}`}>
        <div className="relative overflow-hidden rounded-lg shadow-lg hover:bg-[#f8e5c4] mb-5 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
          <img
            src={imageUrl}
            alt={productName}
            className="w-full object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg  text-sec2 font-semibold mb-2">
              {productName}
            </h2>
            <p className="text-sec2 ">{description}</p>
            <p className="text-pry font-bold mt-2">{formatToCurrency(price)}</p>
            <p className="text-sec mt-2">{shopName}</p>
            {isVendor && (
              <button
                onClick={handleDelete}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                {" "}
                Delete
              </button>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Productscard;
