// Importamos las bibliotecas necesarias de React y Reactstrap, así como los componentes personalizados.
import React, { useState } from "react";
import { Button } from "reactstrap";
import { CardDepartamento, DepartamentoModal } from "../Cards/CardDepartamento";
import ModalButton from "../Buttons/ModalButton";
import AddDepartamento from "../Forms/AddDptoFoorm";

// Definimos el componente Departamento.
const Departamento = () => {
  // Estado para la lista de departamentos.
  const [departamentos, setDepartamentos] = useState([
    // Datos de ejemplo.
    {
      id: 1,
      name: "Recursos Humanos",
      description: "Encargado de la gestión del personal y recursos humanos.",
    },
    {
      id: 2,
      name: "Tecnología",
      description: "Encargado de la infraestructura tecnológica y soporte.",
    },
  ]);

  // Estado para el departamento seleccionado.
  const [selectedDepartamento, setSelectedDepartamento] = useState(null);

  // Función para manejar la visibilidad del modal.
  const toggleModal = (departamento) => {
    setSelectedDepartamento(departamento);
  };

  return (
    <div className="content">
      {/* Botón para agregar un nuevo departamento. */}
      <ModalButton icon="fa fa-plus" modalContent={<AddDepartamento />} />
      {/* Listado de departamentos. */}
      <div className="users">
        {departamentos.map((dept) => (
          <CardDepartamento
            key={dept.id}
            dept={dept}
            toggleModal={toggleModal}
          />
        ))}
      </div>

      {/* Modal para el departamento seleccionado. */}
      {selectedDepartamento && (
        <DepartamentoModal
          departamento={selectedDepartamento}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

// Exportamos el componente Departamento como predeterminado.
export default Departamento;
