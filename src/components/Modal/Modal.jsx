import Container from '../Container/Container';
import s from './Modal.module.css';

const Modal = ({ onClose, children }) => {
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

export default Modal;