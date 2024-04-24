import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    _id: localStorage.getItem("_id"),
    email: localStorage.getItem("email"),
    shopname: localStorage.getItem("shopname"),
    username: localStorage.getItem("username"),
  });

  // React.useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("user"));
  //   setUser(savedUser);
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
