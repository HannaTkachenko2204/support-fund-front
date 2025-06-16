import s from './HelpLinks.module.css';

const HelpLinks = () => {
  return (
    <div className={s.hero_links}>
      <a href="#donate" className={s.link_light}>
        Зробити внесок?
        <svg className={s.icon_dark}>
          <use xlinkHref="/assets/icons/icons.svg#icon-heart1"></use>
        </svg>
      </a>
      <a href="#get-help" className={s.link_dark}>
        Потрібна допомога?
        <svg className={s.icon_light}>
          <use xlinkHref="/assets/icons/icons.svg#icon-heart-broken"></use>
        </svg>
      </a>
    </div>
  );
};

export default HelpLinks;
