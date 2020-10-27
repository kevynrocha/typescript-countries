import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: 0 0 4px #000;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 16px 16px 30px;
`;

export const Image = styled.img`
  width: 100%;
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
