import s from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <a href="#" className={s.logo}>
        <svg className={s.svg}>
          <use xlinkHref="/assets/icons/icons.svg#icon-shield"></use>
        </svg>
        ФОНД ЗСУ
      </a>
    </>
  );
};

export default Logo;
