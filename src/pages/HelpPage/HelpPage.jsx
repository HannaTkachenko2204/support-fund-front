import Container from '../../components/Container/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import s from './HelpPage.module.css';

const HelpPage = () => {
  return (
    <section className={s.section}>
    <Container>
        <SectionHeader
          subtitle="Як ми допомагаємо"
          title="Форми підтримки учасників бойових дій"
          description="Комплексні програми допомоги за всіма критично важливими напрямками"
        />
    </Container>
    </section>
  );
};

export default HelpPage;
