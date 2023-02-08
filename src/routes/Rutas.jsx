import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../view/Home/Home";
import Login from "../view/Login/Login";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
};

export default Rutas;
