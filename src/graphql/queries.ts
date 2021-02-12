import { gql } from '@apollo/client';

export interface Country {
  id: string;
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}

export interface CountryResponse {
  countries: {
    edges: Array<{ node: Country }>;
  };
}

export interface CountryDetailsResponse {
  borders: Array<string>;
  capital: string;
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: Array<string>;
  currencies: {
    edges: Array<{ node: { name: string } }>;
  };
  languages: {
    edges: Array<{ node: { name: string } }>;
  };
}

export type OmitCurrencyLanguage = Omit<
  CountryDetailsResponse,
  'currencies' | 'languages'
>;

export interface CountryDetails extends OmitCurrencyLanguage {
  currencies: Array<string>;
  languages: Array<string>;
}

export const LOAD_COUNTRIES = gql`
  query {
    countries {
      edges {
        node {
          id
          name
          flag
          population
          region
          capital
        }
      }
    }
  }
`;

export const LOAD_COUNTRY = gql`
  query Country($id: ID!) {
    country(id: $id) {
      nativeName
      population
      region
      subregion
      capital
      topLevelDomain
      borders
      flag
      currencies {
        edges {
          node {
            name
          }
        }
      }
      languages {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;
