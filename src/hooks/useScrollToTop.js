// кастомна функція, яка повертає функцію для плавного прокручування сторінки на самий верх
import { useCallback } from 'react';

const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ // браузерна команда
      top: 0,
      behavior: 'smooth', // прокрутка буде плавною, а не миттєвою
    });
  }, []); // порожній масив залежностей гарантує, що ця функція буде створена лише один раз і не змінюватиметься між рендерами

  return scrollToTop;
};

export default useScrollToTop;