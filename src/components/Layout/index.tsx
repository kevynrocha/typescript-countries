import React, { ReactNode } from 'react';
import Header from '../Header';
import { Wrapper, Container } from './styles';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps) => (
  <Wrapper>
    <Header />
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
