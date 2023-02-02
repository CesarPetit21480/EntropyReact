import React from "react";
import "./Login.scss";

const imgRoutes = require.context("../../assets/logo", true);
const Login = () => {
  const lg = "./logo.png";
  // return (
  //   <div classNameName="container-fluid principal">
  //     <div classNameName="row">
  //       <div classNameName="pe-5 derecha">
  //         <img
  //           classNameName="card-img-top logo d-flex justify-content-center"
  //           src={imgRoutes(`${lg}`)}
  //           alt="remera"
  //         />
  //         <form action="">
  //           <label htmlFor="user">Usuario</label>
  //           <input type="text" />
  //           <label htmlFor="password">Password</label>
  //           <input type="password" />

  //           <div classNameName="d-flex justify-content-center pb-4 pt-4">
  //             <input type="button" value="INGRESAR" />
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div class="col-sm-6 text-black">
            <div class="px-5 ms-xl-4">
              <span>
                <img
                  className="me-3 pt-5 mt-xl-4 logoTam"
                  src={imgRoutes(`${lg}`)}
                  alt="remera"
                />
                <h1>ENTROPY PROGRAMACION</h1>
                <h2>by Vasco</h2>
              </span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{width: "23rem"}}>
                <h3 className="fw-normal mb-3 pb-3" style={{"letter-spacing": "1px"}}>
                 Ingreso
                </h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    class="form-control form-control-lg"
                  />
                  <label className="form-label" for="form2Example18">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    class="form-control form-control-lg"
                  />
                  <label className="form-label" for="form2Example28">
                    Password
                  </label>
                </div>

                <div class="pt-1 mb-4">
                  <button className="btn btn-info btn-lg btn-block" type="button">
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
                  <a href="#!" class="link-info">
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
