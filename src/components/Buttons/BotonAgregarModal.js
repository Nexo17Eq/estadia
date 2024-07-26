import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioAgregarCertificacion from "../Forms/FormularioAgregarCertificacion";
import { FaPlus } from "react-icons/fa";


const BotonAgregarModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" className="boton-agregar" onClick={handleShow}>
        <FaPlus />
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Agregar certificación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioAgregarCertificacion />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BotonAgregarModal;