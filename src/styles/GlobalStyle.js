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
    --dark-bg: #215660;
    --gray-1: #eeebd3;
    --deep-dark: #17353a;
    --gray-2: #437882;
    --white : #fffdf3;
    --black: #0d1321;
    --red: #53ead9;
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
