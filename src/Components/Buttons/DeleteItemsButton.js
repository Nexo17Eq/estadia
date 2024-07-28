// Importamos las bibliotecas necesarias de React, Reactstrap y PropTypes.
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";

// Componente para eliminar elementos.
const DeleteItemsButton = ({ items, onDelete }) => {
  // Estado para manejar la visibilidad del modal.
  const [modal, setModal] = useState(false);
  // Estado para manejar los elementos seleccionados para eliminar.
  const [selectedItems, setSelectedItems] = useState([]);

  // Función para alternar el estado de visibilidad del modal.
  const toggle = () => setModal(!modal);

  // Función para manejar el cambio en la selección de elementos.
  const handleSelectionChange = (e) => {
    const id = parseInt(e.target.value);
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  // Función para confirmar la eliminación de elementos.
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminados, los elementos no se pueden recuperar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamar a la función de eliminación pasada como prop.
        onDelete(selectedItems);
        // Mostrar un mensaje de éxito.
        Swal.fire("Eliminado", "Los elementos han sido eliminados.", "success");
        setSelectedItems([]);
        toggle(); // Cierra el modal después de confirmar.
      }
    });
  };

  // Función para limpiar las selecciones.
  const handleClear = () => {
    setSelectedItems([]);
  };

  return (
    <>
      {/* Botón que al hacer clic abre el modal */}
      <button className="select-certifications-button-delete" onClick={toggle}>
        <FaTrash />
      </button>

      {/* Definición del modal */}
      <Modal isOpen={modal} toggle={toggle} className="delete-items-modal">
        <ModalHeader toggle={toggle}>
          Seleccionar Elementos para Eliminar
        </ModalHeader>
        <ModalBody>
          {/* Lista de elementos para seleccionar */}
          {items.map((item) => (
            <FormGroup
              key={item.id}
              check
              className={selectedItems.includes(item.id) ? "selected" : ""}
            >
              <Label check>
                <Input
                  type="checkbox"
                  value={item.id}
                  checked={selectedItems.includes(item.id)}
                  onChange={handleSelectionChange}
                />
                {item.name}
              </Label>
            </FormGroup>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button color="secondary" onClick={handleClear}>
            Limpiar
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

// Definimos los tipos de las props que el componente espera recibir.
DeleteItemsButton.propTypes = {
  // Prop para la lista de elementos disponibles para eliminar
  items: PropTypes.array.isRequired,
  // Prop para la función que maneja la eliminación de elementos
  onDelete: PropTypes.func.isRequired,
};

// Exportamos el componente DeleteItemsButton como predeterminado.
export default DeleteItemsButton;
