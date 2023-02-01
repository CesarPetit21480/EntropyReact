import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../view/Home/Home";
import Login from "../view/Login/Login";

const Rutas = () => {
  return (
    <Router>
      <Routes>      
        <Route  path="/login" element={<Login/>} />
        <Route  path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default Rutas;
