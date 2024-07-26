import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

const CardCertificacion = ({ tema, nombre, fecha, localidad, isSelected, onCheckboxChange }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <Card className="card-certificacion">
        <Card.Img
          variant="top"
          src="https://img.freepik.com/vector-gratis/ilustracion-concepto-certificacion_114360-5171.jpg?w=1060&t=st=1719986206~exp=1719986806~hmac=01f9788cee047afa4a7f905b00526dc503449a27832ec0a6c6c223a2abfa5534"
          alt="Certificación"
          onClick={handleModalShow}
        />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>{tema}</Card.Title>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={onCheckboxChange}
            />
          </div>
          <Card.Text onClick={handleModalShow}>
            <strong>Nombre:</strong> {nombre}<br />
            <strong>Fecha:</strong> {fecha}<br />
            <strong>Localidad:</strong> {localidad}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{tema}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Nombre:</strong> {nombre}<br />
            <strong>Fecha:</strong> {fecha}<br />
            <strong>Localidad:</strong> {localidad}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardCertificacion;
