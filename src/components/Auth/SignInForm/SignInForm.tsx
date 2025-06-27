// import { useState } from 'react';
// import s from './SignInForm.module.css'
import { useState, FormEvent } from 'react';
import s from './SignInForm.module.css';
import { SignInFormProps } from './SignInFormTypes';

// const SignInForm = ({ onSubmit }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit({ email, password });
//   };
const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder='Введіть вашу електронну пошту'
        />
      </div>
      <div className={s.wrapper}>
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          placeholder='Введіть ваш пароль'
        />
      </div>
      <div className={s.flex}>
      <button type="submit" className={s.btn}>Увійти</button>
      </div>
    </form>
  );
};

export default SignInForm;