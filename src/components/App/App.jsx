import About from '../About/About';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
