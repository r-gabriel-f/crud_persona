import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export const ModalCrearActualizar = ({
  isOpen,
  closeModal,
  onSubmit,
  data,
}) => {
  const [formData, setFormData] = useState(
    data || { nombre: "", edad: "", telefono: "", direccion: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal">
      <h2>{data ? "Editar Elemento" : "Agregar Elemento"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="text"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Telefono:
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Direccion Domicilio:
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">{data ? "Editar" : "Agregar"}</button>
        <button type="button" onClick={closeModal}>
          Cerrar
        </button>
      </form>
    </Modal>
  );
};
