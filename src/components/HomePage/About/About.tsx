import Container from '../../Container/Container';
import SectionHeader from '../../SectionHeader/SectionHeader';
import AboutCard from '../AboutCard/AboutCard';
import s from './About.module.css';
import { aboutFeatures } from '../../../data/aboutFeatures';

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
          {aboutFeatures.map(({ iconId, title, description }) => (
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
