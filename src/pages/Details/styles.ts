import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 450px;
`;

export const ContainerImage = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FlexRow = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerDescription = styled.div``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 32px;
  font-size: 2rem;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  line-height: 2rem;
  font-size: 1rem;

  span {
    font-weight: lighter;
  }
`;

export const BorderTitle = styled(Subtitle)`
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
`;

export const ContainerText = styled.div`
  margin: 20px 0;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
