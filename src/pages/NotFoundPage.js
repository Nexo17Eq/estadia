// crea pagina not found
import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <div className="notfound-container">
        <FaExclamationTriangle />
        <h1>404 - Not Found!</h1>
        <p>La página que buscas no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
