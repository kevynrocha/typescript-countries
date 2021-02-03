import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button';

import * as S from './styles';

interface CountryParams {
  id: string | undefined;
}

const Details: React.FC = () => {
  const { id }: CountryParams = useParams();
  console.log('Details', id);
  return (
    <>
      <Button title="Back" to="/" leftIcon />
      <S.Container>
        <S.ContainerImage>
          <S.Image src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
        </S.ContainerImage>
        <S.ContainerDescription>
          <S.Title>Brazil</S.Title>
          <S.FlexRow>
            <S.ContainerText>
              <S.Subtitle>
                Native Name: <span>Brasil</span>
              </S.Subtitle>
              <S.Subtitle>
                Population: <span>11,319.922</span>
              </S.Subtitle>
              <S.Subtitle>
                Region: <span>America</span>
              </S.Subtitle>
              <S.Subtitle>
                Sub Region: <span>EHHHE</span>
              </S.Subtitle>
              <S.Subtitle>
                Capital: <span>Brasília</span>
              </S.Subtitle>
            </S.ContainerText>

            <S.ContainerText>
              <S.Subtitle>
                Top level domain: <span>be</span>
              </S.Subtitle>
              <S.Subtitle>
                Currencies: <span>Euro</span>
              </S.Subtitle>
              <S.Subtitle>
                Languages: <span>Dutch</span>
              </S.Subtitle>
            </S.ContainerText>
          </S.FlexRow>

          <S.FlexRow>
            <S.BorderTitle>Border Countries:</S.BorderTitle>
            <S.ContainerButtons>
              <Button title="France" to="country/France" />
              <Button title="Germany" to="country/Germany" />
              <Button title="Netherlands" to="country/$Netherlands" />
            </S.ContainerButtons>
          </S.FlexRow>
        </S.ContainerDescription>
      </S.Container>
    </>
  );
};

export default Details;
