// Importamos las bibliotecas necesarias de React, Reactstrap y SweetAlert2.
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Swal from "sweetalert2";

// Definimos el componente AddUserForm.
const AddUserForm = () => {
  // Estado inicial del formulario.
  const initialFormState = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    department: "",
  };

  // Estado para el formulario de usuario.
  const [user, setUser] = useState(initialFormState);

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
    setUser({ ...user, [name]: value });
  };

  // Función para manejar el envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de contraseña.
    if (user.password !== user.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error de Validación",
        text: "Las contraseñas no coinciden.",
      });
      return;
    }

    console.log(user);

    // Resetear el formulario después de enviarlo.
    setUser(initialFormState);

    Swal.fire({
      icon: "success",
      title: "Usuario Agregado",
      text: "El usuario se ha agregado correctamente.",
    });
  };

  // Función para resetear el formulario.
  const handleReset = () => {
    setUser(initialFormState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre completo */}
      <FormGroup>
        <Label for="fullName">Nombre Completo</Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          value={user.fullName}
          onChange={handleChange}
          required
        />
      </FormGroup>

      {/* Campo de entrada para el nombre de usuario */}
      <FormGroup>
        <Label for="username">Nombre de Usuario</Label>
        <Input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleChange}
          required
        />
      </FormGroup>

      {/* Campo de entrada para la contraseña */}
      <FormGroup>
        <Label for="password">Contraseña</Label>
        <Input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          required
        />
      </FormGroup>

      {/* Campo de entrada para confirmar la contraseña */}
      <FormGroup>
        <Label for="confirmPassword">Confirmar Contraseña</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
      </FormGroup>

      {/* Campo de selección para el departamento */}
      <FormGroup>
        <Label for="department">Departamento</Label>
        <Input
          type="select"
          name="department"
          id="department"
          value={user.department}
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

      {/* Botones para enviar y resetear el formulario */}
      <div className="form-buttons">
        <Button type="submit" color="primary">
          Agregar Usuario
        </Button>
        <Button type="button" color="secondary" onClick={handleReset}>
          Limpiar Formulario
        </Button>
      </div>
    </Form>
  );
};

// Exportamos el componente AddUserForm.
export default AddUserForm;
