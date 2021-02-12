import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import {
  CountryDetails,
  CountryDetailsResponse,
  LOAD_COUNTRY,
} from '../../graphql/queries';
import { getFormattedNumbers } from '../../utils/functions';

import Button from '../../components/Button';

import * as S from './styles';

interface CountryParams {
  id: string | undefined;
}
const Details: React.FC = () => {
  const { id }: CountryParams = useParams();
  const { loading, error, data } = useQuery<{
    country: CountryDetailsResponse;
  }>(LOAD_COUNTRY, {
    variables: { id },
  });
  const [country, setCountry] = useState<CountryDetails>({
    name: '',
    nativeName: '',
    borders: [],
    capital: '',
    flag: '',
    population: 0,
    region: '',
    subregion: '',
    topLevelDomain: [],
    currencies: [],
    languages: [],
  });

  useEffect(() => {
    if (data) {
      const currencies = data.country.currencies.edges.map(
        currency => currency.node.name
      );
      const languages = data.country.languages.edges.map(
        language => language.node.name
      );

      const updatedCountry: CountryDetails = {
        ...data.country,
        currencies,
        languages,
      };

      setCountry(updatedCountry);
    }
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}(</h1>;
  if (!data) return <h1>Not found...</h1>;

  return (
    <>
      <Button title="Back" to="/" leftIcon />
      <S.Container>
        <S.ContainerImage>
          <S.Image src={country.flag} alt={country.name} />
        </S.ContainerImage>
        <S.ContainerDescription>
          <S.Title>{country.name}</S.Title>
          <S.FlexRow>
            <S.ContainerText>
              <S.Subtitle>
                Native Name: <span>{country.nativeName}</span>
              </S.Subtitle>
              <S.Subtitle>
                Population:{' '}
                <span>{getFormattedNumbers(country.population)}</span>
              </S.Subtitle>
              <S.Subtitle>
                Region: <span>{country.region}</span>
              </S.Subtitle>
              <S.Subtitle>
                Sub Region: <span>{country.subregion}</span>
              </S.Subtitle>
              <S.Subtitle>
                Capital: <span>{country.capital}</span>
              </S.Subtitle>
            </S.ContainerText>

            <S.ContainerText>
              <S.Subtitle>
                Top level domain:{' '}
                <span>{country.topLevelDomain.join(', ')}</span>
              </S.Subtitle>
              <S.Subtitle>
                Currencies: <span>{country.currencies.join(', ')}</span>
              </S.Subtitle>
              <S.Subtitle>
                Languages: <span>{country.languages.join(', ')}</span>
              </S.Subtitle>
            </S.ContainerText>
          </S.FlexRow>

          {!!country.borders.length && (
            <S.FlexRow>
              <S.BorderTitle>Border Countries:</S.BorderTitle>
              <S.ContainerButtons>
                {country.borders.map(border => (
                  <Button
                    key={border}
                    title={border}
                    to={`country/${border}`}
                  />
                ))}
              </S.ContainerButtons>
            </S.FlexRow>
          )}
        </S.ContainerDescription>
      </S.Container>
    </>
  );
};

export default Details;
