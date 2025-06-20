import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li>
        <Link to="/">Головна</Link>
        </li>
        <li>
        <Link to="/help">Отримати допомогу</Link>
        </li>
        <li>
        <Link to="/donate">Задонатити</Link>
        </li>
        <li>
        <Link to="/stories">Історії допомоги</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
