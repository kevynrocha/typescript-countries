import React from 'react';
import { useParams } from 'react-router-dom';

interface IParams {
  countryId: string | undefined;
}

const Details: React.FC = () => {
  const { countryId }: IParams = useParams();

  return (
    <h1>
      Details:
      {countryId}
    </h1>
  );
};

export default Details;
