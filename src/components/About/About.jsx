import Container from '../Container/Container';
import s from './About.module.css'

const About = () => {
  return (
    <Container>
      <section id="about" className={s.about_section}>
        <h2 className={s.subtitle}>Про фонд</h2>
        <p className={s.title}>
          Всеукраїнська ініціатива підтримки захисників України
        </p>
        <p className={s.description}>
          Офіційна волонтерська платформа для координації допомоги військовим та
          їхнім родинам
        </p>

        <div className={s.features}>
          <article className={s.feature}>
            <div className={s.icon_wrapper}>
              <svg className={s.icon}>
                <use xlinkHref="/assets/icons/icons.svg#icon-flag"></use>
              </svg>
            </div>
            <h3 className={s.feature_title}>Місія фонду</h3>
            <p className={s.feature_description}>
              Надання всебічної підтримки українським захисникам і членам їхніх
              родин через координацію волонтерських, громадських та благодійних
              ініціатив.
            </p>
          </article>

          <article className={s.feature}>
            <div className={s.icon_wrapper}>
              <svg className={s.icon}>
                <use xlinkHref="/assets/icons/icons.svg#icon-handshake-o"></use>
              </svg>
            </div>
            <h3 className={s.feature_title}>Напрями діяльності</h3>
            <p className={s.feature_description}>
              Матеріальна допомога, медична реабілітація, психологічна
              підтримка, юридичний супровід, освітні програми для дітей та родин
              військовослужбовців.
            </p>
          </article>

          <article className={s.feature}>
            <div className={s.icon_wrapper}>
              <svg className={s.icon}>
                <use xlinkHref="/assets/icons/icons.svg#icon-star-half"></use>
              </svg>
            </div>
            <h3 className={s.feature_title}>Гарантії прозорості</h3>
            <p className={s.feature_description}>
              Відкрита фінансова звітність. Кожна гривня враховується та
              використовується виключно на потреби захисників. Регулярні звіти
              публікуються для донорів і партнерів.
            </p>
          </article>
        </div>
      </section>
    </Container>
  );
};

export default About;
