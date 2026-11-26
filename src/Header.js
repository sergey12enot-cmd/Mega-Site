import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['О нас', 'Услуги', 'Кейсы', 'Контакты'];

function Header({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const headerClass = [
    'fixed inset-x-0 top-0 z-[1000] flex h-[70px] items-center justify-between',
    'px-4 transition-colors duration-300 md:px-[30px]',
    isScrolled || isMenuOpen ? 'bg-black text-white' : 'bg-white text-black',
  ].join(' ');

  return (
    <>
      <header className={headerClass}>
        <button
          className="cursor-pointer text-[17px] font-bold md:text-xl"
          onClick={() => window.scrollTo(0, 0)}
        >
          Мега сайт
        </button>

        <ul className="hidden list-none gap-[25px] md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button className="cursor-pointer text-[15px]">{item}</button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button
            className="cursor-pointer rounded-[20px] bg-brand px-2.5 py-1.5 text-xs text-white sm:px-3.5 sm:py-2 sm:text-[13px] md:px-5 md:py-2.5 md:text-[15px]"
            onClick={onOpenModal}
          >
            Связаться
          </button>
          <button
            className="cursor-pointer text-[28px] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>
        </div>
      </header>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } fixed inset-x-0 top-[70px] z-[999] bg-black p-5 md:hidden`}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className="block w-full cursor-pointer py-2.5 text-left text-lg text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default Header;
