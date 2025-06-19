import Container from '../Container/Container';
import HelpLink from '../HelpLink/HelpLink';
import s from './GatHelp.module.css';

const GatHelp = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.flex}>
        <h2>
          <span className={s.text}>Готові підтримати наших захисників?</span>
          <span className={s.subtext}>Кожен внесок має значення!</span>
        </h2>
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
      </Container>
    </section>
  );
};

export default GatHelp;
