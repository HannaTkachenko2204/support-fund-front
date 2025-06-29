import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import useOutsideClick from '../../hooks/useOutsideClick';
import useIsMobile from '../../hooks/useIsMobile';
import s from './Header.module.css';
import useScrollToTop from '../../hooks/useScrollToTop';
import { HeaderProps } from './HeaderTypes';
import { useAppSelector } from '../../redux/hooks';

const Header: React.FC<HeaderProps> = () => {
  const isMobile = useIsMobile(900); // повертає true, якщо ширина вікна ≤ 900px
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // зберігає, чи відкрито мобільне меню
  
  const menuRef = useRef<HTMLDivElement>(null); // коли відкрито меню — при кліку поза ним воно закривається
  useOutsideClick(menuRef, () => setIsMobileMenuOpen(false), isMobileMenuOpen);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // тоглиться відкрито/закрито мобільне меню
  };

  const scrollToTop = useScrollToTop();

  const userName =
    useAppSelector((state) => state.user.name);
  const isLoggedIn = !!userName;

  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Logo />
          {/* при десктопі Navigation, при мобільному - кнопка-бургер */}
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
            {isLoggedIn ? (
              <Link
                to="/profile"
                onClick={scrollToTop}
              >
                <div className={s.avatar}>
                  {userName?.charAt(0).toUpperCase()}
                </div>
              </Link>
            ) : (
              <Link to="/signin" onClick={scrollToTop}>
                <svg className={s.svg}>
                  <use xlinkHref="/assets/icons/icons.svg#icon-user-circle-o" />
                </svg>
              </Link>
            )}
          </div>
        </div>
        {/* мобільне меню (умовне рендерення) */}
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
