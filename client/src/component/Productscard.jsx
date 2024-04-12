import React from "react";

const Productscard = ({
  title = "Command furniture",
  description = "a  hero solider lost for eternity. found and descided to take revenge on behalf of the world he left behind",
  url = "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/26/1395849512509/a050c562-cc7c-4a69-b66d-872127ecac4d-1024x768.jpeg?width=465&dpr=1&s=none",
  price = 3,
}) => {
  return (
    <div>
      <div className="flex border flex-col w-full text-center gap-4">
        <div className="w-full aspect-square border">
          <img src={url} alt={title} />
          <h3 className="text-x font-bold ">{title}</h3>
          <p>{description}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Productscard;
