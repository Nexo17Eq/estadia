import React, { useState } from "react";
import CardCertificacion from "../components/CardCertificacion";
import BotonAgregarModal from "../components/Buttons/BotonAgregarModal";
import BotonSelectDownload from "../components/Buttons/BotonSelectDownload";

const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCertificaciones, setSelectedCertificaciones] = useState([]);

  const handleCheckboxChange = (tema) => {
    setSelectedCertificaciones((prevSelected) =>
      prevSelected.includes(tema)
        ? prevSelected.filter((item) => item !== tema)
        : [...prevSelected, tema]
    );
  };

  const handleDownload = () => {
    // Lógica para descargar las certificaciones seleccionadas
    console.log("Certificaciones a descargar:", selectedCertificaciones);
  };

  const filterCertificaciones = (certificaciones) => {
    if (!searchTerm) return certificaciones;
    return certificaciones.filter((certificacion) =>
      certificacion.tema.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const certificaciones = [
    { tema: "Certificación 1", nombre: "Nombre 1", fecha: "2024-01-01", localidad: "Localidad 1" },
    { tema: "Certificación 2", nombre: "Nombre 2", fecha: "2024-02-01", localidad: "Localidad 2" },
    { tema: "Certificación 3", nombre: "Nombre 3", fecha: "2024-03-01", localidad: "Localidad 3" },
    { tema: "Certificación 4", nombre: "Nombre 4", fecha: "2024-04-01", localidad: "Localidad 4" },
    { tema: "Certificación 5", nombre: "Nombre 5", fecha: "2024-05-01", localidad: "Localidad 5" },
    { tema: "Certificación 6", nombre: "Nombre 6", fecha: "2024-06-01", localidad: "Localidad 6" },
    { tema: "Certificación 7", nombre: "Nombre 7", fecha: "2024-07-01", localidad: "Localidad 7" },
    { tema: "Certificación 8", nombre: "Nombre 8", fecha: "2024-08-01", localidad: "Localidad 8" },
    { tema: "Certificación 9", nombre: "Nombre 9", fecha: "2024-09-01", localidad: "Localidad 9" },
    { tema: "Certificación 10", nombre: "Nombre 10", fecha: "2024-10-01", localidad: "Localidad 10" },
    { tema: "Certificación 11", nombre: "Nombre 11", fecha: "2024-11-01", localidad: "Localidad 11" },
    { tema: "Certificación 12", nombre: "Nombre 12", fecha: "2024-12-01", localidad: "Localidad 12" },
  ];

  const filteredCertificaciones = filterCertificaciones(certificaciones);

  return (
    <div className="contenedor container-fluid">
      <BotonAgregarModal />
      <div className="header-container d-flex align-items-center mb-3">
        <h1 className="formal-title flex-grow-1">Certificaciones</h1>
        <div className="search-container ml-3">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control search-input"
          />
        </div>
      </div>
      <div className="filtro-barra d-flex flex-wrap">
        {/* Filtros */}
        <div className="filtro ml-auto mb-3 align-right custom-margin-right" style={{ marginRight: "1.60rem" }}>
          <button className="btn btn-primary">Filtrar</button>
        </div>
      </div>
      <div className="d-flex justify-content-end mb-3">
        <BotonSelectDownload onDownload={handleDownload} />
      </div>
      <hr className="separator" />
      <div className="row">
        {filteredCertificaciones.map((certificacion, index) => (
          <div key={index} className="col-md-2 mb-3">
            <CardCertificacion
              tema={certificacion.tema}
              nombre={certificacion.nombre}
              fecha={certificacion.fecha}
              localidad={certificacion.localidad}
              isSelected={selectedCertificaciones.includes(certificacion.tema)}
              onCheckboxChange={() => handleCheckboxChange(certificacion.tema)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
