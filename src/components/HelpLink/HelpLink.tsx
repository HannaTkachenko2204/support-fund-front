import { Link } from 'react-router-dom';
import s from './HelpLink.module.css';
import { HelpLinkProps } from './HelpLinkTypes';

const HelpLink : React.FC<HelpLinkProps> = ({ href, text, iconId, variant = 'light', className = '', onClick }) => {
  const baseClass = `${s.link_base} ${s['link_' + variant]} ${className}`.trim();

  const iconClass = {
    light: s.icon_dark,
    dark: s.icon_light,
    accent: s.icon_accent,
  }[variant] || '';

  return (
    <Link to={href} className={baseClass} onClick={onClick}>
      {text}
      <svg className={iconClass}>
        <use xlinkHref={`/assets/icons/icons.svg#${iconId}`} />
      </svg>
    </Link>
  );
};

export default HelpLink;
