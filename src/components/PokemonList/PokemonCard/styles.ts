import styled from "styled-components";

export const PokemonWrapper = styled.div`
    width: max-content;
    display: flex;
`;

export const PokemonImage = styled.img`
    width: 13rem;
    position: absolute;
    top: 10.5rem;
    left: 10rem;
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
    color: #f0f0f0;
    position: relative;
`;

export const DataType = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    gap: 4rem;
    position: relative;
    left: -3rem;
    top: 5.3rem;
    font-size: 2rem;
`;
