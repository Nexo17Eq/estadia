// Importamos las bibliotecas necesarias de React y Reactstrap, así como los componentes personalizados.
import React, { useState } from "react";
import { Button } from "reactstrap";
import { CardDepartamento, DepartamentoModal } from "../Cards/CardDepartamento";
import ModalButton from "../Buttons/ModalButton";
import AddDepartamento from "../Forms/AddDptoFoorm";
import DeleteItemsButton from "../Buttons/DeleteItemsButton"; // Importamos el botón de eliminar

/**
 * Componente que maneja la visualización y gestión de departamentos.
 * Permite agregar nuevos departamentos, eliminar múltiples departamentos y visualizar detalles de un departamento seleccionado.
 */
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

  /**
   * Maneja la visibilidad del modal para mostrar detalles del departamento seleccionado.
   *
   * @param {Object} departamento - El departamento seleccionado para mostrar en el modal.
   */
  const toggleModal = (departamento) => {
    setSelectedDepartamento(departamento);
  };

  /**
   * Maneja la eliminación de múltiples departamentos.
   * Filtra los departamentos que no están en la lista de IDs a eliminar.
   *
   * @param {Array<number>} idsToDelete - Array de IDs de los departamentos a eliminar.
   */
  const handleDeleteDepartamentos = (idsToDelete) => {
    setDepartamentos((prevDepartamentos) =>
      prevDepartamentos.filter((dept) => !idsToDelete.includes(dept.id))
    );
  };

  return (
    <div className="content">
      {/* Botón para agregar un nuevo departamento */}
      <ModalButton icon="fa fa-plus" modalContent={<AddDepartamento />} />

      {/* Botón para eliminar departamentos */}
      <DeleteItemsButton
        items={departamentos}
        onDelete={handleDeleteDepartamentos}
      />

      {/* Listado de departamentos */}
      <div className="users">
        {departamentos.map((dept) => (
          <CardDepartamento
            key={dept.id}
            dept={dept}
            toggleModal={toggleModal}
          />
        ))}
      </div>

      {/* Modal para el departamento seleccionado */}
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
