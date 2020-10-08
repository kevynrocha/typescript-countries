import styled from 'styled-components';
import { RiMoonFill } from 'react-icons/ri';

export const CountryHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0 0 4px #000;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const TitleMode = styled.button`
  font-size: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const Icon = styled(RiMoonFill)`
  margin-right: 8px;
`;
