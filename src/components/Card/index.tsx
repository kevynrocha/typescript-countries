import React from 'react';

import * as S from './styles';

interface CardProps {
  image: string;
  country: string;
  population: string;
  region: string;
  capital: string;
}

const Card: React.FC<CardProps> = ({
  image,
  country,
  population,
  region,
  capital,
}: CardProps) => {
  console.log('card');
  return (
    <S.Wrapper to={`country/${country}`}>
      <S.Image src={image} alt={country} />
      <S.Container>
        <S.Title>{country}</S.Title>
        <S.ContainerText>
          <S.StrongSubtitle>Population:</S.StrongSubtitle>
          <S.Subtitle> {population} </S.Subtitle>
        </S.ContainerText>
        <S.ContainerText>
          <S.StrongSubtitle>Region:</S.StrongSubtitle>
          <S.Subtitle> {region} </S.Subtitle>
        </S.ContainerText>
        <S.ContainerText>
          <S.StrongSubtitle>Capital:</S.StrongSubtitle>
          <S.Subtitle> {capital} </S.Subtitle>
        </S.ContainerText>
      </S.Container>
    </S.Wrapper>
  );
};

export default Card;
