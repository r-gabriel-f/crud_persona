import { useState } from "react";

export const HooksMostrarDatos = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    openModal();
  };

  return {
    selectedItem,
    isModalOpen,
    openModal,
    closeModal,
    handleEdit,
  };
};
