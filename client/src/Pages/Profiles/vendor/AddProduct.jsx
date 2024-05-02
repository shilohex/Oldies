import React from "react";
import { useState } from "react";
import ProductList from "../../../component/Productlist";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const AddProduct = () => {
  const { user } = React.useContext(AuthContext);
  console.log(user);
  const shopname = localStorage.getItem("shopname");
  const _id = localStorage.getItem("_id");

  const [newProducts, setnewProducts] = useState({
    productName: "",
    description: "",
    imageUrl: "",
    category: "",
    price: 0,
    shopName: user ? user.shopname : shopname,
    productOwnerId: user ? user._id : _id,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://oldies.onrender.com/product",
        newProducts
      );
      setnewProducts({
        ...newProducts,
        productName: "",
        description: "",
        imageUrl: "",
        category: "",
        price: 0,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {/* <Header /> */}

      <div className=" justify-center text-center border mt-4">
        <div className="gap-5 justify-center text-center  bg-sec2 ">
          <p className="text-white">ADD NEW PRODUCT</p>

          <form
            className="gap-5 flex justify-center text-center mt-5 p-3 bg-sec2"
            onSubmit={handleSubmit}
          >
            <select
              className="form-select text-center border gap-6"
              aria-label="Default select example"
              type="text"
              placeholder="category"
              value={newProducts.category}
              onChange={(e) =>
                setnewProducts({ ...newProducts, category: e.target.value })
              }
            >
              <option selected>Category</option>
              <option value="Furniture">Furniture</option>
              <option value="Thrift-shops">Thrift-store</option>
              <option value="Electronics">Electronics</option>
              <option value="Antiques">Antiques</option>
            </select>

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
              placeholder="image url"
              value={newProducts.imageUrl}
              onChange={(e) =>
                setnewProducts({ ...newProducts, imageUrl: e.target.value })
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
              placeholder="price"
              value={newProducts.price}
              onChange={(e) =>
                setnewProducts({ ...newProducts, price: e.target.value })
              }
            />
            <button
              className="border-2 focus:ring-pry focus:ring-offset-pry rounded-lg bg-pry p-2 hover:bg-[#f8e5c4] text-sec2"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddProduct;
