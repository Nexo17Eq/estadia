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
        <Label for="name">Nombre Certificación</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={filters.name}
          onChange={handleFilterChange}
          autoComplete="off" // Desactivar autocompletado
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
          autoComplete="off" // Desactivar autocompletado
        />
      </FormGroup>
      <FormGroup>
        <Label for="municipio">Municipio</Label>
        <Input
          type="select"
          name="municipio"
          id="municipio"
          value={filters.municipio}
          onChange={handleFilterChange}
          autoComplete="off" // Desactivar autocompletado
        >
          <option value="">Selecciona un municipio</option>
          <option value="Canatlán">Canatlán</option>
          <option value="Canelas">Canelas</option>
          <option value="Coneto de Comonfort">Coneto de Comonfort</option>
          <option value="Cuencamé">Cuencamé</option>
          <option value="Durango">Durango</option>
          <option value="El Oro">El Oro</option>
          <option value="Gómez Palacio">Gómez Palacio</option>
          <option value="Guadalupe Victoria">Guadalupe Victoria</option>
          <option value="Guanaceví">Guanaceví</option>
          <option value="Hidalgo">Hidalgo</option>
          <option value="Indé">Indé</option>
          <option value="Lerdo">Lerdo</option>
          <option value="Mapimí">Mapimí</option>
          <option value="Mezquital">Mezquital</option>
          <option value="Nazas">Nazas</option>
          <option value="Nombre de Dios">Nombre de Dios</option>
          <option value="Ocampo">Ocampo</option>
          <option value="El Salto (Pueblo Nuevo)">
            El Salto (Pueblo Nuevo)
          </option>
          <option value="Pánuco de Coronado">Pánuco de Coronado</option>
          <option value="Peñón Blanco">Peñón Blanco</option>
          <option value="Poanas">Poanas</option>
          <option value="Rodeo">Rodeo</option>
          <option value="San Bernardo">San Bernardo</option>
          <option value="San Dimas">San Dimas</option>
          <option value="San Juan de Guadalupe">San Juan de Guadalupe</option>
          <option value="San Juan del Río">San Juan del Río</option>
          <option value="San Luis del Cordero">San Luis del Cordero</option>
          <option value="San Pedro del Gallo">San Pedro del Gallo</option>
          <option value="Santa Clara">Santa Clara</option>
          <option value="Santiago Papasquiaro">Santiago Papasquiaro</option>
          <option value="Súchil">Súchil</option>
          <option value="Tamazula">Tamazula</option>
          <option value="Tepehuanes">Tepehuanes</option>
          <option value="Tlahualilo">Tlahualilo</option>
          <option value="Topia">Topia</option>
          <option value="Vicente Guerrero">Vicente Guerrero</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="localidad">Localidad</Label>
        <Input
          type="text"
          name="localidad"
          id="localidad"
          value={filters.localidad}
          onChange={handleFilterChange}
          autoComplete="off" // Desactivar autocompletado
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoria">Categoría</Label>
        <Input
          type="select"
          name="categoria"
          id="categoria"
          value={filters.categoria}
          onChange={handleFilterChange}
          autoComplete="off" // Desactivar autocompletado
        >
          <option value="">Selecciona una categoría</option>
          <option value="restaurantes">Restaurantes</option>
          <option value="hoteles">Hoteles</option>
          <option value="escuelas">Escuelas</option>
          <option value="hospitales">Hospitales</option>
          <option value="oficinas">Oficinas</option>
          <option value="tiendas">Tiendas</option>
          <option value="parques">Parques</option>
          <option value="cines">Cines</option>
          <option value="gimnasios">Gimnasios</option>
          <option value="otros">Otros</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="space">Espacio</Label>
        <Input
          type="text"
          name="space"
          id="space"
          value={filters.space}
          onChange={handleFilterChange}
          autoComplete="off" // Desactivar autocompletado
        />
      </FormGroup>
      <FormGroup>
        <Label for="department">Departamento encargado</Label>
        <Input
          type="select"
          name="department"
          id="department"
          value={filters.department}
          onChange={handleFilterChange}
          autoComplete="off" // Desactivar autocompletado
        >
          <option value="">Selecciona un departamento</option>
          {/* Agregar aquí todas las opciones de departamentos disponibles */}
        </Input>
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
          autoComplete="off" // Desactivar autocompletado
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
          autoComplete="off" // Desactivar autocompletado
        />
      </FormGroup>
      <Button onClick={handleFilter}>Filtrar</Button>
    </Form>
  );
};

// Exportamos el componente FilterForm como predeterminado.
export default FilterForm;
