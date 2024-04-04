import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Pages/signup/Signup";
import Login from "./Pages/Login/Login";
import Loginvendor from "./Pages/loginvendor/signupv";
import Landingpage from "./Pages/landingpage/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginvendor" element={<Loginvendor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
