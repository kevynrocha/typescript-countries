import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border-radius: 4px;
  padding: 0 16px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.element};
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
