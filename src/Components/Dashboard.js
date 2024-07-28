// Dashboard.js

// Importamos las bibliotecas necesarias de React y Reactstrap, así como los componentes personalizados.
import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  CardCertificacion,
  CertificationModal,
} from "./Cards/CardCertificacion";
import FilterForm from "./Forms/FilterForm";
import ModalButton from "./Buttons/ModalButton";
import AddCertificationForm from "./Forms/AddCertificationForm";

// Definimos el componente Dashboard.
const Dashboard = () => {
  // Estado para los filtros de búsqueda.
  const [filters, setFilters] = useState({
    name: "",
    topic: "",
    location: "",
    space: "",
    department: "",
    startDate: null,
    endDate: null,
    people: "",
    budget: "",
  });

  // Estado para la lista de certificaciones.
  const [certifications, setCertifications] = useState([
    // Datos de ejemplo.
    {
      id: 1,
      name: "1",
      date: new Date(),
      topic: "Prueba",
      location: "Madrid",
      space: "Sala A",
      department: "Recursos Humanos",
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-01-02"),
      people: 25,
      budget: 1000,
    },
  ]);

  // Estado para las certificaciones filtradas.
  const [filteredCertifications, setFilteredCertifications] =
    useState(certifications);
  // Estado para la certificación seleccionada.
  const [selectedCertification, setSelectedCertification] = useState(null);
  // Estado para la visibilidad del menú de filtros.
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);
  // Estado para la visibilidad del modal.
  const [modalOpen, setModalOpen] = useState(false);

  // Función para manejar cambios en los filtros.
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Función para manejar cambios en las fechas.
  const handleDateChange = (name, date) => {
    setFilters({ ...filters, [name]: date });
  };

  // Función para aplicar los filtros a las certificaciones.
  const handleFilter = () => {
    let filtered = certifications.filter((cert) => {
      return (
        (filters.name === "" ||
          cert.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.topic === "" ||
          cert.topic.toLowerCase().includes(filters.topic.toLowerCase())) &&
        (filters.location === "" ||
          cert.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (filters.space === "" ||
          cert.space.toLowerCase().includes(filters.space.toLowerCase())) &&
        (filters.department === "" ||
          cert.department
            .toLowerCase()
            .includes(filters.department.toLowerCase())) &&
        (filters.startDate === null || cert.startDate >= filters.startDate) &&
        (filters.endDate === null || cert.endDate <= filters.endDate) &&
        (filters.people === "" || cert.people.toString() === filters.people) &&
        (filters.budget === "" || cert.budget.toString() === filters.budget)
      );
    });
    setFilteredCertifications(filtered);
  };

  // Función para alternar la visibilidad del modal de certificación.
  const toggleModal = (certification) => {
    setSelectedCertification(certification);
  };

  // Función para alternar la visibilidad del menú de filtros.
  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  // Función para alternar la visibilidad del modal del formulario de adición de certificaciones.
  const toggleFormModal = () => {
    setModalOpen(!modalOpen);
  };

  // Función para añadir una nueva certificación a la lista.
  const addCertification = (newCert) => {
    setCertifications([
      ...certifications,
      { id: certifications.length + 1, ...newCert },
    ]);
    setFilteredCertifications([
      ...certifications,
      { id: certifications.length + 1, ...newCert },
    ]);
  };

  return (
    <div className="content">
      {/* Botón modal para añadir una nueva certificación. */}
      <ModalButton icon="fas fa-plus" modalContent={<AddCertificationForm />} />

      {/* Botón para mostrar u ocultar el menú de filtros. */}
      <Button onClick={toggleFilterMenu} className="toggle-filter-btn">
        {isFilterMenuVisible ? "Ocultar Filtros" : "Mostrar Filtros"}
      </Button>

      {/* Menú de filtros, visible según el estado. */}
      <div className={`filter-menu ${isFilterMenuVisible ? "visible" : ""}`}>
        <FilterForm
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleDateChange={handleDateChange}
          handleFilter={handleFilter}
        />
      </div>

      {/* Listado de certificaciones filtradas. */}
      <div className="certifications">
        {filteredCertifications.map((cert) => (
          <CardCertificacion
            key={cert.id}
            cert={cert}
            toggleModal={toggleModal}
          />
        ))}
      </div>

      {/* Modal para la certificación seleccionada. */}
      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

// Exportamos el componente Dashboard como predeterminado.
export default Dashboard;
