import { FC } from 'react';
import Container from '../Container/Container';
import s from './Footer.module.css';
import type { FooterProps } from './FooterTypes';

const Footer: FC<FooterProps> = () => {
  return (
    <section className={s.footer}>
      <Container>
        <div className={s.flex}>
          <div className={s.about}>
            <h3 className={s.text}>Фонд підтримки військових</h3>
            <p className={s.subtext}>
              Офіційна державна платформа для допомоги військовослужбовцям та
              їхнім родинам у період війни
            </p>
          </div>

          <div className={s.contacts}>
            <h3 className={s.text}>Контакти</h3>
            <ul>
              <li>
                <span className={s.subtext}>
                  <svg className={s.icon}>
                    <use xlinkHref="/assets/icons/icons.svg#icon-phone"></use>
                  </svg>
                  Гаряча лінія:
                  <a href="tel:38002001234">3 800 200 12 34</a>
                </span>
              </li>
              <li>
                <span className={s.subtext}>
                  <svg className={s.icon}>
                    <use xlinkHref="/assets/icons/icons.svg#icon-envelope"></use>
                  </svg>
                  Email:
                  <a href="mailto:info.fund.zsu@gmai.com">info.fund.zsu@gmai.com</a>
                </span>
              </li>
              <li>
                <span className={s.subtext}>
                  <svg className={s.icon}>
                    <use xlinkHref="/assets/icons/icons.svg#icon-location"></use>
                  </svg>
                  Київ, вул. Хрещатик, 26
                </span>
              </li>
            </ul>
          </div>

          <div className={s.docs}>
            <h3 className={s.text}>Документи</h3>
            <ul>
              <li>
                <a className={s.subtext}>Статут фонду</a>
              </li>
              <li>
                <a className={s.subtext}>Фінансова звітність</a>
              </li>
              <li>
                <a className={s.subtext}>Політика конфіденційності</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.bottom}>
          <p>
            © 2025 Державний фонд підтримки військових. Усі права захищено
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
