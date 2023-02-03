import React from "react";
import "./Login.scss";
import "./animacion.scss";

const imgRoutes = require.context("../../assets/logo", true);
const Login = () => {
  const lg = "./logo.png";
  return (
    <section className="vh-100">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-12 text-black">
            <div className="px-5 ms-xl-4">
              <span>
                <div className="d-flex justify-content-center align-items-center">
                <img
                  className="logoTam"
                  src={imgRoutes(`${lg}`)}
                  alt="remera"
                />

                </div>
               
                {/* <h3>ENTROPY</h3> */}

                <div>
                  <h1 className="t-stroke t-shadow-halftone">ENTROPY</h1>
                </div>
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }}>
                <h3 className="fw-normal mb-3 pb-3">Ingreso</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                  >
                    Login
                  </button>
                </div>

                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account?{" "}
                  <a href="#!" className="link-info">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
