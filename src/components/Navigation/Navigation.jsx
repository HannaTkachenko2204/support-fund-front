import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li>
          <a href="#about">Про фонд</a>
        </li>
        <li>
          <a href="#support">Допомога</a>
        </li>
        <li>
          <a href="#stories">Історії</a>
        </li>
        <li>
          <a href="#partners">Партнери</a>
        </li>
        <li>
          <a href="#contacts">Контакти</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
