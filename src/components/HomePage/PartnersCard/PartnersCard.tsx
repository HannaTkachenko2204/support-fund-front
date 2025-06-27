import s from './PartnersCard.module.css';
import type { PartnersCardProps } from '../PartnersCard/PartnersCardTypes';

const PartnersCard: React.FC<PartnersCardProps> = ({ partners }) => {
  return (
    <div className={s.flex}>
      {partners.map((partner, index) => (
        <a
          key={index}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className={s.partner}
        >
          <img src={partner.imgSrc} alt={partner.alt} />
        </a>
      ))}
    </div>
  );
};

export default PartnersCard;
