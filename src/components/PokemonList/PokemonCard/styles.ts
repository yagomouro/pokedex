import styled from "styled-components";

export const PokemonWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const PokemonImage = styled.img`
    width: 12rem;
`;

export const PokemonImageWrapper = styled.div`
    width: 17.4rem;
    height: 11.4rem;
    position: absolute;
    left: 8.3rem;
    top: 11.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15rem;
    left: 40rem;
    gap: 10rem;
`;

export const PokemonData = styled.span`
    width: max-content;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;

    &.pokemonName {
        width: 16.8rem;
        height: 6rem;
        top: -2.2rem;
        left: -3.7rem;
    }

    &.pokemonType {
        width: 8.1rem;
        height: 3rem;
    }
`;

export const DataType = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    gap: 1.7rem;
    position: relative;
    left: -4.3rem;
    top: 1.5rem;
`;
