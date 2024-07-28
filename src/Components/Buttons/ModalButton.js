// Importamos las bibliotecas necesarias de React, Reactstrap y PropTypes.
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

// Definimos el componente ModalButton.
const ModalButton = ({ icon, modalContent }) => {
  // Utilizamos el hook useState para manejar el estado de visibilidad del modal.
  const [modal, setModal] = useState(false);

  // Función para alternar el estado de visibilidad del modal.
  const toggle = () => setModal(!modal);

  return (
    <>
      {/* Botón que al hacer clic abre el modal */}
      <button className="modal-button" onClick={toggle}>
        <i className={icon}></i>
      </button>

      {/* Definición del modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal Title</ModalHeader>
        <ModalBody>{modalContent}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

// Definimos los tipos de las props que el componente espera recibir.
ModalButton.propTypes = {
  // Prop para el ícono del botón
  icon: PropTypes.string.isRequired,
  // Prop para el contenido del modal
  modalContent: PropTypes.node.isRequired,
};

// Exportamos el componente ModalButton.
export default ModalButton;
