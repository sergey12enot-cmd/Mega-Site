import React, { useEffect } from 'react';
import ContactForm from './ContactForm'; 

function ModalMenu({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const overlayClass = `modal-overlay ${isOpen ? 'open' : ''}`;

  return (
    <div className={overlayClass} onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>крестек</button>
        <h2>Оставь заявку, бака</h2>
        {}
        <ContactForm />
      </div>
    </div>
  );
}

export default ModalMenu;