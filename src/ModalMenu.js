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

  const overlayClass = [
    'fixed inset-0 z-[2000] flex items-start justify-center overflow-y-auto',
    'bg-black/60 p-4 transition-opacity duration-300',
    isOpen ? 'visible opacity-100' : 'invisible opacity-0',
  ].join(' ');

  const modalClass = [
    'relative m-auto w-full min-w-[280px] max-w-[420px] rounded-xl bg-white',
    'px-4 py-5 transition-transform duration-300 sm:px-5 sm:py-6',
    isOpen ? 'translate-y-0' : 'translate-y-5',
  ].join(' ');

  return (
    <div
      className={overlayClass}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={modalClass}>
        <button
          className="absolute right-4 top-3 cursor-pointer text-sm leading-none text-[#888] hover:text-[#111]"
          onClick={onClose}
        >
          крестек
        </button>
        <h2 className="mb-4 text-lg text-[#111] sm:mb-5 sm:text-[22px]">
          Оставь заявку, бака
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default ModalMenu;
