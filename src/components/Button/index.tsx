import React, { useContext } from 'react';

import * as S from './styles';

interface ButtonProps {
  title: string;
  leftIcon?: boolean;
  to: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  leftIcon,
  to,
  ...props
}: ButtonProps) => {
  return (
    <S.CountryButton to={to} {...props}>
      {leftIcon && <S.BackIcon />}
      <S.Title>{title}</S.Title>
    </S.CountryButton>
  );
};

export default Button;
