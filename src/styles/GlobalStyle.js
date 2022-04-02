import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
::after,
::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #353535;
    --gray-1: #bbbbbf;
    --deep-dark: #242424;
    --gray-2: #363636;
    --white : #f0f7f4;
    --black: black;
    --green: #a4b8ae;
    --blue: #88d9e6;
    --yellow: #f4d58d;
    --red: #e75a7c;
    --shadow: 0 15px 20px rgba(255, 255,255, 0.25);
    --transition: all 0.1s linear;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a:hover {
    color: var(--red);
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;
