import React, { ReactNode } from 'react';

import Header from '../Header';

import { Wrapper, Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <Wrapper>
    <Header />
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
