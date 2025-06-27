import Container from "../../Container/Container"
import PartnersCard from '../PartnersCard/PartnersCard';
import SectionHeader from "../../SectionHeader/SectionHeader"
import s from './Partners.module.css';
import { partners } from '../../../data/partnersData';

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