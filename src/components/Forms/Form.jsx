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
    <div className={FormStyle.divBody}>
      <div className={FormStyle.ContainerForm}>
        <div className={FormStyle.Login}>
          <h1>¡Welcome stranger!</h1>
          <form className={FormStyle.form} onSubmit={handleSubmit}>
            <div className={FormStyle.inputContainer}>
              <label className={FormStyle.labelEmail}>Your Email </label>
              <input type="text" name="uname" required placeholder="Email" />
              {renderErrorMessage("uname")}
            </div>
            <div className={FormStyle.inputContainer}>
              <label className={FormStyle.labelPass}>Password </label>
              <input
                type="password"
                name="pass"
                required
                placeholder="Password"
              />
              {renderErrorMessage("pass")}
            </div>
            <div className={FormStyle.buttonContainer}>
              <button className={FormStyle.button} type="submit">
                {" "}
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className={FormStyle.picture}>
          <img src={loginImg} />
        </div>
      </div>
    </div>
  );
};

export default Form;
