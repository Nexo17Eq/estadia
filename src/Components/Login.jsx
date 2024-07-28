// Login.js

// Importamos las bibliotecas necesarias de React, React Router y Reactstrap.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// Definimos el componente Login.
const Login = () => {
  // Definimos los estados locales para el nombre de usuario y la contraseña.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para la navegación programática.

  // Función que maneja el envío del formulario de inicio de sesión.
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario.
    // Verificamos las credenciales del usuario.
    if (username === "admin" && password === "password") {
      // Si las credenciales son correctas, navegamos al dashboard.
      navigate("/dashboard");
    } else {
      // Si las credenciales son incorrectas, mostramos una alerta.
      alert("Invalid credentials");
    }
  };

  return (
    // Contenedor principal de la página de inicio de sesión con clase "loginpage".
    <div className="loginpage">
      {/* Contenedor de bienvenida con animación y clase "welcome-container animated-drop". */}
      <div className="welcome-container animated-drop">
        <p>
          ¡Hola,
          <br />
          <strong>Bienvenido!</strong>
        </p>
      </div>
      {/* Contenedor del formulario de inicio de sesión con animación y clase "login-container animated-drop". */}
      <div className="login-container animated-drop">
        <div className="login-form">
          {/* Formulario de inicio de sesión con manejo de envío personalizado. */}
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <div className="login-header"></div>
            {/* Grupo de formulario para el nombre de usuario. */}
            <FormGroup className="mb-3">
              <Label htmlFor="username" className="form-label">
                Usuario:
              </Label>
              <Input
                type="text"
                className="form-control"
                id="username"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            {/* Grupo de formulario para la contraseña. */}
            <FormGroup className="mb-3">
              <Label htmlFor="password" className="form-label">
                Contraseña:
              </Label>
              <Input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {/* Botón de envío alineado a la derecha. */}
            <div style={{ textAlign: "right" }}>
              <Button type="submit" color="info">
                Ingresar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

// Exportamos el componente Login como predeterminado.
export default Login;
