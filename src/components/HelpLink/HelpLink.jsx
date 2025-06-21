import { Link } from 'react-router-dom';
import s from './HelpLink.module.css';

const HelpLink = ({ href, text, iconId, variant = 'light', isRouterLink = false, className = '',
  onClick = () => {} }) => {
  const baseClass = `${s.link_base} ${s['link_' + variant]} ${className}`.trim();

  const getIconClass = () => {
    switch (variant) {
      case 'light':
        return s.icon_dark;
      case 'dark':
        return s.icon_light;
      case 'accent':
        return s.icon_accent;
      default:
        return '';
    }
  };

  const content = (
    <>
      {text}
      <svg className={getIconClass()}>
        <use xlinkHref={`/assets/icons/icons.svg#${iconId}`}></use>
      </svg>
    </>
  );

  return isRouterLink ? (
    <Link to={href} className={baseClass} onClick={onClick}>
      {content}
    </Link>
  ) : (
    <a href={href} className={baseClass} onClick={onClick}>
      {content}
    </a>
  );
};

export default HelpLink;
