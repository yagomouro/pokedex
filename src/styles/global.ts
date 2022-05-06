import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, :after, :before{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    border: none;
    text-decoration: none;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}

html{
    height: 100%;
    min-height: 100%;
    
    font-family: "Helvetica", sans-serif;
    font-size: 62.5%;

    scroll-behavior: smooth;
}

body{
    font-size: 2rem;
}
`;
