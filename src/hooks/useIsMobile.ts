// визначає, чи пристрій є мобільним
// (чи ширина вікна перегляду менша або рівна заданому порогу - 900px)
import { useState, useEffect } from 'react';

const useIsMobile = (maxWidth = 900): boolean => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= maxWidth); // ініціалізатор на першому рендері. Визначає, чи поточна ширина вікна <= maxWidth

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };
    handleResize(); // ! на випадок, якщо ширина вже змінилась! викликається одразу, щоб переконатися, що значення актуальне навіть при першому рендері
    window.addEventListener('resize', handleResize); // реєструється обробник події resize, який оновлює isMobile, коли змінюється розмір вікна
    return () => window.removeEventListener('resize', handleResize); // при розмонтуванні компонента слухач видаляється (cleanup)
  }, [maxWidth]);

  return isMobile; // повертає: true — якщо вікно маленьке (мобільне), false — якщо вікно широке (десктоп)
};

export default useIsMobile;