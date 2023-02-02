import React from "react";
import "./Login.scss";

const imgRoutes = require.context("../../assets/logo", true);
const Login = () => {
  const lg = "./logo.png";
  return (
    <div className="principal">
      <div className='derecha'>
        <img
          className="card-img-top logo"
          src={imgRoutes(`${lg}`)}
          alt="remera"
        />
        {/* <form action="">
          <label htmlFor="user">Usuario</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <input type="button" value="INGRESAR" />
        </form> */}
      </div>  
    </div>
  );
};

export default Login;
