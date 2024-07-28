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
import { FaDownload } from "react-icons/fa";

// Componente para seleccionar certificaciones.
const SelectCertificationsButton = ({ certifications }) => {
  // Estado para manejar la visibilidad del modal.
  const [modal, setModal] = useState(false);
  // Estado para manejar las certificaciones seleccionadas.
  const [selectedCertifications, setSelectedCertifications] = useState([]);

  // Función para alternar el estado de visibilidad del modal.
  const toggle = () => setModal(!modal);

  // Función para manejar el cambio en la selección de certificaciones.
  const handleSelectionChange = (e) => {
    const id = parseInt(e.target.value);
    setSelectedCertifications((prev) =>
      prev.includes(id) ? prev.filter((certId) => certId !== id) : [...prev, id]
    );
  };

  // Función para confirmar la selección y mostrar las certificaciones seleccionadas en consola.
  const handleConfirm = () => {
    console.log("Certificaciones seleccionadas:", selectedCertifications);
    toggle(); // Cierra el modal después de confirmar.
  };

  // Función para limpiar las selecciones.
  const handleClear = () => {
    setSelectedCertifications([]);
  };

  return (
    <>
      {/* Botón que al hacer clic abre el modal */}
      <button className="select-certifications-button" onClick={toggle}>
        <FaDownload />
      </button>

      {/* Definición del modal */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="select-certifications-modal"
      >
        <ModalHeader toggle={toggle}>Seleccionar Certificaciones</ModalHeader>
        <ModalBody>
          {/* Lista de certificaciones para seleccionar */}
          {certifications.map((cert) => (
            <FormGroup
              key={cert.id}
              check
              className={
                selectedCertifications.includes(cert.id) ? "selected" : ""
              }
            >
              <Label check>
                <Input
                  type="checkbox"
                  value={cert.id}
                  checked={selectedCertifications.includes(cert.id)}
                  onChange={handleSelectionChange}
                />
                {cert.name}
              </Label>
            </FormGroup>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfirm}>
            Confirmar
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
SelectCertificationsButton.propTypes = {
  // Prop para la lista de certificaciones disponibles para seleccionar
  certifications: PropTypes.array.isRequired,
};

// Exportamos el componente SelectCertificationsButton como predeterminado.
export default SelectCertificationsButton;
