import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Pages/customer/signup/Signup";
import Login from "./Pages/customer/login/Login";
import VendorSignUp from "./Pages/vendor/signup/Signup";
import Landingpage from "./Pages/landingpage/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor/signup" element={<VendorSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
