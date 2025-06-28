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

  const handleSignUp = (data: SignUpFormData) => {
    console.log('Sign Up Data:', data);
    dispatch(signIn({ email: data.email, name: data.name }));
    localStorage.setItem('userName', data.name);
    alert(`Ласкаво просимо, ${data.name || 'користувачу'}!`);
    navigate('/profile');
    // викликати API /signup
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