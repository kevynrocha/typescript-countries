import React from 'react';

import { CountrySelect } from './styles';

const Select: React.FC = () => (
  <CountrySelect>
    <option value="volvo" disabled selected>
      Filter by Region
    </option>
    <option value="saab">Africa</option>
    <option value="opel">America</option>
    <option value="audi">Asia</option>
    <option value="audi">Europe</option>
    <option value="audi">Oceania</option>
  </CountrySelect>
);

export default Select;
