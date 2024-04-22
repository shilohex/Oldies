import React from "react";
import { useState } from "react";
import ProductList from "../../component/Productlist";

const VendorProfile = () => {
  const [newProducts, setnewProducts] = useState({
    productName: "",
    description: "",
    imageurl: "",
    price: 0,
  });
  function handleSubmit(e) {
    console.log(newProducts);
    e.preventDefault();
    setnewProducts({
      productName: "",
      description: "",
      imageurl: "",
      price: 0,
    });
  }
  return (
    <div>
      {/* <Header /> */}
      <div className="text-center border">
        <h1>Account Overview</h1>
        <hr />
        <div className=" flex gap-5">
          <h2>ACCOUNT DETAILS</h2>
          <hr />
        </div>
        <div>
          <p>ADD NEW PRODUCT</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="productName"
              value={newProducts.productName}
              onChange={(e) =>
                setnewProducts({ ...newProducts, productName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="description"
              value={newProducts.description}
              onChange={(e) =>
                setnewProducts({ ...newProducts, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="imageurl"
              value={newProducts.imageurl}
              onChange={(e) =>
                setnewProducts({ ...newProducts, imageurl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="price"
              value={newProducts.price}
              onChange={(e) =>
                setnewProducts({ ...newProducts, price: e.target.value })
              }
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
