import s from './Counter.module.css';

const Counter = () => {
  return (
    <>
      <div className={s.info_text}>
        <div className={s.icon_circ}>
          <svg className={s.icon}>
            <use href="/assets/icons/icons.svg#icon-medal"></use>
          </svg>
        </div>
        <div>
          <p>Зібрано коштів</p>
          <p>215.6 тисяч грн</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
