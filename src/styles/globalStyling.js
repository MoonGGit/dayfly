import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, .globalBox {
    margin: 0;
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica";
    -webkit-font-smoothing: subpixel-antialiased;
  }
 
`;

export default GlobalStyle;
