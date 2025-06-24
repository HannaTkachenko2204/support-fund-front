import React, { useState } from 'react';
import s from './Donation.module.css';
import Container from '../Container/Container';

const purposes = [
  'Медична реабілітація поранених',
  'Гуманітарна допомога на передовій',
  'Підтримка сімей загиблих героїв',
  'Технічне забезпечення підрозділів',
];

const amounts = ['3000 ₴', '5000 ₴', '10000 ₴', '20000 ₴'];
const frequencies = ['Разово', 'Щомісяця', 'Щокварталу'];

const Donation = () => {
  const [activeAmount, setActiveAmount] = useState(null);
  const [activeFrequency, setActiveFrequency] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [agree, setAgree] = useState(false);

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

            <section className={s.form}>
              <div className={s.formInner}>
                <h3>Зробити пожертву</h3>
                <p className={s.subtext}>Оберіть суму внеску та періодичність</p>

                <div className={s.formGroup}>
                  <label>Спосіб оплати</label>
                  <div className={s.paymentMethodStatic}>
                    <svg className={s.iconPayment}><use xlinkHref="/assets/icons/icons.svg#icon-wallet" /></svg>
                    <span>Криптовалюта через NOWPayments</span>
                  </div>
                </div>

                <div className={s.formGroup}>
                  <label htmlFor="amount">Сума пожертви</label>
                  <div className={s.amountOptions}>
                    {amounts.map((a, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`${s.amountBtn} ${activeAmount === a ? s.active : ''}`}
                        onClick={() => {
                          setActiveAmount(a);
                          setCustomAmount('');
                        }}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    id="amount"
                    placeholder="Введіть свою суму"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setActiveAmount(null);
                    }}
                  />
                </div>

                <div className={s.formGroup}>
                  <label>Періодичність</label>
                  <div className={s.frequencyOptions}>
                    {frequencies.map((f, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`${s.frequencyBtn} ${activeFrequency === f ? s.active : ''}`}
                        onClick={() => setActiveFrequency(f)}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={s.formSubmit}>
                  <button type="button" className="btn" disabled={!agree}>Підтвердити пожертву</button>
                </div>

                <div className={s.formAgreement}>
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                  <label htmlFor="agree">
                    Я погоджуюсь з
                    <a href="#" onClick={(e) => e.preventDefault()}> умовами переказу пожертви </a>
                    та
                    <a href="#" onClick={(e) => e.preventDefault()}> політикою конфіденційності</a>
                  </label>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Donation;
