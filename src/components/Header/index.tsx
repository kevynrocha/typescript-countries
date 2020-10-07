import React from 'react';

// eslint-disable-next-line object-curly-newline
import { CountryHeader, Container, Title, TitleMode, Icon } from './styles';

const Header: React.FC = () => {
  console.log('header');
  return (
    <CountryHeader>
      <Container>
        <Title>Where in the world?</Title>
        <TitleMode>
          <Icon />
          Dark Mode
        </TitleMode>
      </Container>
    </CountryHeader>
  );
};

export default Header;
