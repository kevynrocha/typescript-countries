import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: 'Nunito Sans';
    font-size: 14px;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: inherit;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 30px;
  }

`;
