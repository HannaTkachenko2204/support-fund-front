import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StoriesPage from '../../pages/StoriesPage/StoriesPage';
import DonatePage from '../../pages/DonatePage/DonatePage';
import HelpPage from '../../pages/HelpPage/HelpPage';
import HomePage from '../../pages/HomePage/HomePage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
