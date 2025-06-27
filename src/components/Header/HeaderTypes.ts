// src/components/Header/HeaderTypes.ts

// Тип функції, що викликається при кліку по лінку у Navigation (для закриття меню)
export type OnLinkClickHandler = () => void;

// Пропси Navigation (щоб типізувати пропи у Navigation)
export interface NavigationProps {
  onLinkClick?: OnLinkClickHandler;
}

// Header не має пропсів, але якщо будуть — можна додати інтерфейс
export interface HeaderProps {
  // приклад: title?: string;
}
