import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    min-height: calc(100vh - var(--bodyPaddingTop));
    display: flex;
    flex-direction: column;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
    
    @media (max-width: 800px) {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  } 

  a {
    color: inherit;
    text-decoration: none;
  } 

  :root {
    --primary: #2A7AE4;
    --black: #000000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #e5e5e5; 
    --white: #FFFFFF;
    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
  }
`;
