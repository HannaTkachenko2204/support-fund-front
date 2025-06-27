import { FC } from 'react';
import s from './Container.module.css';
import { ContainerProps } from './ContainerTypes';

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
