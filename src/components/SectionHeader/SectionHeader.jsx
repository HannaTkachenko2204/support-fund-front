import s from './SectionHeader.module.css';

const SectionHeader = ({ subtitle, title, description }) => {
  return (
    <>
      <h2 className={s.subtitle}>{subtitle}</h2>
      <p className={s.title}>{title}</p>
      <p className={s.description}>{description}</p>
    </>
  );
};

export default SectionHeader;