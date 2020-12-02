import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
  }

  body, button, input, select {
    font-family: 'Nunito Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: inherit;
  }

  input {
    border: none;
    outline: none;
  }

  select {
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 0.8rem;
  }

  h3 {
    font-size: 0.6rem;
  }

  h4 {
    font-size: 0.4rem;
  }
`;
