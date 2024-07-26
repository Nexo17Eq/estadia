import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import DashboradPage from "./pages/DashboardPage";

const Admin = () => {
  return (
    <div className="contenedor">
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboradPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
