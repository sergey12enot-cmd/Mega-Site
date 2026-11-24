import React, { useState } from 'react';
import Header from './Header';

import Content from './content';
import ModalMenu from './ModalMenu';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {}
      <Header onOpenModal={openModal} />
      {}
      <ModalMenu isOpen={isModalOpen} onClose={closeModal} />
      <Content />
    </>
  );
}

export default App;