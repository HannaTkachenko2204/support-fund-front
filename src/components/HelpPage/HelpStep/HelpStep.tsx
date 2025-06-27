import Container from '../../Container/Container';
import s from './HelpStep.module.css';
import { helpSteps } from '../../../data/helpSteps';

const HelpStep = () => {
  return (
    <section className={s.section}>
    <Container>
        <h2 className={s.title}>Як отримати допомогу</h2>
        <p className={s.description}>
          Проста та зрозуміла процедура оформлення заявки на підтримку
        </p>

        <div className={s.steps}>
          {helpSteps.map(({ number, title, text }) => (
            <article className={s.step} key={number}>
              <div className={s.number}>{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
    </Container>
    </section>
  );
};

export default HelpStep;
