// Importamos las bibliotecas necesarias de React y Reactstrap, así como componentes personalizados.
import React, { useState } from "react";
import { Button } from "reactstrap";
import { CardUser, UserModal } from "./Cards/CardUser";
import UserFilterForm from "./Forms/UserFilterForm";
import ModalButton from "./Buttons/ModalButton";
import AddUserForm from "./Forms/AddUserForm";

// Definimos el componente Users.
const Users = () => {
  // Estado para la lista de usuarios.
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Juan Pérez",
      username: "jperez",
      password: "123456",
      department: "Recursos Humanos",
    },
    {
      id: 2,
      name: "María López",
      username: "mlopez",
      password: "abcdef",
      department: "Finanzas",
    },
  ]);

  // Estado para los filtros aplicados.
  const [filters, setFilters] = useState({
    name: "",
    username: "",
    department: "",
  });

  // Estado para el usuario seleccionado.
  const [selectedUser, setSelectedUser] = useState(null);
  // Estado para la visibilidad del menú de filtros.
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  // Maneja los cambios en los filtros.
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Filtra los usuarios según los filtros aplicados.
  const handleFilter = () => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
        user.department.toLowerCase().includes(filters.department.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  // Alterna la visibilidad del modal del usuario seleccionado.
  const toggleUserModal = (user) => {
    setSelectedUser(user);
  };

  // Alterna la visibilidad del menú de filtros.
  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(!isFilterMenuVisible);
  };

  return (
    <div className="content">
      {/* Botón para agregar un nuevo usuario */}
      <ModalButton icon="fas fa-user-plus" modalContent={<AddUserForm />} />

      {/* Botón para mostrar u ocultar el menú de filtros */}
      <Button onClick={toggleFilterMenu} className="toggle-filter-btn">
        {isFilterMenuVisible ? "Ocultar Filtros" : "Mostrar Filtros"}
      </Button>

      {/* Formulario de filtros */}
      <div className={`filter-menu ${isFilterMenuVisible ? "visible" : ""}`}>
        <UserFilterForm
          filters={filters}
          handleFilterChange={handleFilterChange}
          handleFilter={handleFilter}
        />
      </div>

      {/* Lista de usuarios */}
      <div className="users">
        {users.map((user) => (
          <CardUser key={user.id} user={user} toggleModal={toggleUserModal} />
        ))}
      </div>

      {/* Modal para mostrar los detalles del usuario seleccionado */}
      {selectedUser && (
        <UserModal user={selectedUser} toggleModal={toggleUserModal} />
      )}
    </div>
  );
};

// Exportamos el componente Users.
export default Users;
