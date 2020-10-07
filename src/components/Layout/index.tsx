import React, { ReactNode } from 'react';
import Header from '../Header';
import { Container } from './styles';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps) => (
  <Container>
    <Header/>
    {children}
  </Container>
);

export default Layout;
