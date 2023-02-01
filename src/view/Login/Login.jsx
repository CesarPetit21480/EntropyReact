import React from "react";


const imgRoutes = require.context("../../assets/logo", true);
const Login = () => {

    const lg = "./logo.png"
  return (
    <div className="container row mt-5">

        <div className="col-10">

        <img
          className="card-img-top"
          src={imgRoutes(`${lg}`)}
          alt="remera"
        />
               

        </div>

        <div className="col-2">
                <form action="">
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
