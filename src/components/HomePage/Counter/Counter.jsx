import s from './Counter.module.css';

const Counter = () => {
  return (
    <>
      <div className={s.pos}>
        <div className={s.icon_circ}>
          <svg className={s.icon}>
            <use href="/assets/icons/icons.svg#icon-medal"></use>
          </svg>
        </div>
        <div>
          <p className={s.label}>Зібрано коштів</p>
          <p className={s.count}>2.1 млн гривень</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
