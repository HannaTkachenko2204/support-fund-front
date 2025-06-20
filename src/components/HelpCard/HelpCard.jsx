import React, { useState } from 'react';
import s from './HelpCard.module.css';

const HelpCard = ({ icon, title, summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <div className={s.list}>
    <article className={s.item}>
      <div className={s.wrapper}>
        <svg className={s.icon}>
          <use xlinkHref={`/assets/icons/icons.svg#${icon}`} />
        </svg>
      </div>

      <div className={s.content}>
        <h4>{title}</h4>
        <p>{summary}</p>
        <a className={s.link} onClick={toggleDetails}>
          Детальніше
          <svg
            className={s.arrow}
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            }}
          >
            <use xlinkHref="/assets/icons/icons.svg#icon-keyboard_arrow_down" />
          </svg>
        </a>
        <div
          className={s.toggleContent}
          style={{
            maxHeight: isOpen ? '500px' : '0',
          }}
        >
          <p>{details}</p>
        </div>
      </div>
    </article>
    </div>
  );
};

export default HelpCard;
