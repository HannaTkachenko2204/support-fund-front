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
          <div className={s.header_left}>
            <Logo />
          </div>
          <div className={s.header_center}>
            <Navigation />
          </div>
          <div className={s.header_right}>
            <svg className={s.svg}>
              <use xlinkHref="/assets/icons/icons.svg#icon-user-circle-o"></use>
            </svg>
            <button type="button">Підтримати фонд</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
