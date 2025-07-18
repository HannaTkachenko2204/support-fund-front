import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { signOut } from '../../redux/slices/userSlice';
import Container from '../../components/Container/Container';
import s from './ProfilePage.module.css';
import { ProfilePageProps } from './ProfilePageTypes';
import { fetchWithRefresh } from '../../utils/api';

const ProfilePage: FC<ProfilePageProps> = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const { email, name } = useAppSelector((state) => state.user);

    const handleLogout = async () => {
      try {
        await fetchWithRefresh('/auth/logout', {
          method: 'POST',
        });
        dispatch(signOut());
        navigate('/signin');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };
  
    return (
      <section className={s.section}>
        <Container>
          <div className={s.wrapper}>
            <h2>Особистий кабінет</h2>
            <p><strong>Імʼя:</strong> {name || 'Невідомо'}</p>
            <p><strong>Email:</strong> {email || 'Невідомо'}</p>
            <div className={s.flex}>
            <button onClick={handleLogout} className={s.btn}>Вийти</button>
            </div>
          </div>
        </Container>
      </section>
    );
  };
  
  export default ProfilePage;