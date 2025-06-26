import { useEffect } from 'react';
import Container from '../Container/Container';
import s from './Modal.module.css';

const Modal = ({ onClose, children }) => {
    useEffect(() => {
        // Блокуємо скрол під модалкою
        document.body.style.overflow = 'hidden';
    
        // Повертаємо скрол, коли модалка закривається
        return () => {
          document.body.style.overflow = '';
        };
      }, []);

  return (
    <Container>
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
    </Container>
  );
};

export default Modal