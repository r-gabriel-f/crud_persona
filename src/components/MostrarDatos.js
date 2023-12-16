import React, { useState } from "react";
import { ModalCrearActualizar } from "./ModalCrearActualizar";
import { DataUser } from "../data/DataUser";

export const MostrarDatos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    // Implementa lógica para abrir el modal con los datos del elemento seleccionado
    openModal();
  };

  const handleDelete = (item) => {
    // Implementa lógica para eliminar el elemento
    console.log("Eliminar", item);
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nombre Completo
            </th>
            <th scope="col" class="px-6 py-3">
              Edad
            </th>
            <th scope="col" class="px-6 py-3">
              Telefono
            </th>
            <th scope="col" class="px-6 py-3">
              Direccion Domicilio
            </th>
            <th scope="col" class="px-6 py-3">
              Accion
            </th>
          </tr>
        </thead>
        <tbody>
          {DataUser.map((user, i) => (
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.nombre}
              </th>
              <td class="px-6 py-4">{user.edad}</td>
              <td class="px-6 py-4">{user.telefono}</td>
              <td class="px-6 py-4">{user.direccion}</td>
              <td class="px-6 py-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => handleEdit(user)}
                    >
                      Editar
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Eliminar
                    </a>
                  </div>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalCrearActualizar
        isOpen={!!selectedItem}
        closeModal={() => setSelectedItem(null)}
        onSubmit={(newItem) => {
          console.log(newItem);
          setSelectedItem(null);
        }}
        data={selectedItem}
      />
    </div>
  );
};
