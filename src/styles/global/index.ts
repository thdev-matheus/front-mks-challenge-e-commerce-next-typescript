import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-shadow: 0 0 0 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      display: none;
    }

  }
  
  :root {
    font-size: 62.5%;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.textPrimary};
  }
  `;
