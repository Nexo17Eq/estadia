// App.js

// Importamos los componentes y funciones necesarios desde react-router-dom y otros archivos de componentes y estilos.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./Components/Dashboard";
import "./App.scss"; // Importamos los estilos globales de la aplicación.
import NotFoundPage from "./Pages/NotFoundPage";

// Definimos el componente principal de la aplicación.
function App() {
  return (
    // Configuramos el Router para gestionar las rutas de la aplicación.
    <Router>
      <Routes>
        {/* Definimos la ruta principal que renderiza el componente Login. */}
        <Route path="/" element={<Login />} />

        {/* Definimos la ruta para el dashboard, que usa DashboardLayout para envolver el componente Dashboard. */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />

        {/* Definimos una ruta comodín que renderiza el componente NotFoundPage si la ruta no coincide con ninguna definida. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

// Exportamos el componente App como el componente principal de la aplicación.
export default App;
