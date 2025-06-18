import About from '../About/About';
import Header from '../Header/Header';
import HelpNumbers from '../HelpNumbers/HelpNumbers';
import Hero from '../Hero/Hero';
import './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HelpNumbers />
      </main>
    </>
  );
}

export default App;
