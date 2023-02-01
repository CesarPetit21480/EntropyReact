import React from "react";
import Login from "../Login/Login";
import { Navigate, redirect } from "react-router-dom";

const Home = () => {
  const shouldRedirect = true;

  return <>{shouldRedirect && <Navigate replace to="/login" />}</>;
};

export default Home;
