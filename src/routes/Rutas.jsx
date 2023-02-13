import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "../component/Principal/Principal";
import Home from "../view/Home/Home";
import Login from "../view/Login/Login";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />                
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />   
        
      </Routes>
    </Router>
  );
};

export default Rutas;
