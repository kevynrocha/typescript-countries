import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  console.log('header');
  return (
    <S.CountryHeader>
      <S.Container>
        <S.Title>Where in the world?</S.Title>
        <S.TitleMode>
          <S.Icon />
          Dark Mode
        </S.TitleMode>
      </S.Container>
    </S.CountryHeader>
  );
};

export default Header;
