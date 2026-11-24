import React, { useState, useEffect } from 'react';

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

  const headerClass = `header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`;

  return (
    <>
      <header className={headerClass}>
        <a href="#" className="logo">Мега сайт</a>
        <ul className="nav">
          <li><a href="#">О нас</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Кейсы</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div className="header-right">
          <button className="btn header-btn" onClick={onOpenModal}>Связаться</button>
          <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </div>
      </header>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>О нас</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Услуги</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Кейсы</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Контакты</a>
      </div>
    </>
  );
}

export default Header;