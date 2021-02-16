import React from 'react';

import { CountrySelect } from './styles';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Select: React.FC<SelectProps> = ({ options, ...props }) => (
  <CountrySelect {...props}>
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </CountrySelect>
);

export default React.memo(Select);
