import { FC } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../../hooks/useScrollToTop';
import s from './Logo.module.css';
import type { LogoProps } from './LogoTypes';

const Logo: FC<LogoProps> = () => {
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
