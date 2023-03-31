import React from "react";
import FormStyle from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import loginImg from "./log.png";

const Form = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  // pequeña DB
  const database = [
    {
      username: "ejemplo@gmail.com",
      password: "1password",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent impide que la pagína vuelva a cargarse
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find: Busca información de inicio de sesión de usuario
    const userData = database.find((user) => user.username === uname.value);

    // Comparar información de usuario
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setAccess(true);
        navigate("/home");
      }
    } else {
      // Username no encontrado
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generar código JSX para mensaje de errorGenerar código JSX para mensaje de error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div>
      <div className={FormStyle.divBody}>
        <div className={FormStyle.ContainerForm}>
          <div class="row justify-content-center">
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                ¡Welcome stranger!
              </p>
              <br></br>

              <form class="mx-1 mx-md-4" onSubmit={handleSubmit}>
                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <label className={FormStyle.labelEmail}>Your Email </label>
                    <input
                      class="form-control"
                      type="text"
                      name="uname"
                      required
                      placeholder="Email"
                    />
                    {renderErrorMessage("uname")}
                  </div>
                </div>
                <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <label className={FormStyle.labelPass}>Password </label>
                    <input
                      class="form-control"
                      type="password"
                      name="pass"
                      required
                      placeholder="Password"
                    />
                    {renderErrorMessage("pass")}
                  </div>
                </div>
                <br></br>
                <div class="form-check d-flex justify-content-center mb-5">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3c"
                  />
                  <label class="form-check-label" for="form2Example3">
                    I agree all statements in <a href="#!">Terms of service</a>
                  </label>
                </div>

                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button class="btn btn-primary btn-lg" type="submit">
                    {" "}
                    Log In
                  </button>
                </div>
              </form>
            </div>
            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              <img src={loginImg} class="img-fluid" alt="Sample image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
