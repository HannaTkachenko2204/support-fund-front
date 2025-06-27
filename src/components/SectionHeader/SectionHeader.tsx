import s from './SectionHeader.module.css';
import { SectionHeaderProps } from './SectionHeaderTypes';

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description }) => {
  return (
    <>
      <h2 className={s.subtitle}>{subtitle}</h2>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
    </>
  );
};

export default SectionHeader;