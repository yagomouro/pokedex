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
    background-image: url("https://raw.githubusercontent.com/yagomouro/pokedex/master/src/assets/pokemon_wallpaper.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;

    @media screen and (max-width: 700px) {
        font-size: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 500px) {
        font-size: 40%;
    }
}

body{
    font-size: 1.8rem;
    color: #f0f0f0;
}

`;
