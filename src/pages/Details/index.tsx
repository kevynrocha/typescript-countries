import React from 'react';
import { useParams } from 'react-router-dom';

interface CountryParams {
  id: string | undefined;
}

const Details: React.FC = () => {
  const { id }: CountryParams = useParams();
  console.log('Details');
  return (
    <h1>
      Details:
      {id}
    </h1>
  );
};

export default Details;
