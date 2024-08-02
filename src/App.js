// Importamos las bibliotecas necesarias para el enrutamiento y componentes.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./Components/Pages/Dashboard";
import Users from "./Components/Pages/Users"; // Importamos el componente Users
import "./App.scss"; // Importamos los estilos globales de la aplicación.
import Departamento from "./Components/Pages/Departamento";
import NotFoundPage from "./Components/Pages/NotFoundPage";

/**
 * Componente principal de la aplicación que configura las rutas y el enrutamiento.
 * Utiliza React Router para manejar la navegación entre diferentes páginas y componentes.
 *
 * @returns {JSX.Element} - El componente principal de la aplicación.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de inicio (Login) */}
        <Route path="/" element={<Login />} />

        {/* Ruta para el dashboard, envuelto en el layout del dashboard */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        {/* Ruta para la página de usuarios, envuelta en el layout del dashboard */}
        <Route
          path="/users"
          element={
            <DashboardLayout>
              <Users />
            </DashboardLayout>
          }
        />

        {/* Ruta para la página de departamentos, envuelta en el layout del dashboard */}
        <Route
          path="/departamento"
          element={
            <DashboardLayout>
              <Departamento />
            </DashboardLayout>
          }
        />

        {/* Ruta para cualquier URL no definida (página 404) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
