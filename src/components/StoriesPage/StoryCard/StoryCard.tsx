import { useState } from 'react';
import s from './StoryCard.module.css';
import type { StoryCardProps } from './StoryCardTypes';

const StoryCard = ({ name, age, photo, preview, full }: StoryCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen((prev) => !prev);
  
    return (
      <article className={s.card}>
        <div className={s.photoWrapper}>
          <img src={photo} alt={name} className={s.photo} />
        </div>
  
        <div className={s.content}>
          <div className={s.user}>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
  
          <p className={s.preview}>“{preview}”</p>
  
          <a className={s.link} onClick={toggleOpen}>
            {isOpen ? 'Приховати' : 'Читати історію'}
            <svg className={s.icon} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
              <use xlinkHref="/assets/icons/icons.svg#icon-keyboard_arrow_down" />
            </svg>
          </a>
  
          {isOpen && (
            <div
            className={s.fullText}
            style={{ maxHeight: isOpen ? '500px' : '0' }}
          >
            <p>“{full}“</p>
          </div>
          )}
        </div>
      </article>
    );
  };

  export default StoryCard