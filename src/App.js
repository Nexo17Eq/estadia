// App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./Components/Pages/Dashboard";
import Users from "./Components/Pages/Users"; // Importamos el componente Users
import "./App.scss"; // Importamos los estilos globales de la aplicación.
import Departamento from "./Components/Pages/Departamento";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/users"
          element={
            <DashboardLayout>
              <Users />
            </DashboardLayout>
          }
        />
        <Route
          path="/departamento"
          element={
            <DashboardLayout>
              <Departamento />
            </DashboardLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
