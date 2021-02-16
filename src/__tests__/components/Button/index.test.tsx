import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';

import { client } from '../../../graphql';
import dark from '../../../styles/themes/dark';

import Button from '../../../components/Button';

const mockButtonProps = {
  title: 'Test title',
  to: 'test_to',
};

const AllTheProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={dark}>
    <ApolloProvider client={client}>
      <BrowserRouter>{children}</BrowserRouter>
    </ApolloProvider>
  </ThemeProvider>
);

describe('Card', () => {
  it('should render Button component', async () => {
    const { getByText, getByRole } = render(
      <AllTheProviders>
        <Button {...mockButtonProps} />
      </AllTheProviders>
    );

    expect(getByRole('link')).toHaveAttribute('href', `/${mockButtonProps.to}`);
    expect(getByText(mockButtonProps.title)).toBeInTheDocument();
  });
});
