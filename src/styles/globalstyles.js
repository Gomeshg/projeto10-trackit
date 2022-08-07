import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
  }

  h1{
    font-family: 'Playball', sans-serif;
    font-size: 68px;
    color: rgba(18, 107, 165, 1);
    text-align: center;
  }

  h2{
    font-family: 'Playball', sans-serif;
    font-size: 39px;
    color: white;
  }

  h3{
    font-size: 23px;
    color: rgba(18, 107, 165, 1);
  }

  p{
    font-size: 18px;
  }

  form{
      display: flex;
      flex-direction: column;
      gap: 5px;
  }

  a{
    font-size: 14px;
    text-decoration: underline;
    color: rgba(82, 182, 255, 1);

  }
`;

export {GlobalStyle};