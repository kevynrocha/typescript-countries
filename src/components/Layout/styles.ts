import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background };
  min-height: 100vh;
`;

export const Container = styled.div`
  margin: 32px auto;
  max-width: 1150px;
`;
