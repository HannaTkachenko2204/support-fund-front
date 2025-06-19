import About from '../About/About';
import Header from '../Header/Header';
import HelpNumbers from '../HelpNumbers/HelpNumbers';
import Hero from '../Hero/Hero';
import Partners from '../Partners/Partners';
import './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HelpNumbers />
        <Partners />
      </main>
    </>
  );
}

export default App;
