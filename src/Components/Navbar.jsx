// Navbar.js

// Importamos las bibliotecas necesarias de React, SweetAlert2 y React Icons.
import React from "react";
import Swal from "sweetalert2";
import { FaSignOutAlt } from "react-icons/fa";

// Definimos el componente Navbar.
const Navbar = () => {
  // Función demostrativa para cerrar sesión.
  const cerrarSesion = () => {
    // Mostramos una alerta de confirmación usando SweetAlert2.
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Estás a punto de cerrar sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
    }).then((result) => {
      // Si el usuario confirma, mostramos una alerta de éxito y redirigimos a la página principal.
      if (result.isConfirmed) {
        Swal.fire("Sesión cerrada", "", "success");
        window.location.href = "/";
      }
    });
  };

  return (
    // Definimos la barra de navegación con la clase "navbar fixed-top".
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        {/* Sección de la marca de la barra de navegación con el logo. */}
        <div className="navbar-brand">
          <img
            src="https://turismo.durango.gob.mx/wp-content/uploads/sites/35/2022/11/SETUED.svg"
            alt="logo"
            className="logo"
          />
        </div>

        {/* Título de la barra de navegación. */}
        <div className="navbar-title">
          <h1>Registro Estatal De Calidad Turistica</h1>
        </div>

        {/* Sección de navegación a la derecha con un botón para cerrar sesión. */}
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button
              className="btn btn-secondary"
              onClick={() => cerrarSesion()}
            >
              {/* Icono de cerrar sesión de React Icons y texto "Salir". */}
              <FaSignOutAlt />
              Salir
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Exportamos el componente Navbar como predeterminado.
export default Navbar;
