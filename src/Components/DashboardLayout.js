// DashboardLayout.js

// Importamos la biblioteca de React y el componente Navbar.
import React from "react";
import Navbar from "./Navbar";

// Definimos el componente DashboardLayout, que toma los hijos (children) como propiedades.
const DashboardLayout = ({ children }) => {
  return (
    <div>
      {/* Renderizamos el Navbar en la parte superior. */}
      <Navbar />
      {/* Renderizamos los hijos (children) que se pasan al componente DashboardLayout. */}
      {children}
    </div>
  );
};

// Exportamos el componente DashboardLayout como predeterminado.
export default DashboardLayout;
