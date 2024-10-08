import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background: rgb(226, 213, 213);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 25px;
}
`;
