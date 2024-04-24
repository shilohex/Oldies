import React, { useEffect } from "react";
import ProductList from "../../../component/Productlist";
import axios from "axios";

const VendorsProducts = () => {
  const vendorId = localStorage.getItem("_id");
  const [vendorProducts, setVendorProducts] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const getVendorProducts = async () => {
    setLoading(true);
    const url = `http://localhost:5001/product/${vendorId}`;
    try {
      const response = await axios.get(url);

      setVendorProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getVendorProducts();
  }, []);

  if (loading) {
    return <h1>Loading vendor products...</h1>;
  }

  return (
    <section className="my-11">
      <ProductList products={vendorProducts} />
    </section>
  );
};

export default VendorsProducts;
