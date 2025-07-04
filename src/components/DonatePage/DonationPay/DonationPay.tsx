import { useState } from 'react';
import s from './DonationPay.module.css';
import { payment, amounts, frequencies } from '../../../data/donationOptions';
import type { PaymentMethod, Amount, Frequency } from './DonationPayTypes';

const DonationPay = () => {
  const [activeAmount, setActiveAmount] = useState<Amount | null>(null);
  const [activeFrequency, setActiveFrequency] = useState<Frequency | null>(null);
  const [activePayment, setActivePayment] = useState<PaymentMethod>('Карта');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);

  return (
    <section className={s.form}>
      <div className={s.formInner}>
        <h2>Зробити пожертву</h2>
        <p>Оберіть суму внеску та періодичність</p>

        <div className={s.formGroup}>
          <label>Спосіб оплати</label>
          <div className={s.paymentOptions}>
            {payment.map((method, i) => (
              <button
                key={i}
                type="button"
                className={`${s.paymentBtn} ${activePayment === method ? s.active : ''}`}
                onClick={() => setActivePayment(method)}
              >
                {method}
              </button>
            ))}
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
          <button type="button" disabled={!agree}>
            Підтвердити пожертву
          </button>
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
            <a href="#" onClick={(e) => e.preventDefault()}>
              {' '}
              умовами переказу пожертви{' '}
            </a>
            та
            <a href="#" onClick={(e) => e.preventDefault()}>
              {' '}
              політикою конфіденційності
            </a>
          </label>
        </div>
      </div>
    </section>
  );
};

export default DonationPay;
