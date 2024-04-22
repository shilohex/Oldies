import React from "react";
import { useState } from "react";
import ProductList from "../../component/Productlist";
import Footer from "../../component/Footer/Footer";

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
            <select
              className="form-select text-center border gap-6"
              aria-label="Default select example"
              type="text"
              placeholder="productName"
              value={newProducts.productName}
              onChange={(e) =>
                setnewProducts({ ...newProducts, productName: e.target.value })
              }
            >
              <option selected>Category</option>
              <option value="1">Furniture</option>
              <option value="2">Thrift-store</option>
              <option value="3">Electronics</option>
              <option value="4">Antiques</option>
            </select>

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
      {/* <Footer /> */}
    </div>
  );
};

export default VendorProfile;
