// Importamos las bibliotecas necesarias de React, Reactstrap y SweetAlert2.
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Swal from "sweetalert2";

// Definimos el componente AddDpto.
const AddDepartamento = () => {
  // Estado inicial del formulario.
  const initialFormState = {
    name: "",
    description: "",
  };

  // Estado para el formulario de departamento.
  const [departamento, setDepartamento] = useState(initialFormState);

  // Función para manejar los cambios en los campos del formulario.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartamento({ ...departamento, [name]: value });
  };

  // Función para manejar el envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(departamento);

    // Resetear el formulario después de enviarlo.
    setDepartamento(initialFormState);

    Swal.fire({
      icon: "success",
      title: "Departamento Agregado",
      text: "El departamento se ha agregado correctamente.",
    });
  };

  // Funcion para resetear el formulario.
  const handleReset = () => {
    setDepartamento(initialFormState);
  };

  return (
    // Formulario de creación de departamentos.
    <Form className="add-form" onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre */}
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={departamento.name}
          onChange={handleChange}
        />
      </FormGroup>

      {/* Campo de entrada para la descripción */}
      <FormGroup>
        <Label for="description">Descripción</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={departamento.description}
          onChange={handleChange}
        />
      </FormGroup>

      {/* Botones para enviar y resetear el formulario */}
      <div className="form-buttons">
        <Button type="submit" color="primary">
          Agregar
        </Button>
        <Button type="button" color="secondary" onClick={handleReset}>
          Limpiar
        </Button>
      </div>
    </Form>
  );
};

// Exportamos el componente AddDepartamento como predeterminado.
export default AddDepartamento;
