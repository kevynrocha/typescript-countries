import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import {
  LOAD_COUNTRIES,
  Country,
  CountryResponse,
} from '../../graphql/queries';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Select from '../../components/Select';

import * as S from './styles';

const Home: React.FC = () => {
  const { loading, error, data } = useQuery<CountryResponse>(LOAD_COUNTRIES);
  const [regions, setRegions] = useState<string[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState({
    country: '',
    region: '',
  });

  useEffect(() => {
    if (data) {
      const allCountries = data.countries.edges
        .map(({ node }) => node)
        .map(country => {
          const updatedCountry = { ...country, region: 'No region' };
          return !country.region ? updatedCountry : country;
        });
      const allRegions = allCountries.map(({ region }) => region);
      const uniquesRegions = allRegions
        .filter((item, index) => allRegions.indexOf(item) === index)
        .map(item => (!item ? 'No region' : item))
        .sort();

      setRegions(['All regions', ...uniquesRegions]);
      setCountries(allCountries);
    }
  }, [data]);

  useEffect(() => {
    const results = countries.filter(({ name, region }) => {
      const searchRegion =
        search.region === 'All regions'
          ? countries
          : region.includes(search.region);

      const searchCountry = name
        .toLowerCase()
        .includes(search.country.toLowerCase());

      return searchRegion && searchCountry;
    });

    setFilteredCountries(results);
  }, [search, countries]);

  const handleFilterCountry = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setSearch({ ...search, [name]: value });
    },
    [search]
  );

  const handleFilterRegion = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value, name } = e.target;
      setSearch({ ...search, [name]: value });
    },
    [search]
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}(</h1>;
  if (!data) return <h1>Not found...</h1>;

  return (
    <>
      <S.FilterContainer>
        <Input onChange={handleFilterCountry} name="country" />
        <Select options={regions} onChange={handleFilterRegion} name="region" />
      </S.FilterContainer>

      <S.HomeContainer>
        {filteredCountries.map((country, index) => (
          <Card
            key={country.id}
            id={country.id}
            index={index}
            image={country.flag}
            country={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </S.HomeContainer>
    </>
  );
};

export default Home;
