import React from 'react';

function MobileMenu() {
  return (
    <div className="fixed inset-x-0 top-[70px] z-[999] bg-black p-5 md:hidden">
      <a href="#" className="block py-2.5 text-lg text-white">О нас</a>
      <a href="#" className="block py-2.5 text-lg text-white">Услуги</a>
      <a href="#" className="block py-2.5 text-lg text-white">Кейсы</a>
      <a href="#" className="block py-2.5 text-lg text-white">Контакты</a>
    </div>
  );
}

export default MobileMenu;
