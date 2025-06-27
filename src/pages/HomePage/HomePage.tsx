import { FC } from 'react';
import Hero from '../../components/HomePage/Hero/Hero';
import About from '../../components/HomePage/About/About';
import HelpNumbers from '../../components/HomePage/HelpNumbers/HelpNumbers';
import Partners from '../../components/HomePage/Partners/Partners';
import type { HomePageProps } from './HomePageTypes';

const HomePage: FC<HomePageProps> = () => {
  return (
    <>
      <Hero />
      <About />
      <HelpNumbers />
      <Partners />
    </>
  );
};

export default HomePage;