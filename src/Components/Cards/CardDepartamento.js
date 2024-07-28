// Importamos las bibliotecas necesarias de React y Reactstrap.
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import BotonEditarModal from "../Buttons/ModalEditarButton";
import AddDepartamento from "../Forms/AddDptoFoorm";

// Definimos una imagen por defecto para los departamentos.
const defaultImage =
  "https://img.freepik.com/vector-premium/conjunto-trabajo-personas-personaje-dibujos-animados-ilustracion_9026-110.jpg";

// Componente para mostrar la tarjeta de un departamento.
const CardDepartamento = ({ dept, toggleModal }) => {
  return (
    // Tarjeta que muestra el nombre del departamento.
    <Card className="user-card" onClick={() => toggleModal(dept)}>
      <CardBody>
        <img src={defaultImage} alt={dept.name} className="user-image" />
        <CardTitle tag="h5">{dept.name}</CardTitle>
      </CardBody>
    </Card>
  );
};

// Componente para mostrar el modal con los detalles de un departamento.
const DepartamentoModal = ({ departamento, toggleModal }) => {
  return (
    // Modal que muestra información detallada del departamento.
    <Modal isOpen={true} toggle={() => toggleModal(null)}>
      <ModalHeader toggle={() => toggleModal(null)}>
        {departamento.name}
      </ModalHeader>
      <ModalBody>
        <p>
          <strong>Descripción:</strong> {departamento.description}
        </p>
      </ModalBody>
      <BotonEditarModal modalContent={<AddDepartamento />} />
      <ModalFooter>
        <Button color="secondary" onClick={() => toggleModal(null)}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// Exportamos los componentes CardDepartamento y DepartamentoModal.
export { CardDepartamento, DepartamentoModal };
