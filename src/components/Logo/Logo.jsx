import { Link } from 'react-router-dom';
import s from './Logo.module.css';
import useScrollToTop from '../../hooks/useScrollToTop';

const Logo = () => {
  const scrollToTop = useScrollToTop();

  return (
    <Link to="/" onClick={scrollToTop} className={s.logo}>
      <svg className={s.svg}>
        <use xlinkHref="/assets/icons/icons.svg#icon-shield"></use>
      </svg>
      <h2>ФОНД ЗСУ</h2>
    </Link>
  );
};

export default Logo;
