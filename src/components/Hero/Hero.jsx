import Container from '../Container/Container';
import Counter from '../Counter/Counter';
import HelpLink from '../HelpLink/HelpLink';

import s from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={s.section}>
        <Container>
          <div className={s.hero}>
            <div>
              <h1 className={s.title}>Підтримка героїв України</h1>
              <p className={s.text}>
                Волонтерська платформа допомоги українським захисникам та їхнім
                родинам
              </p>
              <div className={s.links}>  
                <HelpLink
                  href="#get-help"
                  text="Зробити внесок?"
                  iconId="icon-heart1"
                  variant="dark"
                />
                <HelpLink
                  href="#donate"
                  text="Потрібна допомога?"
                  iconId="icon-heart-broken"
                  variant="light"
                />
              </div>
            </div>
            <Counter />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
