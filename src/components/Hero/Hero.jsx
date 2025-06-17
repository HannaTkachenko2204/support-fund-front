import Container from '../Container/Container';
import Counter from '../Counter/Counter';
import HelpLinks from '../HelpLinks/HelpLinks';

import s from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={s.hero_section}>
        <Container>
          <div className={s.flex}>
            <div>
              <h1 className={s.title}>Підтримка героїв України</h1>
              <p className={s.text}>
                Волонтерська платформа допомоги українським захисникам та їхнім
                родинам
              </p>
              <HelpLinks />
            </div>
            <Counter />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
