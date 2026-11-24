import React, { useState } from 'react';
import Header from './Header';
import MobileMenu from './mobile-menu'; // если он у тебя есть отдельно
import Content from './content';
import ModalMenu from './ModalMenu';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Передаем функцию открытия в Header */}
      <Header onOpenModal={openModal} />
      {/* Передаем состояние и функцию закрытия в ModalMenu */}
      <ModalMenu isOpen={isModalOpen} onClose={closeModal} />
      <Content />
    </>
  );
}

export default App;