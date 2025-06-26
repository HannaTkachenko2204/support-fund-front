import Container from '../../Container/Container';
import s from './DonationInfo.module.css';

const purposes = [
  'Медична та психологічна реабілітації поранених',
  'Матеріальна допомога сімʼям військовослужбовців',
  'Всебічна підтримка родичів загиблих героїв ЗСУ',
  'Освітні програми для дітей та родин захисників',
];

const DonationInfo = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.card}>
          <div className={s.flex}>
            <aside className={s.info}>
              <div>
                <h2>Підтримайте захисників України</h2>
                <p>
                  Кожна гривня вашого внеску піде на конкретні потреби військових та їхніх родин
                </p>
                <div className={s.securePayment}>
                  <div className={s.circle}>
                    <svg className={s.iconDonat}><use xlinkHref="/assets/icons/icons.svg#icon-locked" /></svg>
                  </div>
                  <span>Безпечні платежі через державні сервіси. Дані захищено.</span>
                </div>
                <h3>Куди підуть кошти:</h3>
                <ul className={s.purposeList}>
                  {purposes.map((p, i) => (
                    <li key={i}>
                      <svg className={s.iconList}><use xlinkHref="/assets/icons/icons.svg#icon-circle-down" /></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DonationInfo;
