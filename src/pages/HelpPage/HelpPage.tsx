import { FC } from 'react';
import HelpCard from '../../components/HelpPage/HelpCard/HelpCard';
import HelpStep from '../../components/HelpPage/HelpStep/HelpStep';
import HelpRequestForm from '../../components/HelpPage/HelpRequestForm/HelpRequestForm';
import { HelpPageProps } from './HelpPageTypes';

const HelpPage: FC<HelpPageProps> = () => {
  return (
    <>
      <HelpStep />
      <HelpCard />
      <HelpRequestForm />
    </>
  );
};

export default HelpPage;
