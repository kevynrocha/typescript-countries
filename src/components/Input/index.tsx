import React from 'react';

import { ContainerInput, CountryInput, SearchIcon } from './styles';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  console.log('input');
  return (
    <ContainerInput>
      <SearchIcon />
      <CountryInput placeholder="Search for a country..." {...props} />
    </ContainerInput>
  );
};

export default React.memo(Input);
