import React, { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  // React.useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("user"));
  //   setUser(savedUser);
  // }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
