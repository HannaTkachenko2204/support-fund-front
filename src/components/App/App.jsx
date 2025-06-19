import About from '../About/About';
import Footer from '../Footer/Footer';
import GatHelp from '../GatHelp/GatHelp';
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
        <GatHelp />
      </main>
      <Footer />
    </>
  );
}

export default App;
