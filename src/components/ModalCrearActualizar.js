import React, { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export const ModalCrearActualizar = ({
  isOpen,
  closeModal,
  onSubmit,
  data,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    // Cuando se recibe nuevo 'data', actualiza el formulario
    if (data) {
      setFormData(data);
    } else {
      // Si no hay 'data', reinicia el formulario
      setFormData({
        nombre: "",
        edad: "",
        telefono: "",
        direccion: "",
      });
    }
  }, [data]);

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
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 border rounded-md shadow-md"
      overlayClassName="fixed inset-0 "
    >
      <div>
        <h2 className="text-2xl mb-4">
          {data ? "Editar Elemento" : "Agregar Elemento"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Nombre Completo:
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Edad:</label>
            <input
              type="text"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Telefono:
            </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Direccion Domicilio:
            </label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
              {data ? "Editar" : "Agregar"}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
