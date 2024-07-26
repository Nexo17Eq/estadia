import React from "react";
import Login from "../components/Forms/Login";


const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="welcome-container animated-drop">
        <p>
          ¡Hola,
          <br />
          <strong>Bienvenido!</strong>
        </p>
      </div>
      <div className="login-container animated-drop">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
