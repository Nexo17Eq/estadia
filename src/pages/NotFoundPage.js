// NotFoundPage.js

// Importamos las bibliotecas necesarias de React, React Router y Reactstrap.
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

// Definimos el componente NotFoundPage.
const NotFoundPage = () => {
  return (
    // Contenedor principal del componente con clase "notfoundpage".
    <div className="notfoundpage">
      {/* Contenedor secundario con animación y clase "notfound-container animated-drop". */}
      <div className="notfound-container animated-drop">
        {/* Título de error 404. */}
        <h1>404</h1>
        {/* Mensaje de página no encontrada. */}
        <p>Página no encontrada</p>
        {/* Enlace que redirige a la página principal utilizando el componente Link de React Router. */}
        <Link to="/">
          {/* Botón de Reactstrap con estilo de color "info" que lleva al usuario de vuelta al inicio. */}
          <Button color="info">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

// Exportamos el componente NotFoundPage como predeterminado.
export default NotFoundPage;
