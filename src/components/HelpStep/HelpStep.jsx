import Container from '../Container/Container';
import s from './HelpStep.module.css';

const steps = [
  {
    number: 1,
    title: 'Подача заявки',
    text: 'Ознайомтеся з програмами підтримки нижче на сторінці та заповніть форму або зверніться до відділення фонду з документами, що підтверджують ваш статус',
  },
  {
    number: 2,
    title: 'Перевірка даних',
    text: 'Наші фахівці перевірять інформацію через бази даних Міністерства оборони протягом трьох робочих днів',
  },
  {
    number: 3,
    title: 'Отримання допомоги',
    text: 'Після підтвердження статусу ви отримаєте індивідуальний план підтримки та доступ до всіх програм фонду',
  },
];

const HelpStep = () => {
  return (
    <section className={s.section}>
    <Container>
        <h2 className={s.title}>Як отримати допомогу</h2>
        <p className={s.description}>
          Проста та зрозуміла процедура оформлення заявки на підтримку
        </p>

        <div className={s.steps}>
          {steps.map(({ number, title, text }) => (
            <article className={s.step} key={number}>
              <div className={s.number}>{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        {/* <div className={s.flex}>
          <button type="button" className={s.btn}>
            Оформити заявку на допомогу
          </button>
        </div> */}
    </Container>
    </section>
  );
};

export default HelpStep;
