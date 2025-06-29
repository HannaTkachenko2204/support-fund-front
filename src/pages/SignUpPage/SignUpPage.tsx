import { FC } from 'react';
import SignUpForm from '../../components/Auth/SignUpForm/SignUpForm';
import Container from '../../components/Container/Container';
import useScrollToTop from '../../hooks/useScrollToTop';
import { Link, useNavigate } from 'react-router-dom';
import s from './SignUpPage.module.css';
import { SignUpFormData, SignUpPageProps } from './SignUpPageTypes';
import { useAppDispatch } from '../../redux/hooks';
import { signIn } from '../../redux/slices/userSlice';

const SignUpPage: FC<SignUpPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (data: SignUpFormData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        alert(result.message || 'Помилка при реєстрації');
        return;
      }
  
      // Якщо успішно:
      console.log('Registered:', result);
      const { user, accessToken } = result;
  
      dispatch(signIn({ email: user.email, name: user.name, token: accessToken }));
      alert(`Ласкаво просимо, ${user.name || 'користувачу'}!`);
      navigate('/profile');
    } catch (error) {
      alert('Сталася помилка під час запиту на сервер');
      console.error(error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
    // TODO: Google OAuth redirect / popup
  };

  const scrollToTop = useScrollToTop();

  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <h2>Реєстрація</h2>
          <SignUpForm onSubmit={handleSignUp} />
          <div className={s.flex}>
            <p className={s.text}>або</p>
            <button className={s.googleBtn} onClick={handleGoogleSignIn}>
              Авторизуватися за допомого Google
            </button>
            <p className={s.signupText}>
              Вже маєте обліковий запис?{' '}
              <Link
                to="/signin"
                className={s.signupLink}
                onClick={() => {
                  scrollToTop();
                }}
              >
                Увійти
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUpPage;