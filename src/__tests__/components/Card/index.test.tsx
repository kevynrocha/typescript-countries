import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';

import { client } from '../../../graphql';
import dark from '../../../styles/themes/dark';

import Card from '../../../components/Card';
import { getFormattedNumbers } from '../../../utils/functions';

const mockCardProps = {
  id: '1',
  index: 1,
  image: 'image_url',
  country: 'Brazil',
  population: '123456',
  region: 'America',
  capital: 'Brasilia',
};

const AllTheProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={dark}>
    <ApolloProvider client={client}>
      <BrowserRouter>{children}</BrowserRouter>
    </ApolloProvider>
  </ThemeProvider>
);

describe('Card', () => {
  it('should render Card component', async () => {
    const { getByText, getByAltText, getByRole } = render(
      <AllTheProviders>
        <Card {...mockCardProps} />
      </AllTheProviders>
    );

    expect(getByRole('link')).toHaveAttribute(
      'href',
      '/country/' + mockCardProps.id
    );
    expect(getByRole('img')).toHaveAttribute('src', mockCardProps.image);
    expect(getByRole('img')).toHaveAttribute('alt', mockCardProps.country);
    expect(getByText('Population:')).toBeInTheDocument();
    expect(getByText('Region:')).toBeInTheDocument();
    expect(getByText('Capital:')).toBeInTheDocument();
    expect(getByText(mockCardProps.country)).toBeInTheDocument();
    expect(
      getByText(getFormattedNumbers(mockCardProps.population))
    ).toBeInTheDocument();
    expect(getByText(mockCardProps.region)).toBeInTheDocument();
  });
});
