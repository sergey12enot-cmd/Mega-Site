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
       <button className="logo" onClick={() => window.scrollTo(0, 0)}>Мега сайт</button>
<ul className="nav">
  <li><button className="nav-link">О нас</button></li>
  <li><button className="nav-link">Услуги</button></li>
  <li><button className="nav-link">Кейсы</button></li>
  <li><button className="nav-link">Контакты</button></li>
</ul>
        <div className="header-right">
          <button className="btn header-btn" onClick={onOpenModal}>Связаться</button>
          <button className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </div>
      </header>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
  <button className="mobile-link" onClick={() => setIsMenuOpen(false)}>О нас</button>
  <button className="mobile-link" onClick={() => setIsMenuOpen(false)}>Услуги</button>
  <button className="mobile-link" onClick={() => setIsMenuOpen(false)}>Кейсы</button>
  <button className="mobile-link" onClick={() => setIsMenuOpen(false)}>Контакты</button>
</div>
    </>
  );
}

export default Header;