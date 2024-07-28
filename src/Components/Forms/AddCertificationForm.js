// AddCertificationForm.js

// Importamos las bibliotecas necesarias de React, Reactstrap, DatePicker y Swal.
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

// Definimos el componente AddCertificationForm.
const AddCertificationForm = () => {
  // Estado inicial del formulario.
  const initialFormState = {
    name: "",
    topic: "",
    space: "",
    department: "",
    startDate: new Date(),
    endDate: new Date(),
    people: "",
    budget: "",
  };

  // Estado para la certificación.
  const [certification, setCertification] = useState(initialFormState);

  // Lista de departamentos.
  const departments = [
    "Recursos Humanos",
    "Proyectos",
    "TI",
    "Marketing",
    "Dirección",
  ];

  // Función para manejar los cambios en los campos del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCertification({ ...certification, [name]: value });
  };

  // Función para manejar los cambios en las fechas.
  const handleDateChange = (name, date) => {
    setCertification({ ...certification, [name]: date });
  };

  // Función para manejar el envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(certification);
    Swal.fire({
      icon: "success",
      title: "Certificación agregada",
      text: "La certificación se ha agregado correctamente.",
    });
  };

  // Función para resetear el formulario.
  const handleReset = () => {
    setCertification(initialFormState);
  };

  return (
    // Formulario de adición de certificación.
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Nombre o Título de la Certificación</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={certification.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="topic">Tema</Label>
        <Input
          type="text"
          name="topic"
          id="topic"
          value={certification.topic}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="space">Espacio</Label>
        <Input
          type="text"
          name="space"
          id="space"
          value={certification.space}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="department">Departamento</Label>
        <Input
          type="select"
          name="department"
          id="department"
          value={certification.department}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un departamento</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="startDate">Fecha de Inicio</Label>
        <DatePicker
          selected={certification.startDate}
          onChange={(date) => handleDateChange("startDate", date)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="endDate">Fecha de Fin</Label>
        <DatePicker
          selected={certification.endDate}
          onChange={(date) => handleDateChange("endDate", date)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="people">Número de Personas</Label>
        <Input
          type="number"
          name="people"
          id="people"
          value={certification.people}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="budget">Presupuesto</Label>
        <Input
          type="number"
          name="budget"
          id="budget"
          value={certification.budget}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <div className="form-buttons">
        <Button type="submit" color="primary">
          Agregar Certificación
        </Button>
        <Button type="button" color="secondary" onClick={handleReset}>
          Limpiar Formulario
        </Button>
      </div>
    </Form>
  );
};

// Exportamos el componente AddCertificationForm como predeterminado.
export default AddCertificationForm;
