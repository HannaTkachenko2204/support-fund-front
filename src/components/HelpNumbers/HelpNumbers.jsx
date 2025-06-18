import Container from '../Container/Container';
import s from './HelpNumbers.module.css';

const statsData = [
    { iconId: 'icon-wallet', value: '2.1 млн грн', label: 'гривень зібрано' },
    { iconId: 'icon-group', value: '12 458', label: 'сімей отримали допомогу' },
    { iconId: 'icon-heartbeat', value: '3 742', label: 'реабілітаційних курсів' },
    { iconId: 'icon-graduation-cap', value: '2 156', label: 'освітніх грантів' },
  ];

const HelpNumbers = () => {
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>Наша допомога в цифрах</h2>
        <p className={s.description}>Реальні результати роботи фонду з моменту заснування</p>
        <div className={s.flex}>
          {statsData.map(({ iconId, value, label }) => (
            <article key={iconId} className={s.item}>
              <div className={s.statIcon}>
                <svg className={s.icon}>
                  <use xlinkHref={`/assets/icons/icons.svg#${iconId}`} />
                </svg>
              </div>
              <p className={`${s.value}`}>{value}</p>
              <p className={s.label}>{label}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HelpNumbers;
