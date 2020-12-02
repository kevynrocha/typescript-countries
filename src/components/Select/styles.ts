import styled from 'styled-components';

export const CountrySelect = styled.select`
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
  border-radius: 4px;
  width: 100%;
  border: 0;
  padding: 0 20px;
  display: flex;
  height: 40px;
  margin-top: 16px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 0;
    max-width: 200px;
  }
`;
