// коли відкрито меню — при кліку поза ним воно закривається
import { useEffect, RefObject } from 'react';

type Handler = (event: MouseEvent) => void;

// Аргументи:
// ref — посилання на DOM-елемент (наприклад, меню або модалка);
// handler — функція, яка викликається при кліку поза елементом;
// when — логічне значення (чи активувати хук). За замовчуванням true.
const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  handler: Handler,
  when: boolean = true
): void => {
  useEffect(() => {
    if (!when) return; // якщо when === false, хук не активується (наприклад, меню ще не відкрите)

    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return; // ref.current.contains(event.target) перевіряє, чи клік відбувся всередині елемента
      handler(event); // якщо поза елементом — викликаємо handler() - наприклад, закриваємо меню. Якщо всередині — нічого не робимо.
    };

    document.addEventListener('mousedown', listener); // додаємо слухача кліку (mousedown), щоб відловити натискання ще до click
    return () => {
      document.removeEventListener('mousedown', listener); // видаляємо слухача при розмонтуванні або зміні залежностей — щоб не витікала памʼять
    };
  }, [ref, handler, when]);
};

export default useOutsideClick;