import { useEffect, useState } from "react";

export const HooksCrearActualizar = (initialData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialData || getDefaultFormData());

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      openModal();
    } else {
      closeAndResetModal();
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    onSubmit(formData);
    closeAndResetModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeAndResetModal = () => {
    setFormData(getDefaultFormData());
    closeModal();
  };

  function getDefaultFormData() {
    return {
      nombre: "",
      edad: "",
      telefono: "",
      direccion: "",
    };
  }

  return {
    isOpen,
    formData,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  };
};
