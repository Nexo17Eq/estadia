// FilterForm.js

// Importamos las bibliotecas necesarias de React, Reactstrap y DatePicker.
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Definimos el componente FilterForm.
const FilterForm = ({
  filters, // Objeto que contiene los filtros actuales.
  handleFilterChange, // Función para manejar los cambios en los filtros.
  handleDateChange, // Función para manejar los cambios en las fechas.
  handleFilter, // Función para aplicar los filtros.
}) => {
  return (
    // Formulario de filtrado.
    <Form className="filter-form">
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
      <FormGroup>
        <Label for="topic">Tema</Label>
        <Input
          type="text"
          name="topic"
          id="topic"
          value={filters.topic}
          onChange={handleFilterChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Municipio o Lugar</Label>
        <Input
          type="text"
          name="location"
          id="location"
          value={filters.location}
          onChange={handleFilterChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="space">Espacio</Label>
        <Input
          type="text"
          name="space"
          id="space"
          value={filters.space}
          onChange={handleFilterChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="department">Departamento encargado</Label>
        <Input
          type="text"
          name="department"
          id="department"
          value={filters.department}
          onChange={handleFilterChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="startDate">Fecha de Inicio</Label>
        <DatePicker
          selected={filters.startDate}
          onChange={(date) => handleDateChange("startDate", date)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="endDate">Fecha de Fin</Label>
        <DatePicker
          selected={filters.endDate}
          onChange={(date) => handleDateChange("endDate", date)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="people">Número de Personas</Label>
        <Input
          type="number"
          name="people"
          id="people"
          value={filters.people}
          onChange={handleFilterChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="budget">Presupuesto</Label>
        <Input
          type="number"
          name="budget"
          id="budget"
          value={filters.budget}
          onChange={handleFilterChange}
        />
      </FormGroup>
      <Button onClick={handleFilter}>Filtrar</Button>
    </Form>
  );
};

// Exportamos el componente FilterForm como predeterminado.
export default FilterForm;
