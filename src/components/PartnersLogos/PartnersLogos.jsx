import s from './PartnersLogos.module.css';

const PartnersLogos = ({ partners }) => {
  return (
    <div className={s.partnersLogos}>
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
  )
}

export default PartnersLogos