import styled from 'styled-components';

export const CountrySelect = styled.select`
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  max-width: 200px;
  border: 0;
  padding: 0 20px;
`;
