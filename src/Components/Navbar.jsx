// Importamos las bibliotecas necesarias de React, SweetAlert2 y React Icons.
import React from "react";
import Swal from "sweetalert2";
import { FaSignOutAlt, FaUser, FaBuilding, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="navbar-brand">
          <Link to="/dashboard">
            <img
              src="https://turismo.durango.gob.mx/wp-content/uploads/sites/35/2022/11/SETUED.svg"
              alt="logo"
              className="logo"
            />
          </Link>
        </div>

        {/* Título de la barra de navegación. */}
        <div className="navbar-title">
          <h1>Registro Estatal De Calidad Turistica</h1>
        </div>

        {/* Sección de navegación a la derecha con opciones de navegación y botón para cerrar sesión. */}
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <FaHome />
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              <FaUser />
              Usuarios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/departamento" className="nav-link">
              <FaBuilding />
              Departamentos
            </Link>
          </li>
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
