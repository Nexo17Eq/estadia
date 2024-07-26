import React from "react";
import { FaDownload } from "react-icons/fa";

const BotonSelectDownload = ({ onDownload }) => {
  return (
    <button className="btn btn-download" onClick={onDownload}>
      <FaDownload /> Descargar Seleccionadas
    </button>
  );
};

export default BotonSelectDownload;
