// Importamos las bibliotecas necesarias de React y Reactstrap.
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import BotonEditarModal from "../Buttons/ModalEditarButton";
import AddUserForm from "../Forms/AddUserForm";

// Definimos una imagen por defecto para los usuarios.
const defaultImage =
  "https://img.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg?w=740&t=st=1719986206~exp=1719986806~hmac=01f9788cee047afa4a7f905b00526dc503449a27832ec0a6c6c223a2abfa5534";

// Componente para mostrar la tarjeta de un usuario.
const CardUser = ({ user, toggleModal }) => {
  return (
    // Tarjeta que muestra el nombre, el usuario y el departamento.
    <Card className="user-card" onClick={() => toggleModal(user)}>
      <CardBody>
        <img src={defaultImage} alt={user.username} className="user-image" />
        <CardTitle tag="h5">{user.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {user.username} - {user.department}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

// Componente para mostrar el modal con los detalles de un usuario.
const UserModal = ({ user, toggleModal }) => {
  return (
    // Modal que muestra información detallada del usuario.
    <Modal isOpen={true} toggle={() => toggleModal(null)}>
      <ModalHeader toggle={() => toggleModal(null)}>{user.name}</ModalHeader>
      <ModalBody>
        <p>
          <strong>Nombre Completo:</strong> {user.name}
        </p>
        <p>
          <strong>Usuario:</strong> {user.username}
        </p>
        <p>
          <strong>Contraseña:</strong> ••••••••
        </p>
        <p>
          <strong>Departamento:</strong> {user.department}
        </p>
      </ModalBody>
      <BotonEditarModal modalContent={<AddUserForm />} />
      <ModalFooter>
        <Button color="secondary" onClick={() => toggleModal(null)}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// Exportamos los componentes CardUser y UserModal.
export { CardUser, UserModal };
