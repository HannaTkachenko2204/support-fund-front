import { FC } from 'react';
import GatHelp from "../../components/StoriesPage/GatHelp/GatHelp"
import StoriesList from "../../components/StoriesPage/StoriesList/StoriesList";
import type { StoriesPageProps } from './StoriesPageTypes';

const StoriesPage: FC<StoriesPageProps>= () => {
  return (
    <> 
      <GatHelp />
      <StoriesList />
    </>
  );
}

export default StoriesPage