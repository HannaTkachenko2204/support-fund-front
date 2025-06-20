import React, { useState, useRef } from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import useOutsideClick from '../../hooks/useOutsideClick';
import useIsMobile from '../../hooks/useIsMobile';

import s from './Header.module.css';

const Header = () => {
  const isMobile = useIsMobile(900);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => setIsMobileMenuOpen(false), isMobileMenuOpen);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Logo />
          {!isMobile && <Navigation />}
          <div className={s.actions}>
            {isMobile && (
              <button
                className={s.burger}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
              >
                <svg className={s.burgerIcon}>
                  <use
                    xlinkHref={
                      isMobileMenuOpen
                        ? '/assets/icons/icons.svg#icon-menu4'
                        : '/assets/icons/icons.svg#icon-menu3'
                    }
                  />
                </svg>
              </button>
            )}
            <svg className={s.svg}>
              <use xlinkHref="/assets/icons/icons.svg#icon-user-circle-o"></use>
            </svg>
          </div>
        </div>
        {isMobile && isMobileMenuOpen && (
          <div className={s.mobileMenu} ref={menuRef}>
            <Navigation onLinkClick={toggleMenu} />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
