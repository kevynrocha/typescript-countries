import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

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
  const themeContext = useContext(ThemeContext);

  console.log('button');
  return (
    <S.CountryButton to={to} {...props}>
      {leftIcon && <S.BackIcon color={themeContext.colors.text} />}
      <S.Title>{title}</S.Title>
    </S.CountryButton>
  );
};

export default Button;
