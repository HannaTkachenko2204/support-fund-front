import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import FeatureCard from '../FeatureCard/FeatureCard';
import s from './About.module.css'

const About = () => {
  return (
    <Container>
      <section id="about" className={s.about_section}>
        <SectionHeader
          subtitle="Про фонд"
          title="Всеукраїнська ініціатива підтримки захисників України"
          description="Офіційна волонтерська платформа для координації допомоги військовим та їхнім родинам"
        />
        <div className={s.features}>
          <FeatureCard
            iconId="icon-flag"
            title="Місія фонду"
            description="Надання всебічної підтримки українським захисникам і членам їхніх родин через координацію волонтерських, громадських та благодійних ініціатив."
          />
          <FeatureCard
            iconId="icon-handshake-o"
            title="Напрями діяльності"
            description="Матеріальна допомога, медична реабілітація, психологічна підтримка, юридичний супровід, освітні програми для дітей та родин військовослужбовців."
          />
          <FeatureCard
            iconId="icon-star-half"
            title="Гарантії прозорості"
            description="Відкрита фінансова звітність. Кожна гривня враховується та використовується виключно на потреби захисників. Регулярні звіти публікуються для донорів і партнерів."
          />
        </div>
      </section>
    </Container>
  );
};

export default About;
