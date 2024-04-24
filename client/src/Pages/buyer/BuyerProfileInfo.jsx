import React, { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const BuyerProfileInfo = () => {
  let { user } = React.useContext(AuthContext);

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <>
      <div className="max-w-md mx-auto bg-sec2 rounded-xl overflow-hidden shadow-md p-6 flex items-center mt-3">
        <div className="mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-person-fill text-pry"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold  text-sec">
            {user ? user.username : username}
          </h1>
          <h2 className="text-lg text-sec">{user ? user.email : email}</h2>
        </div>
      </div>
    </>
  );
};

export default BuyerProfileInfo;
