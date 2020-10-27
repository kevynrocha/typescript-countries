import React from 'react';
import { CountryButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }: ButtonProps) => {
  console.log('button');
  return (
    <CountryButton type="submit" {...props}>
      {title}
    </CountryButton>
  );
};

export default Button;
