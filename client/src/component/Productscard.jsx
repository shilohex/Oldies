import React from "react";

// const Productscard = ({
//   title = "Command furniture",
//   description = "a  hero solider lost for eternity. found and descided to take revenge on behalf of the world he left behind",
//   url = "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/26/1395849512509/a050c562-cc7c-4a69-b66d-872127ecac4d-1024x768.jpeg?width=465&dpr=1&s=none",
//   price = 3,
// }) => {
//   return (
//     <div>
//       <div className="flex border flex-col w-full text-center gap-4">
//         <div className="w-full aspect-square border">
//           <img src={url} alt={title} />
//           <h3 className="text-x font-bold ">{title}</h3>
//           <p>{description}</p>
//           <p>Price: {price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productscard;

const Productscard = ({
  title = "Command furniture",
  description = "a  hero solider lost for eternity. found and descided to take revenge on behalf of the world he left behind",
  url = "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/3/26/1395849512509/a050c562-cc7c-4a69-b66d-872127ecac4d-1024x768.jpeg?width=465&dpr=1&s=none",
  price = 3,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover:bg-[#f8e5c4] mb-5 transition-colors duration-300 transform hover:-translate-y-1 hover:scale-105">
      <img src={url} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-900 mt-2">N{price}</p>
      </div>
    </div>
  );
};

export default Productscard;
