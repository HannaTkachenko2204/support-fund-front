import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './ResetPasswordPage.module.css';
import { ResetPasswordPageProps } from './ResetPasswordPageTypes';
import { fetchBase } from '../../utils/api';
import Container from '../../components/Container/Container';

const ResetPasswordPage: FC<ResetPasswordPageProps> = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const token = query.get('token') || '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!token) {
      alert('Відсутній токен для відновлення паролю.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Паролі не співпадають.');
      return;
    }
    try {
      const response = await fetchBase('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ token, newPassword: password }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || 'Помилка при оновленні паролю.');
      } else {
        alert('Пароль успішно оновлено! Перенаправлення...');
        setTimeout(() => navigate('/signin'), 3000);
      }
    } catch {
      alert('Помилка мережі, спробуйте пізніше.');
    }
  };

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h2>Відновлення паролю</h2>
          <form className={s.form} onSubmit={handleSubmit}>
            <label htmlFor="password">Новий пароль</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введіть новий пароль"
              required
            />

            <label htmlFor="confirmPassword">Підтвердіть пароль</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Повторіть новий пароль"
              required
            />
            <div className={s.flex}>
              <button type="submit" className={s.btn}>
                Оновити пароль
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ResetPasswordPage;
