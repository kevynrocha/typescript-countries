import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const CountryButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 4px;
  height: 40px;
  width: 120px;
`;

export const BackIcon = styled(FiArrowLeft).attrs({
  size: 20,
})`
  margin-right: 10px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: normal;
`;
