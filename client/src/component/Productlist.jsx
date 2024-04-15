import React from "react";
import Productscard from "./Productscard";

// const productlist = ({ list }) => {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <div className="grid  gap-5  grid-cols-5">
//         {list.map((product, index) => (
//           <Productscard key={index} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default productlist;

const ProductList = ({ list }) => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold mb-5">Product List</h1> */}
      <div className="grid  mt-15 gap-6 grid-cols-5">
        {list.map((product, index) => (
          <Productscard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
