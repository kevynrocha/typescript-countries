import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  padding: 0 16px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

export const CountryInput = styled.input`
  background-color: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 16px;
  font-size: 0.8rem;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus::placeholder {
    transition: 0.3s;
    color: transparent;
  }
`;

export const SearchIcon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
`;
