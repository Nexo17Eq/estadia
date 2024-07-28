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

// Definimos una imagen por defecto para las certificaciones.
const defaultImage =
  "https://img.freepik.com/vector-gratis/ilustracion-concepto-certificacion_114360-5171.jpg?w=1060&t=st=1719986206~exp=1719986806~hmac=01f9788cee047afa4a7f905b00526dc503449a27832ec0a6c6c223a2abfa5534";

// Componente para mostrar la tarjeta de una certificación.
const CardCertificacion = ({ cert, toggleModal }) => {
  return (
    // Tarjeta que muestra el nombre y la fecha de la certificación.
    <Card className="cert-card" onClick={() => toggleModal(cert)}>
      <CardBody>
        <img src={defaultImage} alt={cert.name} className="cert-image" />
        <CardTitle tag="h5">{cert.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {cert.date.toLocaleDateString()}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

// Componente para mostrar el modal con los detalles de una certificación.
const CertificationModal = ({ certification, toggleModal }) => {
  return (
    // Modal que muestra información detallada de la certificación.
    <Modal isOpen={true} toggle={() => toggleModal(null)}>
      <ModalHeader toggle={() => toggleModal(null)}>
        {certification.name}
      </ModalHeader>
      <ModalBody>
        <p>
          <strong>Tema:</strong> {certification.topic}
        </p>
        <p>
          <strong>Municipio o Lugar:</strong> {certification.location}
        </p>
        <p>
          <strong>Espacio:</strong> {certification.space}
        </p>
        <p>
          <strong>Departamento encargado:</strong> {certification.department}
        </p>
        <p>
          <strong>Fecha de Inicio - Fin:</strong>{" "}
          {certification.startDate.toLocaleDateString()} -{" "}
          {certification.endDate.toLocaleDateString()}
        </p>
        <p>
          <strong>Número de personas que asistieron:</strong>{" "}
          {certification.people}
        </p>
        <p>
          <strong>Presupuesto:</strong> ${certification.budget}
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => toggleModal(null)}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// Exportamos los componentes CardCertificacion y CertificationModal.
export { CardCertificacion, CertificationModal };
