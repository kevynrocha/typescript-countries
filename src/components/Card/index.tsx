import React from 'react';
import { motion } from 'framer-motion';

import { getFormattedNumbers } from '../../utils/functions';

import * as S from './styles';

interface CardProps {
  id: string;
  index: number;
  image: string;
  country: string;
  population: string;
  region: string;
  capital: string;
}

const Card: React.FC<CardProps> = ({
  id,
  index,
  image,
  country,
  population,
  region,
  capital,
}: CardProps) => {
  console.log('card');

  const cardVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1 * index,
        velocity: 0.2,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
    },
    hover: {
      scale: 1.1,
      transition: {
        velocity: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      <S.Wrapper to={`country/${id}`}>
        <S.Image src={image} alt={country} />
        <S.Container>
          <S.Title>{country}</S.Title>
          <S.ContainerText>
            <S.StrongSubtitle>Population:</S.StrongSubtitle>
            <S.Subtitle>{getFormattedNumbers(Number(population))}</S.Subtitle>
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
    </motion.div>
  );
};

export default Card;
