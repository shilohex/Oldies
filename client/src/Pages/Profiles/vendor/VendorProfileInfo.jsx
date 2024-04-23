import React from "react";
import { AuthContext } from "../../../context/AuthContext";

const VendorProfileInfo = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div>
      <h1>{user.shopname}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default VendorProfileInfo;
