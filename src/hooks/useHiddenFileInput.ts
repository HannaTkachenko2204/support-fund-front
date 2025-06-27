// для того, щоб керувати прихованим полем вибору файлів (<input type="file" />)
import { useRef } from 'react';

const useHiddenFileInput = () => {
// посилання на прихований <input type="file" />
  const fileInputRef = useRef<HTMLInputElement | null>(null); // ref, який буде прикріплений до поля вибору файлу. Через нього ми можемо викликати .click() програмно

  const openFileDialog = (e: React.MouseEvent | React.KeyboardEvent) => { // відкриває діалог вибору файлу. Коли користувач клікає на кнопку (або інший елемент), викликається ця функція. Вона імітує клік по прихованому input[type="file"], тому відкривається діалог вибору файлів
    e.preventDefault();
    fileInputRef.current?.click();
  };

// підтримка клавіатури (доступність) Enter або Space
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openFileDialog(e);
    }
  };

// fileInputRef — додаєш до input[type="file"]
// openFileDialog — навішуєш на кнопку onClick 
// onKeyDown — навішуєш на ту ж кнопку або кастомний елемент для підтримки клавіатури
  return { fileInputRef, openFileDialog, onKeyDown };
};

export default useHiddenFileInput;