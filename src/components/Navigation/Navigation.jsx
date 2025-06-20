import { Link } from 'react-router-dom';
import s from './Navigation.module.css';
import useScrollToTop from '../../hooks/useScrollToTop';

const Navigation = ({ onLinkClick }) => {
  const scrollToTop = useScrollToTop();

  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li>
        <Link
            to="/"
            onClick={() => {
              scrollToTop();
              onLinkClick && onLinkClick();
            }}
          >
            Головна
          </Link>
        </li>
        <li>
          <Link to="/help" onClick={onLinkClick}>
            Отримати допомогу
          </Link>
        </li>
        <li>
          <Link to="/donate" onClick={onLinkClick}>
            Задонатити
          </Link>
        </li>
        <li>
          <Link to="/stories" onClick={onLinkClick}>
            Історії допомоги
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
