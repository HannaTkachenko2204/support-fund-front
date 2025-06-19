import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import s from './Navigation.module.css';

const Navigation = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = useCallback(
    (e) => {
      e.preventDefault();
      if (location.pathname === '/') {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/#about'); // переходимо на головну з хешем
      }
    },
    [location, navigate]
  );

  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        <li>
        <a href="#about" onClick={handleAboutClick}>Про фонд</a>
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
