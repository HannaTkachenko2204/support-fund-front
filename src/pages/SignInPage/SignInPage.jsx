import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../../components/Auth/SignInForm/SignInForm';
import Modal from '../../components/Modal/Modal'; // створимо компонент модального вікна
import s from './SignInPage.module.css'; // стилі

const SignInPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleSignIn = (data) => {
    console.log('Sign In Data:', data);
    // TODO: виклик API авторизації
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
    // TODO: Google OAuth redirect / popup
  };

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    console.log('Send recovery email to:', recoveryEmail);
    // TODO: виклик API на відновлення пароля
    setIsModalOpen(false);
  };

  return (
    <section className={s.section}>
    <div className={s.wrapper}>
      <h2>Увійти</h2>
      <SignInForm onSubmit={handleSignIn} />

<div className={s.flex}>
      <p>or</p>

      <button className={s.googleBtn} onClick={handleGoogleSignIn}>
        Увійти через Google
      </button>

      <p className={s.forgotText} onClick={() => setIsModalOpen(true)}>
        <span className={s.forgotLink}>Забули пароль?</span>
      </p>

      <p className={s.signupText}>
        Не маєте акаунта?{' '}
        <Link to="/signup" className={s.signupLink}>
          Зареєструватися
        </Link>
      </p>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h3>Відновлення паролю</h3>
          <form onSubmit={handleRecoverPassword}>
            <label>
              Введіть свій email:
              <input
                type="email"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Надіслати email</button>
          </form>
        </Modal>
      )}
    </div>
    </section>
  );
};

export default SignInPage;
