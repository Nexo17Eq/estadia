import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
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
    municipio: "",
    localidad: "",
    categoria: "",
    startDate: new Date(),
    endDate: new Date(),
    participants: [],
    participantInput: "",
  };

  // Estado para la certificación.
  const [certification, setCertification] = useState(initialFormState);

  // Estado para la modal.
  const [modalOpen, setModalOpen] = useState(false);

  // Lista de departamentos.
  const departments = [
    "Recursos Humanos",
    "Proyectos",
    "TI",
    "Marketing",
    "Dirección",
  ];

  // Arreglo de municipios
  const municipiosDgo = [
    { value: "Canatlán", label: "Canatlán" },
    { value: "Canelas", label: "Canelas" },
    { value: "Coneto de Comonfort", label: "Coneto de Comonfort" },
    { value: "Cuencamé", label: "Cuencamé" },
    { value: "Durango", label: "Durango" },
    { value: "El Oro", label: "El Oro" },
    { value: "Gómez Palacio", label: "Gómez Palacio" },
    { value: "Guadalupe Victoria", label: "Guadalupe Victoria" },
    { value: "Guanaceví", label: "Guanaceví" },
    { value: "Hidalgo", label: "Hidalgo" },
    { value: "Indé", label: "Indé" },
    { value: "Lerdo", label: "Lerdo" },
    { value: "Mapimí", label: "Mapimí" },
    { value: "Mezquital", label: "Mezquital" },
    { value: "Nazas", label: "Nazas" },
    { value: "Nombre de Dios", label: "Nombre de Dios" },
    { value: "Ocampo", label: "Ocampo" },
    { value: "El Salto (Pueblo Nuevo)", label: "El Salto (Pueblo Nuevo)" },
    { value: "Pánuco de Coronado", label: "Pánuco de Coronado" },
    { value: "Peñón Blanco", label: "Peñón Blanco" },
    { value: "Poanas", label: "Poanas" },
    { value: "Rodeo", label: "Rodeo" },
    { value: "San Bernardo", label: "San Bernardo" },
    { value: "San Dimas", label: "San Dimas" },
    { value: "San Juan de Guadalupe", label: "San Juan de Guadalupe" },
    { value: "San Juan del Río", label: "San Juan del Río" },
    { value: "San Luis del Cordero", label: "San Luis del Cordero" },
    { value: "San Pedro del Gallo", label: "San Pedro del Gallo" },
    { value: "Santa Clara", label: "Santa Clara" },
    { value: "Santiago Papasquiaro", label: "Santiago Papasquiaro" },
    { value: "Súchil", label: "Súchil" },
    { value: "Tamazula", label: "Tamazula" },
    { value: "Tepehuanes", label: "Tepehuanes" },
    { value: "Tlahualilo", label: "Tlahualilo" },
    { value: "Topia", label: "Topia" },
    { value: "Vicente Guerrero", label: "Vicente Guerrero" },
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

  // Función para agregar un participante.
  const addParticipant = () => {
    setCertification({
      ...certification,
      participants: [
        ...certification.participants,
        certification.participantInput,
      ],
      participantInput: "",
    });
  };

  // Función para manejar los cambios en la entrada del participante.
  const handleParticipantInputChange = (e) => {
    setCertification({ ...certification, participantInput: e.target.value });
  };

  // Función para abrir la modal.
  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
        <Label for="municipio">Municipio</Label>
        <Input
          type="select"
          name="municipio"
          id="municipio"
          value={certification.municipio}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un municipio</option>
          {municipiosDgo.map((municipio) => (
            <option key={municipio.value} value={municipio.value}>
              {municipio.label}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="localidad">Localidad</Label>
        <Input
          type="text"
          name="localidad"
          id="localidad"
          value={certification.localidad}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoria">Categoria</Label>
        <Input
          type="select"
          name="categoria"
          id="categoria"
          value={certification.categoria}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una categoria</option>
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
      {/* Sección para agregar participantes */}
      <FormGroup>
        <Label for="participantInput">Participantes</Label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            type="text"
            name="participantInput"
            id="participantInput"
            value={certification.participantInput}
            onChange={handleParticipantInputChange}
          />
          <Button
            color="primary"
            onClick={addParticipant}
            style={{ marginLeft: "10px" }}
          >
            Agregar Participante
          </Button>
          <Button
            color="secondary"
            onClick={toggleModal}
            style={{ marginLeft: "10px" }}
          >
            Ver Participantes
          </Button>
          <span style={{ marginLeft: "10px" }}>
            {certification.participants.length} participantes agregados
          </span>
        </div>
        {/* nota de: Una vez agregado el nombre del participante no será capaz de editar */}
        <p>
          *Una vez agregado el nombre del participante no será capaz de editar
        </p>
      </FormGroup>
      <div className="form-buttons">
        <Button type="submit" color="primary">
          Agregar Certificación
        </Button>
        <Button type="button" color="secondary" onClick={handleReset}>
          Limpiar Formulario
        </Button>
      </div>

      {/* Modal para mostrar la lista de participantes */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Lista de Participantes</ModalHeader>
        <ModalBody>
          <ul>
            {certification.participants.length > 0 ? (
              certification.participants.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))
            ) : (
              <p>No hay participantes agregados.</p>
            )}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </Form>
  );
};

// Exportamos el componente AddCertificationForm como predeterminado.
export default AddCertificationForm;
