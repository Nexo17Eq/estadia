import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Para redireccionar después de iniciar sesión

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redireccionar programáticamente

  const handleSubmit = (e) => {
    e.preventDefault();

    // Datos de inicio de sesión válidos (puedes cambiar estos valores según sea necesario)
    if (username === "admin" && password === "password") {
      Swal.fire({
        title: "Bienvenido!",
        text: "Has iniciado sesión exitosamente.",
        icon: "success",
        timer: 1500, // Tiempo en milisegundos (1.5 segundos)
        showConfirmButton: false, // Ocultar el botón "OK"
      }).then(() => {
        // Redirigir al usuario después de que se cierre la alerta
        navigate("/admin");
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Nombre de usuario o contraseña incorrectos.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="login-form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="login-header">
          {/* Icono de usuario */}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Usuario:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button type="submit" className="btn btn-info">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
