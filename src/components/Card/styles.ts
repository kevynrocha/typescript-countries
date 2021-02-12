import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  background-color: ${({ theme }) => theme.colors.element};
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  display: block;
`;

export const Container = styled.div`
  padding: 16px 16px 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const ContainerText = styled.div`
  display: flex;
`;

export const Subtitle = styled.h3`
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

export const StrongSubtitle = styled(Subtitle)`
  font-weight: 600;
  margin-right: 5px;
`;
