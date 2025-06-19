import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StoriesPage from '../../pages/StoriesPage/StoriesPage';
import DonatePage from '../../pages/DonatePage/DonatePage';
import HelpPage from '../../pages/HelpPage/HelpPage';
import HomePage from '../../pages/HomePage/HomePage';
import './App.module.css';

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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
