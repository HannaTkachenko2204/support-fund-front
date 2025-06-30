import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignInForm from '../../components/Auth/SignInForm/SignInForm';
import Modal from '../../components/Modal/Modal'; // створимо компонент модального вікна
import Container from '../../components/Container/Container';
import useScrollToTop from '../../hooks/useScrollToTop';
import s from './SignInPage.module.css';
import { SignInFormData, SignInPageProps } from './SignInPageTypes';
import { useAppDispatch } from '../../redux/hooks';
import { signIn } from '../../redux/slices/userSlice';
import { useAppSelector } from '../../redux/hooks';
import { fetchBase } from '../../utils/api';

const SignInPage: FC<SignInPageProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const name = useAppSelector(state => state.user.name);

  const handleSignIn = async (data: SignInFormData) => {
    try {
      const response = await fetchBase('/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Помилка при логіні');
        return;
      }
  
      const result = await response.json();
      const { user, accessToken } = result;
  
      dispatch(signIn({ email: user.email, name: user.name, token: accessToken }));
  
      alert(`Ласкаво просимо, ${result.user.name}!`);
      navigate('/profile');
    } catch (error) {
      alert('Помилка мережі, спробуйте пізніше');
      console.error('Login error:', error);
    }
  };  

  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
    // TODO: Google OAuth redirect / popup
  };

  const handleRecoverPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Send recovery email to:', recoveryEmail);
    alert(`Пароль надіслано!`);
    // TODO: виклик API на відновлення пароля
    setIsModalOpen(false);
  };

  const scrollToTop = useScrollToTop();

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h2>Увійти</h2>
          <SignInForm onSubmit={handleSignIn} />

          <div className={s.flex}>
            <p className={s.text}>або</p>

            <button className={s.googleBtn} onClick={handleGoogleSignIn}>
              Авторизуватися за допомого Google
            </button>

            <p className={s.forgotText} onClick={() => setIsModalOpen(true)}>
              <span className={s.forgotLink}>Забули пароль?</span>
            </p>

            <p className={s.signupText}>
              Не маєте акаунта?{' '}
              <Link
                to="/signup"
                className={s.signupLink}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Зареєструватися
              </Link>
            </p>
          </div>

          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              <h2>Відновлення паролю</h2>
              <form onSubmit={handleRecoverPassword} className={s.wrapper}>
                <label>Введіть свій email:</label>
                  <input
                    type="email"
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    required
                    placeholder='Введіть вашу електронну пошту'
                  />
                <div className={s.flex}>
                <button type="submit" className={s.btn}>Надіслати email</button>
                </div>
              </form>
            </Modal>
          )}
        </div>
      </Container>
    </section>
  );
};

export default SignInPage;
