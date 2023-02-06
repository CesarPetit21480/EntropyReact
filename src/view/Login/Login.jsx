import React from "react";
import "./Login.scss";
const imgRoutes = require.context("../../assets/logo", true);
const Login = () => {
  const lg = "./logo.png";
  // const princi = "./principal.jpg";
  return (
    <div className="principal container-fluid">
      <div className="d-flex justify-content-center flex-column log">
        <img className="logoTam" src={imgRoutes(`${lg}`)} alt="logo" />
        <div className="positionTitulo">
          <h2>ENTROPY</h2>
        </div>

        <div>
          <form>
            <div className="form-group">
              <label className="ms-5" htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control inpt mt-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label className="ms-5" htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control inpt mt-3"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input ms-4"
                id="exampleCheck1"
              />
              <div className="mb-3">
                <label className="form-check-label ms-2" htmlFor="exampleCheck1">
                  Recordar password
                </label>
              </div>
            </div>

            <div class="row d-flex justify-content-center align-content-center inpt ">
              <button type="submit" className="btn btn-dark">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
