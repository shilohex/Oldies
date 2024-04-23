import React, { useEffect, useState } from "react";
import Productscard from "./Productscard";
import axios from "axios";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5001/product");
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(allProducts);
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-5">Product List</h1> */}
      <div className="grid  mt-15 gap-6 grid-cols-5">
        {allProducts?.map((product, index) => (
          <Productscard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
