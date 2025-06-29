import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { signOut } from '../../redux/slices/userSlice';
import Container from '../../components/Container/Container';
import s from './ProfilePage.module.css';
import { ProfilePageProps } from './ProfilePageTypes';

const ProfilePage: FC<ProfilePageProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const { email } = useAppSelector(state => state.user);
    const name = localStorage.getItem('userName');

    const handleLogout = () => {
      dispatch(signOut());
      localStorage.removeItem('userName');
      localStorage.removeItem('token');
      navigate('/signin');
    };
  
    return (
      <section className={s.section}>
        <Container>
          <div className={s.wrapper}>
            <h2>Особистий кабінет</h2>
            <p><strong>Імʼя:</strong> {name || 'Невідомо'}</p>
            <p><strong>Email:</strong> {email || 'Невідомо'}</p>
            <button onClick={handleLogout} className={s.btn}>Вийти</button>
          </div>
        </Container>
      </section>
    );
  };
  
  export default ProfilePage;