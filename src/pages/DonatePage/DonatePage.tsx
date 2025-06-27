import { FC } from 'react';
import DonationInfo from "../../components/DonatePage/DonationInfo/DonationInfo";
import { DonatePageProps } from './DonatePageTypes';

const DonatePage: FC<DonatePageProps> = () => {
    return <>
    <DonationInfo />
    </>
  };
  
  export default DonatePage;