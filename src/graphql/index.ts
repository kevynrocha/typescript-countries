import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://graphql.country/graphql',
  cache: new InMemoryCache(),
});
