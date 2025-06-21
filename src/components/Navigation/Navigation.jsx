import { Link } from 'react-router-dom';
import s from './Navigation.module.css';
import useScrollToTop from '../../hooks/useScrollToTop';
import HelpLink from '../HelpLink/HelpLink';

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
          <Link to="/help" onClick={() => {
              scrollToTop();
              onLinkClick && onLinkClick();
            }}>
            Отримати допомогу
          </Link>
        </li>
        <li>
          <HelpLink
            href="/donate"
            text="Задонатити"
            iconId="icon-heart1"
            variant="accent"
            isRouterLink={true}
            className={s.router_link}
            onClick={() => {
              scrollToTop(); 
              onLinkClick?.();
            }}
          />
        </li>
        <li>
          <Link to="/stories" onClick={() => {
              scrollToTop();
              onLinkClick && onLinkClick();
            }}>
            Історії допомоги
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
