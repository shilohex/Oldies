import React from "react";
import Productscard from "./Productscard";

const Filter = ({ list, title, rating }) => {
  return (
    <div>
      <h2>
        {" "}
        Filter by {title && `title:${title}`} {rating && `rating:${rating}`}
      </h2>
      <div>
        {title &&
          rating &&
          list
            .filter((product) =>
              product.title.toLowerCase().includes(title.toLowerCase())
            )
            .filter((product) => product.rating == rating)
            .map((product, index) => <Productscard key={index} {...product} />)}

        {title &&
          !rating &&
          list
            .filter((product) =>
              product.title.toLowerCase().includes(title.toLowerCase())
            )
            .map((product, index) => <Productscard key={index} {...product} />)}

        {!title &&
          rating &&
          list
            .filter((product) => product.rating == rating)
            .map((product, index) => <Productscard key={index} {...product} />)}
      </div>
    </div>
  );
};

export default Filter;
