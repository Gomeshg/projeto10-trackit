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
    font-weight: 400;
    font-size: 68px;
    color: rgba(18, 107, 165, 1);
    text-align: center;
  }

  form{
      display: flex;
      flex-direction: column;
      gap: 5px;
  }


  input{
    min-width: 80%;
    max-width: 300px;
    height: 40px;

    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;
    font-size: 20px;
    color: rgba(219, 219, 219, 1);

    padding-left: 10px;
  }
`;

export {GlobalStyle};