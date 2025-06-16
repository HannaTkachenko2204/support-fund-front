import Container from '../Container/Container';
import Counter from '../Counter/Counter';
import HelpLinks from '../HelpLinks/HelpLinks';

import s from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={s.hero_section}>
        <Container>
          {/* <div className={}> */}
          <h1>Підтримка героїв України</h1>
          <p>
            Волонтерська платформа допомоги українським захисникам та їхнім
            родинам
          </p>
          <HelpLinks />
          <Counter />
          {/* </div> */}
        </Container>
      </section>
    </>
  );
};

export default Hero;
