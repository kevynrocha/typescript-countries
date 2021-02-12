import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { client } from './graphql/index';

import Layout from './components/Layout';
import Routes from './routes';
import GlobalStyles from './styles/global';
import dark from './styles/themes/dark';
// import light from './styles/themes/light';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <ApolloProvider client={client}>
      <Layout>
        <Routes />
      </Layout>
    </ApolloProvider>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
