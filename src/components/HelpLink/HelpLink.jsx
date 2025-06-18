import s from './HelpLink.module.css';

const HelpLink = ({ href, text, iconId, variant = 'light' }) => {
  const isLight = variant === 'light';

  return (
    <a
      href={href}
      className={s.link_base + ' ' + (isLight ? s.link_light : s.link_dark)}
    >
      {text}
      <svg className={isLight ? s.icon_dark : s.icon_light}>
        <use xlinkHref={`/assets/icons/icons.svg#${iconId}`}></use>
      </svg>
    </a>
  );
};

export default HelpLink;