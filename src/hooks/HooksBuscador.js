import React, { useState } from 'react'

export const HooksBuscador = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const openModal = () => {
      setIsModalOpen(true);
      setSelectedItem(null);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return {
      isModalOpen,
      selectedItem,
      openModal,
      closeModal,
      setSelectedItem,
    };
}
