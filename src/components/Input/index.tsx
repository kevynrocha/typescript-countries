import React from 'react';

import { ContainerInput, CountryInput, SearchIcon } from './styles';

const Input: React.FC = () => {
  console.log('input');
  return (
    <ContainerInput>
      <SearchIcon />
      <CountryInput placeholder="Search for a country..." />
    </ContainerInput>
  );
};

export default Input;
