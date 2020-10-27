import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import Routes from './routes';
import GlobalStyles from './styles/global';
import dark from './styles/themes/dark';
// import light from './styles/themes/light';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <Layout>
      <Routes />
    </Layout>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
