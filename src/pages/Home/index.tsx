import React from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { FilterContainer, HomeContainer } from './styles';

const Home: React.FC = () => {
  console.log('home');

  return (
    <>
      <FilterContainer>
        <Input />
        <Select />
      </FilterContainer>

      <HomeContainer>
        <Card
          image="https://restcountries.eu/data/bra.svg"
          country="Brazil"
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />

        <Card
          image="https://restcountries.eu/data/bra.svg"
          country="Brazil"
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />

        <Card
          image="https://restcountries.eu/data/bra.svg"
          country="Brazil"
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />

        <Card
          image="https://restcountries.eu/data/bra.svg"
          country="Brazil"
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />

        <Card
          image="https://restcountries.eu/data/bra.svg"
          country="Brazil"
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />

        <Card
          image="https://restcountries.eu/data/bra.svg"
          country="Brazil"
          population="81,770,900"
          region="Europe"
          capital="Berlin"
        />
      </HomeContainer>
    </>
  );
};

export default Home;
