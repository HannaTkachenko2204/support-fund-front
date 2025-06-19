import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import AboutCard from '../AboutCard/AboutCard';
import s from './About.module.css';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // трішки зачекати, щоб DOM встиг змонтуватись
      }
    }
  }, [location]);

  return (
    <Container>
      <section id="about" className={s.section}>
        <SectionHeader
          subtitle="Про фонд"
          title="Всеукраїнська ініціатива підтримки захисників України"
          description="Офіційна волонтерська платформа для координації допомоги військовим та їхнім родинам"
        />
        <div className={s.features}>
          <AboutCard
            iconId="icon-flag"
            title="Місія фонду"
            description="Надання всебічної підтримки українським захисникам і членам їхніх родин через координацію волонтерських, громадських та благодійних ініціатив."
          />
          <AboutCard
            iconId="icon-handshake-o"
            title="Напрями діяльності"
            description="Матеріальна допомога, медична реабілітація, психологічна підтримка, юридичний супровід, освітні програми для дітей та родин військовослужбовців."
          />
          <AboutCard
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
