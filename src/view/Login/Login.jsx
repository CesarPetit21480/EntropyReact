import React from "react";
import "./Login.scss";

const imgRoutes = require.context("../../assets/logo", true);
const Login = () => {
  const lg = "./logo.png";
  return (
    <div className="container-fluid principal">
      <div className="carga d-flex flex-col-reverse">
        <img
          className="card-img-top logo"
          src={imgRoutes(`${lg}`)}
          alt="remera"
        />
        <form action="" >
          <label htmlFor="user">Usuario</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <input type="button" value="INGRESAR" />
        </form>
      </div>
    </div>
  );
};

export default Login;
