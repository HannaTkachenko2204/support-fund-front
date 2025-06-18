import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Container>
        <div className={s.header}>
            <Logo />
            <Navigation />
            <svg className={s.svg}>
              <use xlinkHref="/assets/icons/icons.svg#icon-user-circle-o"></use>
            </svg>
        </div>
      </Container>
    </header>
  );
};

export default Header;
