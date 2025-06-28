import { useState, FormEvent } from 'react';
import s from './SignUpForm.module.css';
import { SignUpFormProps } from './SignUpFormTypes';

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onSuccess }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Паролі не співпадають!');
      return;
    }

    onSubmit({ email, password, name });

    // Очищення форми:
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Виклик callback-а
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label>Ім'я:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Введіть ваше ім'я"
        />
      </div>
      <div className={s.wrapper}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Введіть вашу електронну пошту"
        />
      </div>
      <div className={s.wrapper}>
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Введіть пароль"
        />
      </div>
      <div className={s.wrapper}>
        <label>Підтвердження пароля:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Повторіть пароль"
        />
      </div>
      <div className={s.flex}>
        <button type="submit" className={s.btn}>
          Зареєструватися
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;