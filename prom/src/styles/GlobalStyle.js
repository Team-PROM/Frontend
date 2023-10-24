import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    overflow: hidden;
    font-family:"Pretendard";
  }
  a {
    text-decoration:none;
  }
  input {
    -webkit-user-select:all;
    -moz-user-select:all;
    -ms-user-select:all;
    user-select:all;
  }
`;

export default GlobalStyle;
