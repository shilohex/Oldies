import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Signup from "./Pages/signup/Signup";
import Login from "./Pages/login/Login.";
import Landingpage from "./Pages/landingpage/Landingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="./login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
