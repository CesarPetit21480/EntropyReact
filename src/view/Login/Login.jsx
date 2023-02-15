import React, { useState } from "react";
import { GlobalProvider } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
const imgRoutes = require.context("../../assets/logo", true);

const Login = () => {
  const lg = "./logo.png";
  const navigate  = useNavigate();

  const { validoLogin} = GlobalProvider();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    validoLogin(values.email, values.password);   
    navigate("/");
  };

  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  const handleChangeCheck = (evt) => {
    const { target } = evt;

    const newValues = {
      ...values,
      ckeckPass: target.checked,
    };

    console.log(newValues);
    setValues(newValues);
  };

  return (
    <div className="principal container-fluid">
      <div className="contenedor">
        <div className="log">
          <div className="d-flex flex-column justify-content-center">
            <img className="logoTam" src={imgRoutes(`${lg}`)} alt="logo" />
            <h2 className="positionTitulo">ENTROPY</h2>
          </div>

          <div className="ubicacionForm">
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="ms-5" htmlFor="inputEmail">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control inpt mt-3"
                  id="inputEmail"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label className="ms-5" htmlFor="inputPassword">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control inpt mt-3"
                  id="inputPassword"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input ms-4"
                  id="inputCheck"
                  name="ckeckPass"
                  value={values.ckeckPass}
                  onChange={handleChangeCheck}
                />
                <div className="mb-3">
                  <label className="form-check-label ms-2" htmlFor="inputCheck">
                    Recordar password
                  </label>
                </div>
              </div>

              <div className="row d-flex justify-content-center align-content-center inpt">
                <button type="submit" className="btn btn-dark my-2">
                  INGRESAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
