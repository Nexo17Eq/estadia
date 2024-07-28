// Importamos las bibliotecas necesarias de React y Reactstrap.
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// Definimos el componente UserFilterForm.
const UserFilterForm = ({ filters, handleFilterChange, handleFilter }) => {
  return (
    // Formulario de filtro de usuarios.
    <Form className="filter-form">
      {/* Campo de entrada para el nombre */}
      <FormGroup>
        <Label for="name">Nombre</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={filters.name}
          onChange={handleFilterChange}
        />
      </FormGroup>

      {/* Campo de entrada para el nombre de usuario */}
      <FormGroup>
        <Label for="username">Usuario</Label>
        <Input
          type="text"
          name="username"
          id="username"
          value={filters.username}
          onChange={handleFilterChange}
        />
      </FormGroup>

      {/* Campo de entrada para el departamento */}
      <FormGroup>
        <Label for="department">Departamento</Label>
        <Input
          type="text"
          name="department"
          id="department"
          value={filters.department}
          onChange={handleFilterChange}
        />
      </FormGroup>

      {/* Botón para aplicar los filtros */}
      <Button onClick={handleFilter}>Filtrar</Button>
    </Form>
  );
};

// Exportamos el componente UserFilterForm.
export default UserFilterForm;
