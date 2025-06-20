import React, { useState, useEffect } from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import s from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Logo />

          {!isMobile ? (
  <Navigation />
) : (
  <button className={s.burger} onClick={toggleMenu}>
    <svg className={s.burgerIcon}>
      <use
        xlinkHref={
          isMobileMenuOpen
            ? '/assets/icons/icons.svg#icon-cross'  // хрестик
            : '/assets/icons/icons.svg#icon-menu'   // бургер
        }
      />
    </svg>
  </button>
)}

          <svg className={s.svg}>
            <use xlinkHref="/assets/icons/icons.svg#icon-user-circle-o"></use>
          </svg>
        </div>

        {isMobile && isMobileMenuOpen && (
  <div className={s.mobileMenu}>
    <Navigation onLinkClick={toggleMenu} />
  </div>
)}

      </Container>
    </header>
  );
};

export default Header;
