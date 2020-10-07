import React from 'react';
import { CountryButton } from './styles';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<IProps> = ({ title, ...props }: IProps) => {
  console.log('button');
  return (
    <CountryButton type="submit" {...props}>
      {title}
    </CountryButton>
  );
};

export default Button;
