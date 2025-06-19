import Container from "../Container/Container"
import PartnersCard from '../PartnersCard/PartnersCard';
import SectionHeader from "../SectionHeader/SectionHeader"
import s from './Partners.module.css'

const partners = [
    {
      href: 'https://mod.gov.ua/',
      imgSrc: '/assets/partners/mod.png',
      alt: 'Міністерство оборони України',
    },
    {
      href: 'https://dsns.gov.ua/',
      imgSrc: '/assets/partners/dsns.jpg',
      alt: 'ДСНС України',
    },
    {
      href: 'https://moz.gov.ua/uk',
      imgSrc: '/assets/partners/moz.png',
      alt: 'МОЗ України',
    },
    {
        href: 'https://redcross.org.ua/',
        imgSrc: '/assets/partners/redcross.png',
        alt: 'Червоний крест України',
      },
    {
      href: 'https://caritas.ua/',
      imgSrc: '/assets/partners/caritas.jpg',
      alt: 'Карітас України',
    },
    {
      href: 'https://novaukraine.org/',
      imgSrc: '/assets/partners/novaukraine.jpg',
      alt: 'Nova Ukraine',
    },
  ];

const Partners = () => {
  return (
    <Container>
      <section className={s.partners_section}>
        <SectionHeader
          subtitle="Наші партнери"
          title="Державні, суспільні та міжнародні організації, з якими ми співпрацюємо або координуємось"
          description="Спільна робота для максимально ефективної допомоги"
        />
        <PartnersCard partners={partners} />
      </section>
    </Container>
  );
}

export default Partners