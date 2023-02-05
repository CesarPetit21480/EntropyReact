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
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control inpt"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control inpt"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>

            <div class=" row d-flex justify-content-center align-content-center inpt ">
              <button type="submit" className="btn btn-dark ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
