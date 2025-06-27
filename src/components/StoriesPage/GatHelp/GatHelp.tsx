import { FC } from 'react';
import useScrollToTop from '../../../hooks/useScrollToTop';
import Container from '../../Container/Container';
import HelpLink from '../../HelpLink/HelpLink';
import s from './GatHelp.module.css';
import type { GatHelpProps } from './GatHelpTypes';

const GatHelp: FC<GatHelpProps> = ({ onLinkClick }) => {
  const scrollToTop = useScrollToTop();

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
            href="/donate"
            text="Зробити внесок?"
            iconId="icon-heart1"
            variant="dark"
            onClick={() => {
              scrollToTop(); 
              onLinkClick?.();
            }}
          />
          <HelpLink
            href="/help"
            text="Потрібна допомога?"
            iconId="icon-heart-broken"
            variant="light"
            onClick={() => {
              scrollToTop(); 
              onLinkClick?.();
            }}
          />
        </div>
        </div>
      </Container>
    </section>
  );
};

export default GatHelp;
