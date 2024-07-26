import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormularioAgregarCertificacion() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="formulario-container">
      <form className="formulario">
        <div className="col-auto mb-3">
          <label htmlFor="participante">Participante</label>
          <input type="text" className="form-control" id="participante" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="fecha">Fecha:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="actividad">Actividad</label>
          <input
            type="text"
            className="form-control"
            id="actividad"
            placeholder="Taller, conferencia, etc"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="municipio">Municipio</label>
          <input type="text" className="form-control" id="municipio" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="entidad">Entidad/localidad</label>
          <input type="text" className="form-control" id="entidad" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="espacio">Espacio</label>
          <input type="text" className="form-control" id="espacio" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="dias">Días</label>
          <div className="d-flex">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
            />
            <span className="mx-2">-</span>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="duracion">Duración</label>
          <div className="d-flex align-items-center">
            <input type="number" className="form-control" id="duracion" />
            <span className="ml-2">hrs</span>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="departamento">Departamento</label>
          <select className="form-select" id="departamento">
            <option defaultValue>Selecciona un departamento</option>
            <option value="1">Departamento 1</option>
            <option value="2">Departamento 2</option>
            <option value="3">Departamento 3</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="presupuesto">Presupuesto</label>
          <input type="number" className="form-control" id="presupuesto" />
        </div>
      </form>
    </div>
  );
}

export default FormularioAgregarCertificacion;
