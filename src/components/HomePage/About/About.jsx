import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import AboutCard from '../AboutCard/AboutCard';
import s from './About.module.css';

const features = [
  {
    iconId: 'icon-flag',
    title: 'Місія фонду',
    description:
      'Надання всебічної підтримки українським захисникам і членам їхніх родин через координацію волонтерських, громадських та благодійних ініціатив.',
  },
  {
    iconId: 'icon-handshake-o',
    title: 'Напрями діяльності',
    description:
      'Матеріальна допомога, медична реабілітація, психологічна підтримка, юридичний супровід, освітні програми для дітей та родин військовослужбовців.',
  },
  {
    iconId: 'icon-star-half',
    title: 'Гарантії прозорості',
    description:
      'Відкрита фінансова звітність. Кожна гривня враховується та використовується виключно на потреби захисників. Регулярні звіти публікуються для донорів і партнерів.',
  },
];

const About = () => {
  return (
    <Container>
      <section id="about" className={s.section}>
        <SectionHeader
          subtitle="Про фонд"
          title="Всеукраїнська ініціатива підтримки захисників України"
          description="Офіційна волонтерська платформа для координації допомоги військовим та їхнім родинам"
        />
        <div className={s.features}>
          {features.map(({ iconId, title, description }) => (
            <AboutCard
              key={iconId}
              iconId={iconId}
              title={title}
              description={description}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default About;
